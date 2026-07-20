# FastAPI, SQLAlchemy ORM
from fastapi import FastAPI

# Routes
from routes import (
    experience,
    skill,
    note,
    message,
    resume,
    social,
    comment,
)

# FastAPI app
app = FastAPI(
    title="Amirhossein Mohammadi Resume API",
    version="1.0.0",
    summary="FastAPI backend for the personal portfolio site",
    description="Using FastAPI, Pydantic, Pydantic Settings, SQLAlchemy, SQLAlchemy ORM, Alembic and PostgreSQL",
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
        {"name": "Comment", "description": "Manage comments"},
    ],
)

# ---------- Routes ---------- #


# Health check route
@app.get("/")
async def ping():
    return {"message": "pong"}


# Routes
app.include_router(experience.router, prefix="/api")
app.include_router(skill.router, prefix="/api")
app.include_router(message.router, prefix="/api")
app.include_router(note.router, prefix="/api")
app.include_router(resume.router, prefix="/api")
app.include_router(social.router, prefix="/api")
app.include_router(comment.router, prefix="/api")
