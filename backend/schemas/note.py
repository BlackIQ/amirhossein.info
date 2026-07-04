# Pydantic
from pydantic import BaseModel


# Schema of a note
class Note(BaseModel):
    title: str
    details: str
    content: str
    thumbnail: str


# Schema for id of note
class NoteRead(Note):
    id: int
