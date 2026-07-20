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


# Read Note
class NoteRead(NoteCreate):
    id: int

    comments: list[CommentRead] = []
