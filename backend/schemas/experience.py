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


# Read Experience
class ExperienceRead(ExperienceCreate):
    id: int
