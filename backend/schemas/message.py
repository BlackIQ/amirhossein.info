# Application
from base import BaseSchema


# Create Message
class MessageCreate(BaseSchema):
    name: str
    email: str
    message: str


# Read Message
class MessageRead(MessageCreate):
    id: int
