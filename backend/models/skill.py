# SQLAlchemy
from sqlalchemy.orm import Mapped, mapped_column

# Application
from base import BaseModel  # Base Model


# Skill Model
class Skill(BaseModel):
    __tablename__ = "skills"

    # Columns
    id: Mapped[int] = mapped_column(
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
    category: Mapped[str] = mapped_column(
        nullable=False,
    )
