# FastAPI, SQLAlchemy
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

# Dependencies
from dependencies import get_db
# Middlewares
from middlewares.apikey import apikey_middleware
# Models
from models.social import SocialModel
# Schema
from schemas.social import Social, SocialRead

# Router
router = APIRouter(
    prefix="/socials",
    tags=["Socials"],
)


# Get all Socials
@router.get("", response_model=list[SocialRead])
async def all_socials(db: Session = Depends(get_db)):
    return db.query(SocialModel).where(SocialModel.show == True).order_by(SocialModel.priority).all()


# Create one Social
@router.post("", response_model=SocialRead, status_code=status.HTTP_201_CREATED,
             dependencies=[Depends(apikey_middleware)])
async def create_social(social: Social, db: Session = Depends(get_db)):
    db_item = SocialModel(**social.model_dump())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item


# Get one Social
@router.get("/{social_id}", response_model=SocialRead)
async def get_social(social_id: int, db: Session = Depends(get_db)):
    item = db.get(SocialModel, social_id)
    if not item:
        raise HTTPException(status_code=404, detail="Social not found")
    return item


# Update one Social
@router.put("/{social_id}", response_model=SocialRead, dependencies=[Depends(apikey_middleware)])
async def update_social(social_id: int, social: Social, db: Session = Depends(get_db)):
    item = db.get(SocialModel, social_id)
    if not item:
        raise HTTPException(status_code=404, detail="Social not found")

    for key, value in social.model_dump().items():
        setattr(item, key, value)

    db.commit()
    db.refresh(item)
    return item


# Delete one Social
@router.delete("/{social_id}", status_code=status.HTTP_204_NO_CONTENT,
               dependencies=[Depends(apikey_middleware)])
async def delete_social(social_id: int, db: Session = Depends(get_db)):
    item = db.get(SocialModel, social_id)
    if not item:
        raise HTTPException(status_code=404, detail="Social not found")
    db.delete(item)
    db.commit()
    return None
