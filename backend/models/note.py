# SQLAlchemy types
from sqlalchemy import Column, Integer, String

# SQLAlchemy DeclarativeBase
from db.base import Base


# Note Model
class NoteModel(Base):
    __tablename__ = "notes"  # Table name

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    details = Column(String, nullable=False)
    content = Column(String, nullable=False)
    thumbnail = Column(String, nullable=False)
