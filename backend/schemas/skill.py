# Application
from base import BaseSchema


# Create Skill
class SkillCreate(BaseSchema):
    priority: int
    show: bool
    label: str
    value: str
    category: str


# Read Skill
class SkillRead(SkillCreate):
    id: int
