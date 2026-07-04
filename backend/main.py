# FastAPI, SQLAlchemy ORM
from fastapi import Depends, FastAPI

# Database
from database import engine, SessionLocal
# SQLAlchemy Base
from db.base import Base
# Middlewares
from middlewares.apikey import apikey_middleware
# Routes
from routes import (
    experience, skill, note, message, resume, social, comment
)

# Models
# import models

# Create tables
Base.metadata.create_all(bind=engine)

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
        {"name": "Comment", "description": "Manage comments"},
    ],
)


# Function to get database
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# ---------- Routes ---------- #


# Root
@app.get("/")
async def read_root():
    return {"message": "Amirhossein FastAPI backend is running"}


# Welcome
@app.get("/api", dependencies=[Depends(apikey_middleware)])
async def api():
    return {"message": "Welcome to Amirhossein FastAPI backend"}


# Health check route
@app.get("/api/ping")
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
