# SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# Settings
from settings import settings

# Separate Production and Development databases
# if settings.APP_MODE == 'production':
#     DATABASE_URL = settings.POSTGRES_URL_NON_POOLING.replace("postgres://", "postgres+psycopg2://")
# else:
#     DATABASE_URL = settings.POSTGRES_DEV_URL

DATABASE_URL = settings.POSTGRES_URL_NON_POOLING.replace("postgres://", "postgres+psycopg2://")

# DB Engine
engine = create_engine(DATABASE_URL)

# Session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
