# Pydantic
from pydantic import BaseModel, ConfigDict


# Base: BaseSchema
class BaseSchema(BaseModel):

    model_config = ConfigDict(from_attributes=True)
