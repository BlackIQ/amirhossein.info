# Pydantic
from pydantic import BaseModel, ConfigDict


# Schema of a resume
class Resume(BaseModel):
    priority: int
    show: bool
    label: str
    value: str
    url: str


# Schema for id of resume
class ResumeRead(Resume):
    id: int

    model_config = ConfigDict(from_attributes=True)
