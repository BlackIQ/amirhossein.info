# FastAPI
from fastapi import APIRouter, Depends, HTTPException, status

# SQLAlchemy
from sqlalchemy.orm import Session

# UUID
from uuid import UUID

# Application
from dependencies.token import get_current_user  # JWT Dependency
from dependencies.database import get_db  # Database Dependency
from schemas.resume import ResumeCreate, ResumeUpdate, ResumeRead  # Schemas
from models import Resume  # Models

# Router
router = APIRouter(
    prefix="/resumes",
    tags=["Resumes"],
)


@router.get("", response_model=list[ResumeRead])
async def all_resumes(
    db: Session = Depends(get_db),
):
    db_resumes = (
        db.query(Resume)
        .where(
            Resume.show == True,
        )
        .order_by(Resume.priority)
        .all()
    )

    return db_resumes


@router.post("", response_model=ResumeRead, status_code=status.HTTP_201_CREATED)
async def create_resume(
    resume_data: ResumeCreate,
    current_user: str = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    db_resume = Resume(**resume_data.model_dump())

    db.add(db_resume)
    db.commit()
    db.refresh(db_resume)

    return db_resume


@router.get("/{resume_id}", response_model=ResumeRead)
async def get_resume(
    resume_id: UUID,
    db: Session = Depends(get_db),
):
    db_resume = db.get(Resume, resume_id)

    if not db_resume:
        raise HTTPException(
            status_code=404,
            detail="Resume not found",
        )

    return db_resume


@router.put("/{resume_id}", response_model=ResumeRead)
async def update_resume(
    resume_id: UUID,
    resume_data: ResumeUpdate,
    current_user: str = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    db_resume = db.get(Resume, resume_id)

    if not db_resume:
        raise HTTPException(
            status_code=404,
            detail="Resume not found",
        )

    for key, value in resume_data.model_dump(exclude_unset=True).items():
        setattr(db_resume, key, value)

    db.commit()
    db.refresh(db_resume)

    return db_resume


@router.delete("/{resume_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_resume(
    resume_id: UUID,
    current_user: str = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    db_resume = db.get(Resume, resume_id)

    if not db_resume:
        raise HTTPException(
            status_code=404,
            detail="Resume not found",
        )

    db.delete(db_resume)
    db.commit()

    return None
