# Application
from base import BaseSchema


# Create Comment
class CommentCreate(BaseSchema):
    name: str
    email: str
    message: str
    note_id: int


# Update Comment
class CommentUpdate(BaseSchema):
    name: str | None = None
    email: str | None = None
    message: str | None = None
    note_id: int | None = None


# Read Comment
class CommentRead(CommentCreate):
    id: int
