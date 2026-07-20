# FastAPI
from fastapi import APIRouter, Depends, HTTPException, status

# SQLAlchemy
from sqlalchemy.orm import Session

# Application
from dependencies import apikey, get_db  # Dependencies
from models import Note  # Models
from schemas.note import NoteCreate, NoteRead  # Schemas

# Router
router = APIRouter(
    prefix="/notes",
    tags=["Note"],
)


@router.get("", response_model=list[NoteRead])
async def all_notes(
    db: Session = Depends(get_db),
):
    db_notes = (
        db.query(Note)
        .order_by(
            Note.id.desc(),
        )
        .all()
    )

    return db_notes


@router.post("", response_model=NoteRead, status_code=status.HTTP_201_CREATED)
async def create_note(
    note_data: NoteCreate,
    apikey: str = Depends(apikey),
    db: Session = Depends(get_db),
):
    db_note = Note(**note_data.model_dump())

    db.add(db_note)
    db.commit()
    db.refresh(db_note)

    return db_note


@router.get("/{note_id}", response_model=NoteRead)
async def get_note(
    note_id: int,
    db: Session = Depends(get_db),
):
    item = db.get(Note, note_id)

    if not item:
        raise HTTPException(
            status_code=404,
            detail="Note not found",
        )

    return item


@router.put("/{note_id}", response_model=NoteRead)
async def update_note(
    note_id: int,
    note_data: NoteCreate,
    apikey: str = Depends(apikey),
    db: Session = Depends(get_db),
):
    db_note = db.get(Note, note_id)

    if not db_note:
        raise HTTPException(
            status_code=404,
            detail="Note not found",
        )

    for key, value in note_data.model_dump().items():
        setattr(db_note, key, value)

    db.commit()
    db.refresh(db_note)

    return db_note


@router.delete("/{note_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_note(
    note_id: int,
    apikey: str = Depends(apikey),
    db: Session = Depends(get_db),
):
    db_note = db.get(Note, note_id)

    if not db_note:
        raise HTTPException(
            status_code=404,
            detail="Note not found",
        )

    db.delete(db_note)
    db.commit()

    return None
