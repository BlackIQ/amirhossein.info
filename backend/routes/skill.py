# FastAPI, SQLAlchemy
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

# Dependencies
from dependencies import get_db
# Middlewares
from middlewares.apikey import apikey_middleware
# Models
from models.skill import SkillModel
# Schema
from schemas.skill import Skill, SkillRead

# Router
router = APIRouter(
    prefix="/skills",
    tags=["Skills"],
)


# Get all Skills
@router.get("", response_model=list[SkillRead])
async def all_skills(db: Session = Depends(get_db)):
    return db.query(SkillModel).where(SkillModel.show == True).order_by(SkillModel.priority).all()


# Create one Skill
@router.post("", response_model=SkillRead, status_code=status.HTTP_201_CREATED,
             dependencies=[Depends(apikey_middleware)])
async def create_skill(skill: Skill, db: Session = Depends(get_db)):
    db_item = SkillModel(**skill.model_dump())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item


# Get one Skill
@router.get("/{skill_id}", response_model=SkillRead)
async def get_skill(skill_id: int, db: Session = Depends(get_db)):
    item = db.get(SkillModel, skill_id)
    if not item:
        raise HTTPException(status_code=404, detail="Skill not found")
    return item


# Update one Skill
@router.put("/{skill_id}", response_model=SkillRead, dependencies=[Depends(apikey_middleware)])
async def update_skill(skill_id: int, skill: Skill, db: Session = Depends(get_db)):
    item = db.get(SkillModel, skill_id)
    if not item:
        raise HTTPException(status_code=404, detail="Skill not found")

    for key, value in skill.model_dump().items():
        setattr(item, key, value)

    db.commit()
    db.refresh(item)
    return item


# Delete one Skill
@router.delete("/{skill_id}", status_code=status.HTTP_204_NO_CONTENT, dependencies=[Depends(apikey_middleware)])
async def delete_skill(skill_id: int, db: Session = Depends(get_db)):
    item = db.get(SkillModel, skill_id)
    if not item:
        raise HTTPException(status_code=404, detail="Skill not found")
    db.delete(item)
    db.commit()
    return None
