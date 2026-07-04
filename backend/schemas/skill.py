# Pydantic
from pydantic import BaseModel, ConfigDict


# Schema of a skill
class Skill(BaseModel):
    priority: int
    show: bool
    label: str
    value: str
    category: str


# Schema for id of skill
class SkillRead(Skill):
    id: int

    model_config = ConfigDict(from_attributes=True)
