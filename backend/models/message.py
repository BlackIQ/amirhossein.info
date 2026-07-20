# SQLAlchemy
from sqlalchemy.orm import Mapped, mapped_column

# Application
from base import BaseModel  # Base Model


# Message Model
class Message(BaseModel):
    __tablename__ = "messages"

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
