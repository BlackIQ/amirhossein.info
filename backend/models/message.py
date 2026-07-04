# SQLAlchemy types
from sqlalchemy import Column, Integer, String

# SQLAlchemy DeclarativeBase
from db.base import Base


# Message Model
class MessageModel(Base):
    __tablename__ = "messages"  # Table name

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    message = Column(String, nullable=False)
