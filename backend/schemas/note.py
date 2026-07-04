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
    comments: list[CommentRead] = []


# Schema for id of note
class NoteRead(Note):
    id: int

    model_config = ConfigDict(from_attributes=True)
