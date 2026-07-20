# SQLAlchemy
from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

# Application
from base import BaseModel  # Base Model


# Comment Model
class Comment(BaseModel):
    __tablename__ = "comments"

    # Columns
    id: Mapped[int] = mapped_column(
        primary_key=True,
        index=True,
    )
    name: Mapped[str] = mapped_column(
        nullable=False,
    )
    email: Mapped[str] = mapped_column(
        nullable=False,
    )
    message: Mapped[str] = mapped_column(
        nullable=False,
    )

    # Foreign Keys
    note_id: Mapped[int] = mapped_column(
        ForeignKey("notes.id"),
        nullable=False,
    )

    # Relations
    note = relationship(
        "Note",
        back_populates="comments",
    )
