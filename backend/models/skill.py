# SQLAlchemy types
from sqlalchemy import Boolean, Column, Integer, String

# SQLAlchemy DeclarativeBase
from db.base import Base


# Skill Model
class SkillModel(Base):
    __tablename__ = "skills"  # Table name

    id = Column(Integer, primary_key=True, index=True)
    priority = Column(Integer, nullable=False)
    show = Column(Boolean, nullable=False)
    label = Column(String, nullable=False)
    value = Column(String, nullable=False)
    category = Column(String, nullable=False)
