# SQLAlchemy types
from sqlalchemy import Boolean, Column, Integer, String

# SQLAlchemy DeclarativeBase
from db.base import Base


# Resume Model
class ResumeModel(Base):
    __tablename__ = "resumes"  # Table name

    id = Column(Integer, primary_key=True, index=True)
    priority = Column(Integer, nullable=False)
    show = Column(Boolean, nullable=False)
    label = Column(String, nullable=False)
    value = Column(String, nullable=False)
    url = Column(String, nullable=False)
