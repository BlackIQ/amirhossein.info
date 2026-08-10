# SQLAlchemy
from sqlalchemy import Uuid
from sqlalchemy.orm import Mapped, mapped_column

# UUID
from uuid import UUID

# Application
from base import BaseModel  # Base Model


# User Model
class User(BaseModel):
    __tablename__ = "users"

    # Columns
    id: Mapped[UUID] = mapped_column(
        Uuid,
        primary_key=True,
        index=True,
    )
    name: Mapped[str] = mapped_column(
        nullable=False,
    )
    email: Mapped[str] = mapped_column(
        unique=True,
        nullable=False,
    )
    password: Mapped[str] = mapped_column(
        nullable=False,
    )
