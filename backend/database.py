# SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# Settings
from settings import settings

# Separate Production and Development databases
if settings.APP_MODE == 'production':
    DATABASE_URL = settings.POSTGRES_PROD_URL
else:
    DATABASE_URL = settings.POSTGRES_DEV_URL

# DB Engine
engine = create_engine(DATABASE_URL)

# Session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
