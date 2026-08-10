# SQLAlchemy
from sqlalchemy import Uuid
from sqlalchemy.orm import Mapped, mapped_column

# UUID
import uuid

# Application
from base import BaseModel  # Base Model


# User Model
class User(BaseModel):
    __tablename__ = "users"

    # Columns
    id: Mapped[uuid.UUID] = mapped_column(
        Uuid,
        primary_key=True,
        index=True,
        default=uuid.uuid4,
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
