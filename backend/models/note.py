# SQLAlchemy
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

    # Relations
    comments = relationship(
        "Comment",
        back_populates="note",
    )
