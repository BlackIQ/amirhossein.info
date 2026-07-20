# Loading Session
from core.database import SessionLocal


# Get DB Dependency
def get_db():
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()
