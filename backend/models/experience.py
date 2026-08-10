# SQLAlchemy
from sqlalchemy import Uuid
from sqlalchemy.orm import Mapped, mapped_column

# UUID
import uuid

# Application
from base import BaseModel  # Base Model


# Experience Model
class Experience(BaseModel):
    __tablename__ = "experiences"

    # Columns
    id: Mapped[uuid.UUID] = mapped_column(
        Uuid,
        primary_key=True,
        index=True,
        default=uuid.uuid4,
    )
    priority: Mapped[int] = mapped_column(
        nullable=False,
    )
    show: Mapped[bool] = mapped_column(
        nullable=False,
    )
    position: Mapped[str] = mapped_column(
        nullable=False,
    )
    companyName: Mapped[str] = mapped_column(
        nullable=False,
    )
    location: Mapped[str] = mapped_column(
        nullable=False,
    )
    startDate: Mapped[str] = mapped_column(
        nullable=False,
    )
    endDate: Mapped[str] = mapped_column(
        nullable=False,
    )
    duties: Mapped[str] = mapped_column(
        nullable=False,
    )
    skills: Mapped[str] = mapped_column(
        nullable=False,
    )
    url: Mapped[str] = mapped_column(
        nullable=False,
    )
