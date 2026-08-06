# SQLAlchemy
from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

# Application
from base import BaseModel  # Base Model


# Note Model
class Note(BaseModel):
    __tablename__ = "notes"

    # Columns
    id: Mapped[int] = mapped_column(
        primary_key=True,
        index=True,
    )
    title: Mapped[str] = mapped_column(
        nullable=False,
    )
    details: Mapped[str] = mapped_column(
        nullable=False,
    )
    content: Mapped[str] = mapped_column(
        nullable=False,
    )
    thumbnail: Mapped[str] = mapped_column(
        nullable=False,
    )

    # Foreign Keys
    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id"),
        nullable=False,
    )

    # Relations
    user = relationship(
        "User",
        back_populates="notes",
    )
    comments = relationship(
        "Comment",
        back_populates="note",
    )
