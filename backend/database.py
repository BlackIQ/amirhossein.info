# PathLib
# from pathlib import Path

# SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# Settings
from settings import settings

# Path to .db file
# DB_PATH = Path(__file__).resolve().parent / "app.db"
# DATABASE_URL = f"sqlite:///{DB_PATH}"

DATABASE_URL = f"postgresql+psycopg2://{settings.POSTGRES_USER}:{settings.POSTGRES_PASSWORD}@{settings.POSTGRES_HOST}/{settings.POSTGRES_DATABASE}"

# DB Engine
engine = create_engine(
    DATABASE_URL,
    # connect_args={"check_same_thread": False}  # Fucking SQLite
)

# Session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
