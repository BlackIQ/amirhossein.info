from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(
    title="Amirhossein Mohammadi Resume API",
    version="1.0.0",
    summary="This is a test for summary",
    description="This is also another test for the description",
    contact={
        "name": "Amirhossein Mohammadi",
        "url": "https://amirhossein.info",
        "email": "hi@amirhossein.info"
    },
    openapi_tags=[
        {
            "name": "Experiences",
            "description": "Where you handle Experiences and stuff"
        },
        {
            "name": "Skills",
            "description": "Where you handle Skill and stuff"
        },
        {
            "name": "Socials",
            "description": "Where you handle Socials and stuff"
        },
        {
            "name": "Resumes",
            "description": "Where you handle Resumes and stuff"
        },
        {
            "name": "Message",
            "description": "Where you handle Message and stuff"
        },
        {
            "name": "Note",
            "description": "Where you handle Note and stuff"
        },
    ]
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


class Skill(BaseModel):
    priority: int
    show: bool
    label: str
    value: str
    category: str


class Social(BaseModel):
    priority: int
    show: bool
    label: str
    value: str
    category: str


class Resume(BaseModel):
    priority: int
    show: bool
    label: str
    value: str
    url: str


class Message(BaseModel):
    name: str
    email: str
    message: str


class Note(BaseModel):
    title: str
    details: str
    content: str
    thumbnail: str


@app.get("/")
async def read_root():
    return {"Hello": "World"}


@app.get("/api/experiences", tags=["Experiences"])
async def all_experiences():
    return {"message": "Retrieved all experiences", "experiences": []}


@app.post("/api/experiences", tags=["Experiences"])
async def create_experience(experience: Experience):
    return {"message": "Experience created successfully", "experience": experience}


@app.get("/api/experiences/{experience_id}", tags=["Experiences"])
async def get_experience(experience_id: int):
    return {"message": f"Retrieved experience with ID {experience_id}", "experience": {"id": experience_id}}


@app.put("/api/experiences/{experience_id}", tags=["Experiences"])
async def update_experience(experience_id: int, experience: Experience):
    return {"message": f"Experience with ID {experience_id} updated successfully", "experience": experience}


@app.delete("/api/experiences/{experience_id}", tags=["Experiences"])
async def delete_experience(experience_id: int):
    return {"message": f"Experience with ID {experience_id} deleted successfully"}


@app.get("/api/skills", tags=["Skills"])
async def all_skills():
    return {"message": "Retrieved all skills", "skills": []}


@app.post("/api/skills", tags=["Skills"])
async def create_skill(skill: Skill):
    return {"message": "Skill created successfully", "skill": skill}


@app.get("/api/skills/{skill_id}", tags=["Skills"])
async def get_skill(skill_id: int):
    return {"message": f"Retrieved skill with ID {skill_id}", "skill": {"id": skill_id}}


@app.put("/api/skills/{skill_id}", tags=["Skills"])
async def update_skill(skill_id: int, skill: Skill):
    return {"message": f"Skill with ID {skill_id} updated successfully", "skill": skill}


@app.delete("/api/skills/{skill_id}", tags=["Skills"])
async def delete_skill(skill_id: int):
    return {"message": f"Skill with ID {skill_id} deleted successfully"}


@app.get("/api/socials", tags=["Socials"])
async def all_socials():
    return {"message": "Retrieved all socials", "socials": []}


@app.post("/api/socials", tags=["Socials"])
async def create_social(social: Social):
    return {"message": "Social created successfully", "social": social}


@app.get("/api/socials/{social_id}", tags=["Socials"])
async def get_social(social_id: int):
    return {"message": f"Retrieved social with ID {social_id}", "social": {"id": social_id}}


@app.put("/api/socials/{social_id}", tags=["Socials"])
async def update_social(social_id: int, social: Social):
    return {"message": f"Social with ID {social_id} updated successfully", "social": social}


@app.delete("/api/socials/{social_id}", tags=["Socials"])
async def delete_social(social_id: int):
    return {"message": f"Social with ID {social_id} deleted successfully"}


@app.get("/api/resumes", tags=["Resumes"])
async def all_resumes():
    return {"message": "Retrieved all resumes", "resumes": []}


@app.post("/api/resumes", tags=["Resumes"])
async def create_resume(resume: Resume):
    return {"message": "Resume created successfully", "resume": resume}


@app.get("/api/resumes/{resume_id}", tags=["Resumes"])
async def get_resume(resume_id: int):
    return {"message": f"Retrieved resume with ID {resume_id}", "resume": {"id": resume_id}}


@app.put("/api/resumes/{resume_id}", tags=["Resumes"])
async def update_resume(resume_id: int, resume: Resume):
    return {"message": f"Resume with ID {resume_id} updated successfully", "resume": resume}


@app.delete("/api/resumes/{resume_id}", tags=["Resumes"])
async def delete_resume(resume_id: int):
    return {"message": f"Resume with ID {resume_id} deleted successfully"}


@app.get("/api/messages", tags=["Message"])
async def all_messages():
    return {"message": "Retrieved all messages", "messages": []}


@app.post("/api/messages", tags=["Message"])
async def create_message(message: Message):
    return {"message": "Message created successfully", "message": message}


@app.get("/api/messages/{message_id}", tags=["Message"])
async def get_message(message_id: int):
    return {"message": f"Retrieved message with ID {message_id}", "message": {"id": message_id}}


@app.put("/api/messages/{message_id}", tags=["Message"])
async def update_message(message_id: int, message: Message):
    return {"message": f"Message with ID {message_id} updated successfully", "message": message}


@app.delete("/api/messages/{message_id}", tags=["Message"])
async def delete_message(message_id: int):
    return {"message": f"Message with ID {message_id} deleted successfully"}


@app.get("/api/notes", tags=["Note"])
async def all_notes():
    return {"message": "Retrieved all notes", "notes": []}


@app.post("/api/notes", tags=["Note"])
async def create_note(note: Note):
    return {"message": "Note created successfully", "note": note}


@app.get("/api/notes/{note_id}", tags=["Note"])
async def get_note(note_id: int):
    return {"message": f"Retrieved note with ID {note_id}", "note": {"id": note_id}}


@app.put("/api/notes/{note_id}", tags=["Note"])
async def update_note(note_id: int, note: Note):
    return {"message": f"Note with ID {note_id} updated successfully", "note": note}


@app.delete("/api/notes/{note_id}", tags=["Note"])
async def delete_note(note_id: int):
    return {"message": f"Note with ID {note_id} deleted successfully"}
