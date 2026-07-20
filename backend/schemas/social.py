# Application
from base import BaseSchema


# Create Social
class SocialCreate(BaseSchema):
    priority: int
    show: bool
    label: str
    value: str
    url: str


# Update Social
class SocialUpdate(BaseSchema):
    priority: int | None = None
    show: bool | None = None
    label: str | None = None
    value: str | None = None
    url: str | None = None


# Read Social
class SocialRead(SocialCreate):
    id: int
