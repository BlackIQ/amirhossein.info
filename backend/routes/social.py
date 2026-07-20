# FastAPI
from fastapi import APIRouter, Depends, HTTPException, status

# SQLAlchemy
from sqlalchemy.orm import Session

# Application
from dependencies import apikey, get_db  # Dependencies
from models import Social  # Models
from schemas.social import SocialCreate, SocialUpdate, SocialRead  # Schemas

# Router
router = APIRouter(
    prefix="/socials",
    tags=["Socials"],
)


@router.get("", response_model=list[SocialRead])
async def all_socials(
    db: Session = Depends(get_db),
):
    db_socials = (
        db.query(Social)
        .where(
            Social.show == True,
        )
        .order_by(Social.priority)
        .all()
    )

    return db_socials


@router.post("", response_model=SocialRead, status_code=status.HTTP_201_CREATED)
async def create_social(
    social_data: SocialCreate,
    apikey: str = Depends(apikey),
    db: Session = Depends(get_db),
):
    db_social = Social(**social_data.model_dump())

    db.add(db_social)
    db.commit()
    db.refresh(db_social)

    return db_social


@router.get("/{social_id}", response_model=SocialRead)
async def get_social(
    social_id: int,
    db: Session = Depends(get_db),
):
    db_social = db.get(Social, social_id)

    if not db_social:
        raise HTTPException(
            status_code=404,
            detail="Social not found",
        )

    return db_social


@router.put("/{social_id}", response_model=SocialRead)
async def update_social(
    social_id: int,
    social_data: SocialUpdate,
    apikey: str = Depends(apikey),
    db: Session = Depends(get_db),
):
    db_social = db.get(Social, social_id)

    if not db_social:
        raise HTTPException(
            status_code=404,
            detail="Social not found",
        )

    for key, value in social_data.model_dump(exclude_unset=True).items():
        setattr(db_social, key, value)

    db.commit()
    db.refresh(db_social)

    return db_social


@router.delete("/{social_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_social(
    social_id: int,
    apikey: str = Depends(apikey),
    db: Session = Depends(get_db),
):
    db_social = db.get(Social, social_id)

    if not db_social:
        raise HTTPException(
            status_code=404,
            detail="Social not found",
        )

    db.delete(db_social)
    db.commit()

    return None
