# FastAPI
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer

# SQLAlchemy
from sqlalchemy.orm import Session

# JWT
import jwt
from jwt.exceptions import PyJWTError

# UUID
import uuid

# Application
from core.settings import settings  # Settings
from dependencies.database import get_db  # Depenencies
from models import User  # Models

# Secret and Algorithm
SECRET = settings.SECRET
ALGORITHM = settings.ALGORITHM

# OAuth Schema
oauth2_schema = OAuth2PasswordBearer(tokenUrl="/api/auth/signin")

# 401 Execption
credentials_exception = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Invalid or expired token",
    headers={"WWW-Authenticate": "Bearer"},
)


# Get Current User
def get_current_user(
    token: str = Depends(oauth2_schema), db: Session = Depends(get_db)
):
    try:
        payload = jwt.decode(
            jwt=token,
            key=SECRET,
            algorithms=[ALGORITHM],
            options={"require": ["exp", "sub"]},
        )
    except PyJWTError:
        raise credentials_exception

    user_id = payload.get("sub")
    if not user_id:
        raise credentials_exception

    try:
        parsed_user_id = uuid.UUID(str(user_id))
    except ValueError:
        raise credentials_exception

    user = db.query(User).filter(User.id == parsed_user_id).one_or_none()

    if user is None:
        raise credentials_exception

    return user
