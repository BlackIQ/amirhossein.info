# Loading Session
from database.database import SessionLocal


# Get DB Dependency
def get_db():
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()
