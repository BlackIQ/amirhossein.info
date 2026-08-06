# SQLAlchemy
from sqlalchemy.orm import Mapped, mapped_column, relationship

# Application
from base import BaseModel  # Base Model


# User Model
class User(BaseModel):
    __tablename__ = "users"

    # Columns
    id: Mapped[int] = mapped_column(
        primary_key=True,
        index=True,
    )
    name: Mapped[str] = mapped_column(
        nullable=False,
    )
    username: Mapped[str] = mapped_column(
        unique=True,
        nullable=False,
    )
    email: Mapped[str] = mapped_column(
        unique=True,
        nullable=False,
    )

    # Relations
    notes = relationship(
        "Note",
        back_populates="user",
    )
