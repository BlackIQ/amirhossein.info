# Application
from base import BaseSchema


# Create Message
class MessageCreate(BaseSchema):
    name: str
    email: str
    message: str


# Update Message
class MessageUpdate(BaseSchema):
    name: str | None = None
    email: str | None = None
    message: str | None = None


# Read Message
class MessageRead(MessageCreate):
    id: int
