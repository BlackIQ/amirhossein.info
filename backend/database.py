# SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# Settings
from settings import settings

DATABASE_URL: str = settings.POSTGRES_URL.replace("postgres://", "postgres+psycopg2://")

# if settings.IS_PRODUCTION:
#     DATABASE_URL = settings.POSTGRES_URL_NON_POOLING.replace("postgres://", "postgres+psycopg2://")
# else:
#     DATABASE_URL = settings.

# DB Engine
engine = create_engine(DATABASE_URL)

# Session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
