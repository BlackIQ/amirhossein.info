# Application
from base import BaseSchema

# Schemas
from schemas.comment import CommentRead


# Create Note
class NoteCreate(BaseSchema):
    title: str
    details: str
    content: str
    thumbnail: str


# Update Note
class NoteUpdate(BaseSchema):
    title: str | None = None
    details: str | None = None
    content: str | None = None
    thumbnail: str | None = None


# Read Note
class NoteRead(NoteCreate):
    id: int

    comments: list[CommentRead] = []
