# Application
from base import BaseSchema


# Create Social
class SocialCreate(BaseSchema):
    priority: int
    show: bool
    label: str
    value: str
    url: str


# Read Social
class SocialRead(SocialCreate):
    id: int
