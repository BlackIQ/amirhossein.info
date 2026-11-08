# FastAPI
from fastapi import APIRouter, Depends, HTTPException, status

# SQLAlchemy
from sqlalchemy.orm import Session

# Application
from dependencies.database import get_db  # Get DB
from security.password import verify_password  # Password
from security.token import create_token  # Token
from schemas.authentication import Signin  # Schemas
from schemas.common import TokenSchema  # Schema
from models import User  # Models

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.post("/signin", response_model=TokenSchema)
async def signin(
    data: Signin,
    db: Session = Depends(get_db),
):

    user = db.query(User).where(User.email == data.email).first()

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password",
        )

    if not verify_password(data.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password",
        )

    access_token = create_token(user.id)

    return TokenSchema(
        access_token=access_token,
        token_type="bearer",
    )
