# SQLAlchemy
from sqlalchemy import Uuid
from sqlalchemy.orm import Mapped, mapped_column

# UUID
import uuid

# Application
from base import BaseModel  # Base Model


# Resume Model
class Resume(BaseModel):
    __tablename__ = "resumes"

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
    label: Mapped[str] = mapped_column(
        nullable=False,
    )
    value: Mapped[str] = mapped_column(
        nullable=False,
    )
    url: Mapped[str] = mapped_column(
        nullable=False,
    )
