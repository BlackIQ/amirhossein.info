# Application
from base import BaseSchema


# Create Resume
class ResumeCreate(BaseSchema):
    priority: int
    show: bool
    label: str
    value: str
    url: str


# Update Resume
class ResumeUpdate(BaseSchema):
    priority: int | None = None
    show: bool | None = None
    label: str | None = None
    value: str | None = None
    url: str | None = None


# Read Resume
class ResumeRead(ResumeCreate):
    id: int
