# Pydantic
from pydantic import BaseModel


# Schema of a message
class Message(BaseModel):
    name: str
    email: str
    message: str


# Schema for id of message
class MessageRead(Message):
    id: int
