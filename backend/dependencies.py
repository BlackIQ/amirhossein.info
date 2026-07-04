# Loading Session
from database import SessionLocal


# Get DB
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
