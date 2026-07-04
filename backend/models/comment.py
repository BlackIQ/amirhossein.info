# SQLAlchemy types
from sqlalchemy import Column, Integer, String, ForeignKey
# SQLAlchemy ORM
from sqlalchemy.orm import relationship

# SQLAlchemy DeclarativeBase
from db.base import Base


# Comment Model
class CommentModel(Base):
    __tablename__ = "comments"  # Table name

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    message = Column(String, nullable=False)
    note_id = Column(Integer, ForeignKey("notes.id"), nullable=False)

    note = relationship("NoteModel", back_populates="comments")
