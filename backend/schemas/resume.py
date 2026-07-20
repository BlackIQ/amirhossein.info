# Application
from base import BaseSchema


# Create Resume
class ResumeCreate(BaseSchema):
    priority: int
    show: bool
    label: str
    value: str
    url: str


# Read Resume
class ResumeRead(ResumeCreate):
    id: int
