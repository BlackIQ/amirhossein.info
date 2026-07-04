# FastAPI, SQLAlchemy
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

# Dependencies
from dependencies import get_db
# Middlewares
from middlewares.apikey import apikey_middleware
# Models
from models.resume import ResumeModel
# Schema
from schemas.resume import Resume, ResumeRead

# Router
router = APIRouter(
    prefix="/resumes",
    tags=["Resumes"],
)


# Get all Resumes
@router.get("", response_model=list[ResumeRead])
async def all_resumes(db: Session = Depends(get_db)):
    return db.query(ResumeModel).where(ResumeModel.show == True).order_by(ResumeModel.priority).all()


# Create one Resume
@router.post("", response_model=ResumeRead, status_code=status.HTTP_201_CREATED,
             dependencies=[Depends(apikey_middleware)])
async def create_resume(resume: Resume, db: Session = Depends(get_db)):
    db_item = ResumeModel(**resume.model_dump())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item


# Get one Resume
@router.get("/{resume_id}", response_model=ResumeRead)
async def get_resume(resume_id: int, db: Session = Depends(get_db)):
    item = db.get(ResumeModel, resume_id)
    if not item:
        raise HTTPException(status_code=404, detail="Resume not found")
    return item


# Update one Resume
@router.put("/{resume_id}", response_model=ResumeRead, dependencies=[Depends(apikey_middleware)])
async def update_resume(resume_id: int, resume: Resume, db: Session = Depends(get_db)):
    item = db.get(ResumeModel, resume_id)
    if not item:
        raise HTTPException(status_code=404, detail="Resume not found")

    for key, value in resume.model_dump().items():
        setattr(item, key, value)

    db.commit()
    db.refresh(item)
    return item


# Delete one Resume
@router.delete("/{resume_id}", status_code=status.HTTP_204_NO_CONTENT, dependencies=[Depends(apikey_middleware)])
async def delete_resume(resume_id: int, db: Session = Depends(get_db)):
    item = db.get(ResumeModel, resume_id)
    if not item:
        raise HTTPException(status_code=404, detail="Resume not found")
    db.delete(item)
    db.commit()
    return None
