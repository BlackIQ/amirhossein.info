# FastAPI, SQLAlchemy
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

# Dependencies
from dependencies import get_db
# Middlewares
from middlewares.apikey import apikey_middleware
# Models
from models.message import MessageModel
# Schema
from schemas.message import Message, MessageRead

# Router
router = APIRouter(
    prefix="/messages",
    tags=["Message"],
)


# Get all Messages
@router.get("", response_model=list[MessageRead], dependencies=[Depends(apikey_middleware)])
async def all_messages(db: Session = Depends(get_db)):
    return db.query(MessageModel).all()


# Create one Message
@router.post("", response_model=MessageRead, status_code=status.HTTP_201_CREATED)
async def create_message(message: Message, db: Session = Depends(get_db)):
    db_item = MessageModel(**message.model_dump())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item


# Get one Message
@router.get("/{message_id}", response_model=MessageRead, dependencies=[Depends(apikey_middleware)])
async def get_message(message_id: int, db: Session = Depends(get_db)):
    item = db.get(MessageModel, message_id)
    if not item:
        raise HTTPException(status_code=404, detail="Message not found")
    return item


# Update one Message
@router.put("/{message_id}", response_model=MessageRead, dependencies=[Depends(apikey_middleware)])
async def update_message(message_id: int, message: Message, db: Session = Depends(get_db)):
    item = db.get(MessageModel, message_id)
    if not item:
        raise HTTPException(status_code=404, detail="Message not found")

    for key, value in message.model_dump().items():
        setattr(item, key, value)

    db.commit()
    db.refresh(item)
    return item


# Delete one Message
@router.delete("/{message_id}", status_code=status.HTTP_204_NO_CONTENT, dependencies=[Depends(apikey_middleware)])
async def delete_message(message_id: int, db: Session = Depends(get_db)):
    item = db.get(MessageModel, message_id)
    if not item:
        raise HTTPException(status_code=404, detail="Message not found")
    db.delete(item)
    db.commit()
    return None
