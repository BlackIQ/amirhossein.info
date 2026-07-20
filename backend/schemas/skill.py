# Application
from base import BaseSchema


# Create Skill
class SkillCreate(BaseSchema):
    priority: int
    show: bool
    label: str
    value: str
    category: str


# Update Skill
class SkillUpdate(BaseSchema):
    priority: int | None = None
    show: bool | None = None
    label: str | None = None
    value: str | None = None
    category: str | None = None


# Read Skill
class SkillRead(SkillCreate):
    id: int
