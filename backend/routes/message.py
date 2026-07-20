# FastAPI
from fastapi import APIRouter, Depends, HTTPException, status

# SQLAlchemy
from sqlalchemy.orm import Session

# Application
from dependencies import apikey, get_db  # Dependencies
from models import Message  # Models
from schemas.message import MessageCreate, MessageRead  # Schemas

# Router
router = APIRouter(
    prefix="/messages",
    tags=["Message"],
)


@router.get("", response_model=list[MessageRead])
async def all_messages(
    db: Session = Depends(get_db),
):
    db_messages = (
        db.query(Message)
        .order_by(
            Message.id.desc(),
        )
        .all()
    )

    return db_messages


@router.post("", response_model=MessageRead, status_code=status.HTTP_201_CREATED)
async def create_message(
    message_data: MessageCreate,
    db: Session = Depends(get_db),
):
    db_message = Message(**message_data.model_dump())

    db.add(db_message)
    db.commit()
    db.refresh(db_message)

    return db_message


@router.get("/{message_id}", response_model=MessageRead)
async def get_message(
    message_id: int,
    db: Session = Depends(get_db),
):
    db_message = db.get(Message, message_id)

    if not db_message:
        raise HTTPException(
            status_code=404,
            detail="Message not found",
        )

    return db_message


@router.put("/{message_id}", response_model=MessageRead)
async def update_message(
    message_id: int,
    message_data: MessageCreate,
    db: Session = Depends(get_db),
):
    db_message = db.get(Message, message_id)

    if not db_message:
        raise HTTPException(
            status_code=404,
            detail="Message not found",
        )

    for key, value in message_data.model_dump().items():
        setattr(db_message, key, value)

    db.commit()
    db.refresh(db_message)

    return db_message


@router.delete("/{message_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_message(
    message_id: int,
    db: Session = Depends(get_db),
):
    db_message = db.get(Message, message_id)

    if not db_message:
        raise HTTPException(
            status_code=404,
            detail="Message not found",
        )

    db.delete(db_message)
    db.commit()

    return None
