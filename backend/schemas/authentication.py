# Application
from base import BaseSchema


# Signin Authentication
class Signin(BaseSchema):
    email: str
    password: str
