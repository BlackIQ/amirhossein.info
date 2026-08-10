# SQLAlchemy
from sqlalchemy import Uuid
from sqlalchemy.orm import Mapped, mapped_column

# UUID
from uuid import UUID

# Application
from base import BaseModel  # Base Model


# Social Model
class Social(BaseModel):
    __tablename__ = "socials"

    # Columns
    id: Mapped[UUID] = mapped_column(
        Uuid,
        primary_key=True,
        index=True,
    )
    priority: Mapped[int] = mapped_column(
        nullable=False,
    )
    show: Mapped[bool] = mapped_column(
        nullable=False,
    )
    label: Mapped[str] = mapped_column(
        nullable=False,
    )
    value: Mapped[str] = mapped_column(
        nullable=False,
    )
    url: Mapped[str] = mapped_column(
        nullable=False,
    )
