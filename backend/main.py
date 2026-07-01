from pathlib import Path

from fastapi import Depends, FastAPI, HTTPException, status
from pydantic import BaseModel
from sqlalchemy import Boolean, Column, Integer, String, create_engine
from sqlalchemy.orm import Session, declarative_base, sessionmaker

DB_PATH = Path(__file__).resolve().parent / "app.db"
DATABASE_URL = f"sqlite:///{DB_PATH}"

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()


class ExperienceModel(Base):
    __tablename__ = "experiences"

    id = Column(Integer, primary_key=True, index=True)
    priority = Column(Integer, nullable=False)
    show = Column(Boolean, nullable=False)
    position = Column(String, nullable=False)
    companyName = Column(String, nullable=False)
    location = Column(String, nullable=False)
    startDate = Column(String, nullable=False)
    endDate = Column(String, nullable=False)
    duties = Column(String, nullable=False)
    skills = Column(String, nullable=False)
    url = Column(String, nullable=False)


class SkillModel(Base):
    __tablename__ = "skills"

    id = Column(Integer, primary_key=True, index=True)
    priority = Column(Integer, nullable=False)
    show = Column(Boolean, nullable=False)
    label = Column(String, nullable=False)
    value = Column(String, nullable=False)
    category = Column(String, nullable=False)


class SocialModel(Base):
    __tablename__ = "socials"

    id = Column(Integer, primary_key=True, index=True)
    priority = Column(Integer, nullable=False)
    show = Column(Boolean, nullable=False)
    label = Column(String, nullable=False)
    value = Column(String, nullable=False)
    url = Column(String, nullable=False)


class ResumeModel(Base):
    __tablename__ = "resumes"

    id = Column(Integer, primary_key=True, index=True)
    priority = Column(Integer, nullable=False)
    show = Column(Boolean, nullable=False)
    label = Column(String, nullable=False)
    value = Column(String, nullable=False)
    url = Column(String, nullable=False)


class MessageModel(Base):
    __tablename__ = "messages"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    message = Column(String, nullable=False)


class NoteModel(Base):
    __tablename__ = "notes"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    details = Column(String, nullable=False)
    content = Column(String, nullable=False)
    thumbnail = Column(String, nullable=False)


Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Amirhossein Mohammadi Resume API",
    version="1.0.0",
    summary="FastAPI backend for the personal portfolio site",
    description="SQLite-backed API for experiences, skills, socials, resumes, messages, and notes",
    contact={
        "name": "Amirhossein Mohammadi",
        "url": "https://amirhossein.info",
        "email": "hi@amirhossein.info",
    },
    openapi_tags=[
        {"name": "Experiences", "description": "Manage portfolio experiences"},
        {"name": "Skills", "description": "Manage displayed skills"},
        {"name": "Socials", "description": "Manage social links"},
        {"name": "Resumes", "description": "Manage downloadable resumes"},
        {"name": "Message", "description": "Handle contact messages"},
        {"name": "Note", "description": "Manage notes"},
    ],
)


class Experience(BaseModel):
    priority: int
    show: bool
    position: str
    companyName: str
    location: str
    startDate: str
    endDate: str
    duties: str
    skills: str
    url: str


class ExperienceRead(Experience):
    id: int


class Skill(BaseModel):
    priority: int
    show: bool
    label: str
    value: str
    category: str


class SkillRead(Skill):
    id: int


class Social(BaseModel):
    priority: int
    show: bool
    label: str
    value: str
    url: str


class SocialRead(Social):
    id: int


class Resume(BaseModel):
    priority: int
    show: bool
    label: str
    value: str
    url: str


class ResumeRead(Resume):
    id: int


class Message(BaseModel):
    name: str
    email: str
    message: str


class MessageRead(Message):
    id: int


class Note(BaseModel):
    title: str
    details: str
    content: str
    thumbnail: str


class NoteRead(Note):
    id: int


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
async def read_root():
    return {"message": "Amirhossein FastAPI backend is running"}


@app.get("/api/ping")
async def ping():
    return {"message": "pong"}


@app.get("/api/experiences", response_model=list[ExperienceRead], tags=["Experiences"])
async def all_experiences(db: Session = Depends(get_db)):
    return db.query(ExperienceModel).all()


@app.post("/api/experiences", response_model=ExperienceRead, status_code=status.HTTP_201_CREATED, tags=["Experiences"])
async def create_experience(experience: Experience, db: Session = Depends(get_db)):
    db_item = ExperienceModel(**experience.model_dump())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item


@app.get("/api/experiences/{experience_id}", response_model=ExperienceRead, tags=["Experiences"])
async def get_experience(experience_id: int, db: Session = Depends(get_db)):
    item = db.get(ExperienceModel, experience_id)
    if not item:
        raise HTTPException(status_code=404, detail="Experience not found")
    return item


@app.put("/api/experiences/{experience_id}", response_model=ExperienceRead, tags=["Experiences"])
async def update_experience(experience_id: int, experience: Experience, db: Session = Depends(get_db)):
    item = db.get(ExperienceModel, experience_id)
    if not item:
        raise HTTPException(status_code=404, detail="Experience not found")

    for key, value in experience.model_dump().items():
        setattr(item, key, value)

    db.commit()
    db.refresh(item)
    return item


@app.delete("/api/experiences/{experience_id}", status_code=status.HTTP_204_NO_CONTENT, tags=["Experiences"])
async def delete_experience(experience_id: int, db: Session = Depends(get_db)):
    item = db.get(ExperienceModel, experience_id)
    if not item:
        raise HTTPException(status_code=404, detail="Experience not found")
    db.delete(item)
    db.commit()
    return None


@app.get("/api/skills", response_model=list[SkillRead], tags=["Skills"])
async def all_skills(db: Session = Depends(get_db)):
    return db.query(SkillModel).all()


@app.post("/api/skills", response_model=SkillRead, status_code=status.HTTP_201_CREATED, tags=["Skills"])
async def create_skill(skill: Skill, db: Session = Depends(get_db)):
    db_item = SkillModel(**skill.model_dump())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item


@app.get("/api/skills/{skill_id}", response_model=SkillRead, tags=["Skills"])
async def get_skill(skill_id: int, db: Session = Depends(get_db)):
    item = db.get(SkillModel, skill_id)
    if not item:
        raise HTTPException(status_code=404, detail="Skill not found")
    return item


@app.put("/api/skills/{skill_id}", response_model=SkillRead, tags=["Skills"])
async def update_skill(skill_id: int, skill: Skill, db: Session = Depends(get_db)):
    item = db.get(SkillModel, skill_id)
    if not item:
        raise HTTPException(status_code=404, detail="Skill not found")

    for key, value in skill.model_dump().items():
        setattr(item, key, value)

    db.commit()
    db.refresh(item)
    return item


@app.delete("/api/skills/{skill_id}", status_code=status.HTTP_204_NO_CONTENT, tags=["Skills"])
async def delete_skill(skill_id: int, db: Session = Depends(get_db)):
    item = db.get(SkillModel, skill_id)
    if not item:
        raise HTTPException(status_code=404, detail="Skill not found")
    db.delete(item)
    db.commit()
    return None


@app.get("/api/socials", response_model=list[SocialRead], tags=["Socials"])
async def all_socials(db: Session = Depends(get_db)):
    return db.query(SocialModel).all()


@app.post("/api/socials", response_model=SocialRead, status_code=status.HTTP_201_CREATED, tags=["Socials"])
async def create_social(social: Social, db: Session = Depends(get_db)):
    db_item = SocialModel(**social.model_dump())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item


@app.get("/api/socials/{social_id}", response_model=SocialRead, tags=["Socials"])
async def get_social(social_id: int, db: Session = Depends(get_db)):
    item = db.get(SocialModel, social_id)
    if not item:
        raise HTTPException(status_code=404, detail="Social not found")
    return item


@app.put("/api/socials/{social_id}", response_model=SocialRead, tags=["Socials"])
async def update_social(social_id: int, social: Social, db: Session = Depends(get_db)):
    item = db.get(SocialModel, social_id)
    if not item:
        raise HTTPException(status_code=404, detail="Social not found")

    for key, value in social.model_dump().items():
        setattr(item, key, value)

    db.commit()
    db.refresh(item)
    return item


@app.delete("/api/socials/{social_id}", status_code=status.HTTP_204_NO_CONTENT, tags=["Socials"])
async def delete_social(social_id: int, db: Session = Depends(get_db)):
    item = db.get(SocialModel, social_id)
    if not item:
        raise HTTPException(status_code=404, detail="Social not found")
    db.delete(item)
    db.commit()
    return None


@app.get("/api/resumes", response_model=list[ResumeRead], tags=["Resumes"])
async def all_resumes(db: Session = Depends(get_db)):
    return db.query(ResumeModel).all()


@app.post("/api/resumes", response_model=ResumeRead, status_code=status.HTTP_201_CREATED, tags=["Resumes"])
async def create_resume(resume: Resume, db: Session = Depends(get_db)):
    db_item = ResumeModel(**resume.model_dump())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item


@app.get("/api/resumes/{resume_id}", response_model=ResumeRead, tags=["Resumes"])
async def get_resume(resume_id: int, db: Session = Depends(get_db)):
    item = db.get(ResumeModel, resume_id)
    if not item:
        raise HTTPException(status_code=404, detail="Resume not found")
    return item


@app.put("/api/resumes/{resume_id}", response_model=ResumeRead, tags=["Resumes"])
async def update_resume(resume_id: int, resume: Resume, db: Session = Depends(get_db)):
    item = db.get(ResumeModel, resume_id)
    if not item:
        raise HTTPException(status_code=404, detail="Resume not found")

    for key, value in resume.model_dump().items():
        setattr(item, key, value)

    db.commit()
    db.refresh(item)
    return item


@app.delete("/api/resumes/{resume_id}", status_code=status.HTTP_204_NO_CONTENT, tags=["Resumes"])
async def delete_resume(resume_id: int, db: Session = Depends(get_db)):
    item = db.get(ResumeModel, resume_id)
    if not item:
        raise HTTPException(status_code=404, detail="Resume not found")
    db.delete(item)
    db.commit()
    return None


@app.get("/api/messages", response_model=list[MessageRead], tags=["Message"])
async def all_messages(db: Session = Depends(get_db)):
    return db.query(MessageModel).all()


@app.post("/api/messages", response_model=MessageRead, status_code=status.HTTP_201_CREATED, tags=["Message"])
async def create_message(message: Message, db: Session = Depends(get_db)):
    db_item = MessageModel(**message.model_dump())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item


@app.get("/api/messages/{message_id}", response_model=MessageRead, tags=["Message"])
async def get_message(message_id: int, db: Session = Depends(get_db)):
    item = db.get(MessageModel, message_id)
    if not item:
        raise HTTPException(status_code=404, detail="Message not found")
    return item


@app.put("/api/messages/{message_id}", response_model=MessageRead, tags=["Message"])
async def update_message(message_id: int, message: Message, db: Session = Depends(get_db)):
    item = db.get(MessageModel, message_id)
    if not item:
        raise HTTPException(status_code=404, detail="Message not found")

    for key, value in message.model_dump().items():
        setattr(item, key, value)

    db.commit()
    db.refresh(item)
    return item


@app.delete("/api/messages/{message_id}", status_code=status.HTTP_204_NO_CONTENT, tags=["Message"])
async def delete_message(message_id: int, db: Session = Depends(get_db)):
    item = db.get(MessageModel, message_id)
    if not item:
        raise HTTPException(status_code=404, detail="Message not found")
    db.delete(item)
    db.commit()
    return None


@app.get("/api/notes", response_model=list[NoteRead], tags=["Note"])
async def all_notes(db: Session = Depends(get_db)):
    return db.query(NoteModel).all()


@app.post("/api/notes", response_model=NoteRead, status_code=status.HTTP_201_CREATED, tags=["Note"])
async def create_note(note: Note, db: Session = Depends(get_db)):
    db_item = NoteModel(**note.model_dump())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item


@app.get("/api/notes/{note_id}", response_model=NoteRead, tags=["Note"])
async def get_note(note_id: int, db: Session = Depends(get_db)):
    item = db.get(NoteModel, note_id)
    if not item:
        raise HTTPException(status_code=404, detail="Note not found")
    return item


@app.put("/api/notes/{note_id}", response_model=NoteRead, tags=["Note"])
async def update_note(note_id: int, note: Note, db: Session = Depends(get_db)):
    item = db.get(NoteModel, note_id)
    if not item:
        raise HTTPException(status_code=404, detail="Note not found")

    for key, value in note.model_dump().items():
        setattr(item, key, value)

    db.commit()
    db.refresh(item)
    return item


@app.delete("/api/notes/{note_id}", status_code=status.HTTP_204_NO_CONTENT, tags=["Note"])
async def delete_note(note_id: int, db: Session = Depends(get_db)):
    item = db.get(NoteModel, note_id)
    if not item:
        raise HTTPException(status_code=404, detail="Note not found")
    db.delete(item)
    db.commit()
    return None
