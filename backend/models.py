# SQLAlchemy
from sqlalchemy import Boolean, Column, Integer, String
from sqlalchemy.orm import declarative_base

# Database
from database import engine

# Base Model
Base = declarative_base()


# Experience Model
class ExperienceModel(Base):
    __tablename__ = "experiences"  # Table name

    id = Column(Integer, primary_key=True, index=True)
    priority = Column(Integer, nullable=False)
    show = Column(Boolean, nullable=False)
    position = Column(String, nullable=False)
    companyName = Column(String, nullable=False)
    location = Column(String, nullable=False)
    startDate = Column(String, nullable=False)
    endDate = Column(String, nullable=False)
    duties = Column(String, nullable=False)
    skills = Column(String, nullable=False)
    url = Column(String, nullable=False)


# Skill Model
class SkillModel(Base):
    __tablename__ = "skills"  # Table name

    id = Column(Integer, primary_key=True, index=True)
    priority = Column(Integer, nullable=False)
    show = Column(Boolean, nullable=False)
    label = Column(String, nullable=False)
    value = Column(String, nullable=False)
    category = Column(String, nullable=False)


# Social Model
class SocialModel(Base):
    __tablename__ = "socials"  # Table name

    id = Column(Integer, primary_key=True, index=True)
    priority = Column(Integer, nullable=False)
    show = Column(Boolean, nullable=False)
    label = Column(String, nullable=False)
    value = Column(String, nullable=False)
    url = Column(String, nullable=False)


# Resume Model
class ResumeModel(Base):
    __tablename__ = "resumes"  # Table name

    id = Column(Integer, primary_key=True, index=True)
    priority = Column(Integer, nullable=False)
    show = Column(Boolean, nullable=False)
    label = Column(String, nullable=False)
    value = Column(String, nullable=False)
    url = Column(String, nullable=False)


# Message Mode
class MessageModel(Base):
    __tablename__ = "messages"  # Table name

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    message = Column(String, nullable=False)


# Note Model
class NoteModel(Base):
    __tablename__ = "notes"  # Table name

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    details = Column(String, nullable=False)
    content = Column(String, nullable=False)
    thumbnail = Column(String, nullable=False)


# Create tables
Base.metadata.create_all(bind=engine)
