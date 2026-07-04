# FastAPI, SQLAlchemy
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

# Dependencies
from dependencies import get_db
# Middlewares
from middlewares.apikey import apikey_middleware
# Models
from models.note import NoteModel
# Schema
from schemas.note import Note, NoteRead

# Router
router = APIRouter(
    prefix="/notes",
    tags=["Note"],
)


# Get all Notes
@router.get("", response_model=list[NoteRead])
async def all_notes(db: Session = Depends(get_db)):
    return db.query(NoteModel).order_by(NoteModel.id).all()


# Create one Note
@router.post("", response_model=NoteRead, status_code=status.HTTP_201_CREATED,
             dependencies=[Depends(apikey_middleware)])
async def create_note(note: Note, db: Session = Depends(get_db)):
    db_item = NoteModel(**note.model_dump())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item


# Get one Note
@router.get("/{note_id}", response_model=NoteRead)
async def get_note(note_id: int, db: Session = Depends(get_db)):
    item = db.get(NoteModel, note_id)
    if not item:
        raise HTTPException(status_code=404, detail="Note not found")
    return item


# Update one Note
@router.put("/{note_id}", response_model=NoteRead, dependencies=[Depends(apikey_middleware)])
async def update_note(note_id: int, note: Note, db: Session = Depends(get_db)):
    item = db.get(NoteModel, note_id)
    if not item:
        raise HTTPException(status_code=404, detail="Note not found")

    for key, value in note.model_dump().items():
        setattr(item, key, value)

    db.commit()
    db.refresh(item)
    return item


# Delete one Note
@router.delete("/{note_id}", status_code=status.HTTP_204_NO_CONTENT, dependencies=[Depends(apikey_middleware)])
async def delete_note(note_id: int, db: Session = Depends(get_db)):
    item = db.get(NoteModel, note_id)
    if not item:
        raise HTTPException(status_code=404, detail="Note not found")
    db.delete(item)
    db.commit()
    return None
