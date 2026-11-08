# FastAPI
from fastapi import APIRouter, Depends, HTTPException, status

# SQLAlchemy
from sqlalchemy.orm import Session

# UUID
from uuid import UUID

# Application
from dependencies.token import get_current_user  # JWT Dependency
from dependencies.database import get_db  # Database Dependency
from schemas.experience import (
    ExperienceRead,
    ExperienceUpdate,
    ExperienceCreate,
)  # Schemas
from models import Experience  # Models

# Router
router = APIRouter(
    prefix="/experiences",
    tags=["Experiences"],
)


@router.get("", response_model=list[ExperienceRead])
async def all_experiences(
    db: Session = Depends(get_db),
):
    db_experiences = (
        db.query(Experience)
        .where(
            Experience.show == True,
        )
        .order_by(Experience.priority)
        .all()
    )

    return db_experiences


@router.post("", response_model=ExperienceRead, status_code=status.HTTP_201_CREATED)
async def create_experience(
    experience_data: ExperienceCreate,
    current_user: str = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    db_item = Experience(**experience_data.model_dump())

    db.add(db_item)
    db.commit()
    db.refresh(db_item)

    return db_item


@router.get("/{experience_id}", response_model=ExperienceRead)
async def get_experience(
    experience_id: UUID,
    current_user: str = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    db_experience = db.get(Experience, experience_id)

    if not db_experience:
        raise HTTPException(
            status_code=404,
            detail="Experience not found",
        )

    return db_experience


@router.put("/{experience_id}", response_model=ExperienceRead)
async def update_experience(
    experience_id: UUID,
    experience_data: ExperienceUpdate,
    current_user: str = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    db_experience = db.get(Experience, experience_id)

    if not db_experience:
        raise HTTPException(
            status_code=404,
            detail="Experience not found",
        )

    for key, value in experience_data.model_dump(exclude_unset=True).items():
        setattr(db_experience, key, value)

    db.commit()
    db.refresh(db_experience)

    return db_experience


@router.delete("/{experience_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_experience(
    experience_id: UUID,
    current_user: str = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    db_experience = db.get(Experience, experience_id)

    if not db_experience:
        raise HTTPException(
            status_code=404,
            detail="Experience not found",
        )

    db.delete(db_experience)
    db.commit()

    return None
