# SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# Application
from core.settings import settings  # Settings

# DB Engine
engine = create_engine(settings.POSTGRES_URL)

# Session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
