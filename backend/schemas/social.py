# Pydantic
from pydantic import BaseModel, ConfigDict


# Schema of a social
class Social(BaseModel):
    priority: int
    show: bool
    label: str
    value: str
    url: str


# Schema for id of social
class SocialRead(Social):
    id: int

    model_config = ConfigDict(from_attributes=True)
