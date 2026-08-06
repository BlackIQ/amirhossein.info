# FastAPI
from fastapi import APIRouter, Depends, HTTPException, status

# SQLAlchemy
from sqlalchemy.orm import Session

# Application
from dependencies.token import get_current_user  # JWT Dependency
from dependencies.database import get_db  # Database Dependency
from schemas.skill import SkillCreate, SkillUpdate, SkillRead  # Schemas
from models import Skill  # Models

# Router
router = APIRouter(
    prefix="/skills",
    tags=["Skills"],
)


@router.get("", response_model=list[SkillRead])
async def all_skills(
    db: Session = Depends(get_db),
):
    db_skills = (
        db.query(Skill)
        .where(
            Skill.show == True,
        )
        .order_by(Skill.priority)
        .all()
    )

    return db_skills


@router.post("", response_model=SkillRead, status_code=status.HTTP_201_CREATED)
async def create_skill(
    skill_data: SkillCreate,
    current_user: str = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    db_skill = Skill(**skill_data.model_dump())

    db.add(db_skill)
    db.commit()
    db.refresh(db_skill)

    return db_skill


@router.get("/{skill_id}", response_model=SkillRead)
async def get_skill(
    skill_id: int,
    db: Session = Depends(get_db),
):
    db_skill = db.get(Skill, skill_id)

    if not db_skill:
        raise HTTPException(
            status_code=404,
            detail="Skill not found",
        )

    return db_skill


@router.put("/{skill_id}", response_model=SkillRead)
async def update_skill(
    skill_id: int,
    skill_data: SkillUpdate,
    current_user: str = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    db_skill = db.get(Skill, skill_id)

    if not db_skill:
        raise HTTPException(
            status_code=404,
            detail="Skill not found",
        )

    for key, value in skill_data.model_dump(exclude_unset=True).items():
        setattr(db_skill, key, value)

    db.commit()
    db.refresh(db_skill)

    return db_skill


@router.delete("/{skill_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_skill(
    skill_id: int,
    current_user: str = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    db_skill = db.get(Skill, skill_id)

    if not db_skill:
        raise HTTPException(
            status_code=404,
            detail="Skill not found",
        )

    db.delete(db_skill)
    db.commit()

    return None
