# Pydantic
from pydantic import BaseModel, ConfigDict


# Schema of an experience
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


# Schema for id of experience
class ExperienceRead(Experience):
    id: int

    model_config = ConfigDict(from_attributes=True)
