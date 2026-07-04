# Pydantic
from pydantic import BaseModel, ConfigDict

# Comment
from schemas.comment import CommentRead


# Schema of a note
class Note(BaseModel):
    title: str
    details: str
    content: str
    thumbnail: str


# Schema for id of note
class NoteRead(Note):
    id: int
    comments: list[CommentRead] = []

    model_config = ConfigDict(from_attributes=True)
