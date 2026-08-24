# FastAPI
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Sentry
import sentry_sdk

# Application
from core.settings import settings  # Settings
from routers import (
    authentication,
    experience,
    skill,
    message,
    resume,
    social,
)  # Routers

sentry_sdk.init(
    dsn=settings.SENTRY_DSN,
    send_default_pii=True,
)

# FastAPI app
app = FastAPI(
    title="Amirhossein Mohammadi Resume API",
    version="2.0.0",
    summary="FastAPI backend for the personal portfolio site",
    description="Using FastAPI, Pydantic, Pydantic Settings, SQLAlchemy, SQLAlchemy ORM, Alembic and PostgreSQL",
    contact={
        "name": "Amirhossein Mohammadi",
        "url": "https://amirhossein.info",
        "email": "hi@amirhossein.info",
    },
    openapi_tags=[
        {"name": "Application", "description": "Application thingss"},
        {"name": "Authentication", "description": "Authentication"},
        {"name": "Experiences", "description": "Manage portfolio experiences"},
        {"name": "Skills", "description": "Manage displayed skills"},
        {"name": "Socials", "description": "Manage social links"},
        {"name": "Resumes", "description": "Manage downloadable resumes"},
        {"name": "Message", "description": "Handle contact messages"},
    ],
)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=[
        "https://amirhossein.info",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_methods=["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allow_headers=["Authorization", "Content-Type", "X-API-KEY"],
)


# Health check route
@app.get("/", tags=["Application"])
async def ping():
    return {"message": "pong"}


# Routes
app.include_router(authentication.router, prefix="/api")
app.include_router(experience.router, prefix="/api")
app.include_router(skill.router, prefix="/api")
app.include_router(message.router, prefix="/api")
app.include_router(resume.router, prefix="/api")
app.include_router(social.router, prefix="/api")
