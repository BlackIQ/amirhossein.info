# SQLAlchemy types
from sqlalchemy import Boolean, Column, Integer, String

# SQLAlchemy DeclarativeBase
from db.base import Base


# Experience Model
class ExperienceModel(Base):
    __tablename__ = "experiences"  # Table name

    id = Column(Integer, primary_key=True, index=True)
    priority = Column(Integer, nullable=False)
    show = Column(Boolean, nullable=False)
    position = Column(String, nullable=False)
    companyName = Column(String, nullable=False)
    location = Column(String, nullable=False)
    startDate = Column(String, nullable=False)
    endDate = Column(String, nullable=False)
    duties = Column(String, nullable=False)
    skills = Column(String, nullable=False)
    url = Column(String, nullable=False)
