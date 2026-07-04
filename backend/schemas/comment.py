# Pydantic
from pydantic import BaseModel, ConfigDict


# Schema of a comment
class Comment(BaseModel):
    name: str
    email: str
    message: str
    note_id: int


# Schema for id of comment
class CommentRead(Comment):
    id: int

    model_config = ConfigDict(from_attributes=True)
