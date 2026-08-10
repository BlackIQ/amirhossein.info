# UUID
from uuid import UUID

# Application
from base import BaseSchema


# Create Experience
class ExperienceCreate(BaseSchema):
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


# Update Experience
class ExperienceUpdate(BaseSchema):
    priority: int | None = None
    show: bool | None = None
    position: str | None = None
    companyName: str | None = None
    location: str | None = None
    startDate: str | None = None
    endDate: str | None = None
    duties: str | None = None
    skills: str | None = None
    url: str | None = None


# Read Experience
class ExperienceRead(ExperienceCreate):
    id: UUID
