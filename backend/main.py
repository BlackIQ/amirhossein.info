# FastAPI, Pydantic, SQLAlchemy, SQLAlchemy ORM
from fastapi import Depends, FastAPI, HTTPException, status, Security
from fastapi.security import APIKeyHeader
from sqlalchemy.orm import Session

# Local imports
from database import SessionLocal
from models import ExperienceModel, SkillModel, SocialModel, ResumeModel, MessageModel, NoteModel
from repositories import Experience, ExperienceRead, Skill, SkillRead, Social, SocialRead, Resume, ResumeRead, Message, \
    MessageRead, Note, NoteRead
from settings import settings

# FastAPI app
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


# Function to get database
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# Middlewares
header_schema = APIKeyHeader(name="X-API-KEY", description="API Key in header")


# Handle API-Key
async def handle_apikey(api_key: str = Security(header_schema)):
    if not api_key:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Missing API key"
        )

    if api_key != settings.api_key:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid API key"
        )


# ---------- Routes ---------- #


# Root
@app.get("/")
async def read_root():
    return {"message": "Amirhossein FastAPI backend is running"}


# Welcome
@app.get("/api", dependencies=[Depends(handle_apikey)])
async def api():
    return {"message": "Welcome to Amirhossein FastAPI backend"}


# Health check route
@app.get("/api/ping")
async def ping():
    return {"message": "pong"}


# ---------- Experience ---------- #

# Get all Experiences
@app.get("/api/experiences", response_model=list[ExperienceRead], tags=["Experiences"])
async def all_experiences(db: Session = Depends(get_db)):
    return db.query(ExperienceModel).all()


# Create one Experience
@app.post("/api/experiences", response_model=ExperienceRead, status_code=status.HTTP_201_CREATED, tags=["Experiences"],
          dependencies=[Depends(handle_apikey)])
async def create_experience(experience: Experience, db: Session = Depends(get_db)):
    db_item = ExperienceModel(**experience.model_dump())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item


# Get one Experience
@app.get("/api/experiences/{experience_id}", response_model=ExperienceRead, tags=["Experiences"])
async def get_experience(experience_id: int, db: Session = Depends(get_db)):
    item = db.get(ExperienceModel, experience_id)
    if not item:
        raise HTTPException(status_code=404, detail="Experience not found")
    return item


# Update one Experience
@app.put("/api/experiences/{experience_id}", response_model=ExperienceRead, tags=["Experiences"],
         dependencies=[Depends(handle_apikey)])
async def update_experience(experience_id: int, experience: Experience, db: Session = Depends(get_db)):
    item = db.get(ExperienceModel, experience_id)
    if not item:
        raise HTTPException(status_code=404, detail="Experience not found")

    for key, value in experience.model_dump().items():
        setattr(item, key, value)

    db.commit()
    db.refresh(item)
    return item


# Delete one Experience
@app.delete("/api/experiences/{experience_id}", status_code=status.HTTP_204_NO_CONTENT, tags=["Experiences"],
            dependencies=[Depends(handle_apikey)])
async def delete_experience(experience_id: int, db: Session = Depends(get_db)):
    item = db.get(ExperienceModel, experience_id)
    if not item:
        raise HTTPException(status_code=404, detail="Experience not found")
    db.delete(item)
    db.commit()
    return None


# ---------- Skill ---------- #

# Get all Skills
@app.get("/api/skills", response_model=list[SkillRead], tags=["Skills"])
async def all_skills(db: Session = Depends(get_db)):
    return db.query(SkillModel).all()


# Create one Skill
@app.post("/api/skills", response_model=SkillRead, status_code=status.HTTP_201_CREATED, tags=["Skills"],
          dependencies=[Depends(handle_apikey)])
async def create_skill(skill: Skill, db: Session = Depends(get_db)):
    db_item = SkillModel(**skill.model_dump())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item


# Get one Skill
@app.get("/api/skills/{skill_id}", response_model=SkillRead, tags=["Skills"])
async def get_skill(skill_id: int, db: Session = Depends(get_db)):
    item = db.get(SkillModel, skill_id)
    if not item:
        raise HTTPException(status_code=404, detail="Skill not found")
    return item


# Update one Skill
@app.put("/api/skills/{skill_id}", response_model=SkillRead, tags=["Skills"],
         dependencies=[Depends(handle_apikey)])
async def update_skill(skill_id: int, skill: Skill, db: Session = Depends(get_db)):
    item = db.get(SkillModel, skill_id)
    if not item:
        raise HTTPException(status_code=404, detail="Skill not found")

    for key, value in skill.model_dump().items():
        setattr(item, key, value)

    db.commit()
    db.refresh(item)
    return item


# Delete one Skill
@app.delete("/api/skills/{skill_id}", status_code=status.HTTP_204_NO_CONTENT, tags=["Skills"],
            dependencies=[Depends(handle_apikey)])
async def delete_skill(skill_id: int, db: Session = Depends(get_db)):
    item = db.get(SkillModel, skill_id)
    if not item:
        raise HTTPException(status_code=404, detail="Skill not found")
    db.delete(item)
    db.commit()
    return None


# ---------- Social ---------- #

# Get all Socials
@app.get("/api/socials", response_model=list[SocialRead], tags=["Socials"])
async def all_socials(db: Session = Depends(get_db)):
    return db.query(SocialModel).all()


# Create one Social
@app.post("/api/socials", response_model=SocialRead, status_code=status.HTTP_201_CREATED, tags=["Socials"],
          dependencies=[Depends(handle_apikey)])
async def create_social(social: Social, db: Session = Depends(get_db)):
    db_item = SocialModel(**social.model_dump())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item


# Get one Social
@app.get("/api/socials/{social_id}", response_model=SocialRead, tags=["Socials"])
async def get_social(social_id: int, db: Session = Depends(get_db)):
    item = db.get(SocialModel, social_id)
    if not item:
        raise HTTPException(status_code=404, detail="Social not found")
    return item


# Update one Social
@app.put("/api/socials/{social_id}", response_model=SocialRead, tags=["Socials"],
         dependencies=[Depends(handle_apikey)])
async def update_social(social_id: int, social: Social, db: Session = Depends(get_db)):
    item = db.get(SocialModel, social_id)
    if not item:
        raise HTTPException(status_code=404, detail="Social not found")

    for key, value in social.model_dump().items():
        setattr(item, key, value)

    db.commit()
    db.refresh(item)
    return item


# Delete one Social
@app.delete("/api/socials/{social_id}", status_code=status.HTTP_204_NO_CONTENT, tags=["Socials"],
            dependencies=[Depends(handle_apikey)])
async def delete_social(social_id: int, db: Session = Depends(get_db)):
    item = db.get(SocialModel, social_id)
    if not item:
        raise HTTPException(status_code=404, detail="Social not found")
    db.delete(item)
    db.commit()
    return None


# ---------- Resume ---------- #

# Get all Resumes
@app.get("/api/resumes", response_model=list[ResumeRead], tags=["Resumes"])
async def all_resumes(db: Session = Depends(get_db)):
    return db.query(ResumeModel).all()


# Create one Resume
@app.post("/api/resumes", response_model=ResumeRead, status_code=status.HTTP_201_CREATED, tags=["Resumes"],
          dependencies=[Depends(handle_apikey)])
async def create_resume(resume: Resume, db: Session = Depends(get_db)):
    db_item = ResumeModel(**resume.model_dump())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item


# Get one Resume
@app.get("/api/resumes/{resume_id}", response_model=ResumeRead, tags=["Resumes"])
async def get_resume(resume_id: int, db: Session = Depends(get_db)):
    item = db.get(ResumeModel, resume_id)
    if not item:
        raise HTTPException(status_code=404, detail="Resume not found")
    return item


# Update one Resume
@app.put("/api/resumes/{resume_id}", response_model=ResumeRead, tags=["Resumes"],
         dependencies=[Depends(handle_apikey)])
async def update_resume(resume_id: int, resume: Resume, db: Session = Depends(get_db)):
    item = db.get(ResumeModel, resume_id)
    if not item:
        raise HTTPException(status_code=404, detail="Resume not found")

    for key, value in resume.model_dump().items():
        setattr(item, key, value)

    db.commit()
    db.refresh(item)
    return item


# Delete one Resume
@app.delete("/api/resumes/{resume_id}", status_code=status.HTTP_204_NO_CONTENT, tags=["Resumes"],
            dependencies=[Depends(handle_apikey)])
async def delete_resume(resume_id: int, db: Session = Depends(get_db)):
    item = db.get(ResumeModel, resume_id)
    if not item:
        raise HTTPException(status_code=404, detail="Resume not found")
    db.delete(item)
    db.commit()
    return None


# ---------- Message ---------- #

# Get all Messages
@app.get("/api/messages", response_model=list[MessageRead], tags=["Message"])
async def all_messages(db: Session = Depends(get_db)):
    return db.query(MessageModel).all()


# Create one Message
@app.post("/api/messages", response_model=MessageRead, status_code=status.HTTP_201_CREATED, tags=["Message"],
          dependencies=[Depends(handle_apikey)])
async def create_message(message: Message, db: Session = Depends(get_db)):
    db_item = MessageModel(**message.model_dump())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item


# Get one Message
@app.get("/api/messages/{message_id}", response_model=MessageRead, tags=["Message"])
async def get_message(message_id: int, db: Session = Depends(get_db)):
    item = db.get(MessageModel, message_id)
    if not item:
        raise HTTPException(status_code=404, detail="Message not found")
    return item


# Update one Message
@app.put("/api/messages/{message_id}", response_model=MessageRead, tags=["Message"],
         dependencies=[Depends(handle_apikey)])
async def update_message(message_id: int, message: Message, db: Session = Depends(get_db)):
    item = db.get(MessageModel, message_id)
    if not item:
        raise HTTPException(status_code=404, detail="Message not found")

    for key, value in message.model_dump().items():
        setattr(item, key, value)

    db.commit()
    db.refresh(item)
    return item


# Delete one Message
@app.delete("/api/messages/{message_id}", status_code=status.HTTP_204_NO_CONTENT, tags=["Message"],
            dependencies=[Depends(handle_apikey)])
async def delete_message(message_id: int, db: Session = Depends(get_db)):
    item = db.get(MessageModel, message_id)
    if not item:
        raise HTTPException(status_code=404, detail="Message not found")
    db.delete(item)
    db.commit()
    return None


# ---------- Note ---------- #

# Get all Notes
@app.get("/api/notes", response_model=list[NoteRead], tags=["Note"])
async def all_notes(db: Session = Depends(get_db)):
    return db.query(NoteModel).all()


# Create one Note
@app.post("/api/notes", response_model=NoteRead, status_code=status.HTTP_201_CREATED, tags=["Note"],
          dependencies=[Depends(handle_apikey)])
async def create_note(note: Note, db: Session = Depends(get_db)):
    db_item = NoteModel(**note.model_dump())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item


# Get one Note
@app.get("/api/notes/{note_id}", response_model=NoteRead, tags=["Note"])
async def get_note(note_id: int, db: Session = Depends(get_db)):
    item = db.get(NoteModel, note_id)
    if not item:
        raise HTTPException(status_code=404, detail="Note not found")
    return item


# Update one Note
@app.put("/api/notes/{note_id}", response_model=NoteRead, tags=["Note"],
         dependencies=[Depends(handle_apikey)])
async def update_note(note_id: int, note: Note, db: Session = Depends(get_db)):
    item = db.get(NoteModel, note_id)
    if not item:
        raise HTTPException(status_code=404, detail="Note not found")

    for key, value in note.model_dump().items():
        setattr(item, key, value)

    db.commit()
    db.refresh(item)
    return item


# Delete one Note
@app.delete("/api/notes/{note_id}", status_code=status.HTTP_204_NO_CONTENT, tags=["Note"],
            dependencies=[Depends(handle_apikey)])
async def delete_note(note_id: int, db: Session = Depends(get_db)):
    item = db.get(NoteModel, note_id)
    if not item:
        raise HTTPException(status_code=404, detail="Note not found")
    db.delete(item)
    db.commit()
    return None
