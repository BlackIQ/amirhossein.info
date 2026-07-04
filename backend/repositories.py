# Pydantic
from pydantic import BaseModel


# Pydantic validation model for Experience
class Experience(BaseModel):
    priority: int
    show: bool
    position: str
    companyName: str
    location: str
    startDate: str
    endDate: str
    duties: str
    skills: str
    url: str


class ExperienceRead(Experience):
    id: int


# Pydantic validation model for Skill
class Skill(BaseModel):
    priority: int
    show: bool
    label: str
    value: str
    category: str


class SkillRead(Skill):
    id: int


# Pydantic validation model for Social
class Social(BaseModel):
    priority: int
    show: bool
    label: str
    value: str
    url: str


class SocialRead(Social):
    id: int


# Pydantic validation model for Resume
class Resume(BaseModel):
    priority: int
    show: bool
    label: str
    value: str
    url: str


class ResumeRead(Resume):
    id: int


# Pydantic validation model for Message
class Message(BaseModel):
    name: str
    email: str
    message: str


class MessageRead(Message):
    id: int


# Pydantic validation model for Note
class Note(BaseModel):
    title: str
    details: str
    content: str
    thumbnail: str


class NoteRead(Note):
    id: int
