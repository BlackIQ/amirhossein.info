# SQLAlchemy DeclarativeBase
from sqlalchemy.orm import DeclarativeBase

# Application
from base.mixins import TimestampMixin, SoftDeleteMixin  # Mixins


# Base: ModelSchem
class BaseModel(TimestampMixin, SoftDeleteMixin, DeclarativeBase):
    pass
