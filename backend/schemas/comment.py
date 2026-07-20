# Application
from base import BaseSchema


# Create Comment
class CommentCreate(BaseSchema):
    name: str
    email: str
    message: str
    note_id: int


# Read Comment
class CommentRead(CommentCreate):
    id: int
