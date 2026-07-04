# FastAPI, SQLAlchemy
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

# Dependencies
from dependencies import get_db
# Middlewares
from middlewares.apikey import apikey_middleware
# Models
from models.experience import ExperienceModel
# Schema
from schemas.experience import Experience, ExperienceRead

# Router
router = APIRouter(
    prefix="/experiences",
    tags=["Experiences"],
)


# Get all Experiences
@router.get("", response_model=list[ExperienceRead])
async def all_experiences(db: Session = Depends(get_db)):
    return db.query(ExperienceModel).where(ExperienceModel.show == True).order_by(ExperienceModel.priority).all()


# Create one Experience
@router.post("", response_model=ExperienceRead, status_code=status.HTTP_201_CREATED,
             dependencies=[Depends(apikey_middleware)])
async def create_experience(experience: Experience, db: Session = Depends(get_db)):
    db_item = ExperienceModel(**experience.model_dump())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item


# Get one Experience
@router.get("/{experience_id}", response_model=ExperienceRead)
async def get_experience(experience_id: int, db: Session = Depends(get_db)):
    item = db.get(ExperienceModel, experience_id)
    if not item:
        raise HTTPException(status_code=404, detail="Experience not found")
    return item


# Update one Experience
@router.put("/{experience_id}", response_model=ExperienceRead, dependencies=[Depends(apikey_middleware)])
async def update_experience(experience_id: int, experience: Experience, db: Session = Depends(get_db)):
    item = db.get(ExperienceModel, experience_id)
    if not item:
        raise HTTPException(status_code=404, detail="Experience not found")

    for key, value in experience.model_dump().items():
        setattr(item, key, value)

    db.commit()
    db.refresh(item)
    return item


# Delete one Experience
@router.delete("/{experience_id}", status_code=status.HTTP_204_NO_CONTENT, dependencies=[Depends(apikey_middleware)])
async def delete_experience(experience_id: int, db: Session = Depends(get_db)):
    item = db.get(ExperienceModel, experience_id)
    if not item:
        raise HTTPException(status_code=404, detail="Experience not found")
    db.delete(item)
    db.commit()
    return None
