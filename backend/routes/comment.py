# FastAPI, SQLAlchemy
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

# Dependencies
from dependencies import get_db
# Middlewares
from middlewares.apikey import apikey_middleware
# Models
from models.comment import CommentModel
# Schema
from schemas.comment import Comment, CommentRead

# Router
router = APIRouter(
    prefix="/comments",
    tags=["Comment"],
)


# Get all Comments
@router.get("", response_model=list[CommentRead], dependencies=[Depends(apikey_middleware)])
async def all_comments(db: Session = Depends(get_db)):
    return db.query(CommentModel).all()


# Create one Comment
@router.post("", response_model=CommentRead, status_code=status.HTTP_201_CREATED)
async def create_comment(comment: Comment, db: Session = Depends(get_db)):
    db_item = CommentModel(**comment.model_dump())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item


# Get one Comment
@router.get("/{comment_id}", response_model=CommentRead, dependencies=[Depends(apikey_middleware)])
async def get_comment(comment_id: int, db: Session = Depends(get_db)):
    item = db.get(CommentModel, comment_id)
    if not item:
        raise HTTPException(status_code=404, detail="Comment not found")
    return item


# Update one Comment
@router.put("/{comment_id}", response_model=CommentRead, dependencies=[Depends(apikey_middleware)])
async def update_comment(comment_id: int, comment: Comment, db: Session = Depends(get_db)):
    item = db.get(CommentModel, comment_id)
    if not item:
        raise HTTPException(status_code=404, detail="Comment not found")

    for key, value in comment.model_dump().items():
        setattr(item, key, value)

    db.commit()
    db.refresh(item)
    return item


# Delete one Comment
@router.delete("/{comment_id}", status_code=status.HTTP_204_NO_CONTENT, dependencies=[Depends(apikey_middleware)])
async def delete_comment(comment_id: int, db: Session = Depends(get_db)):
    item = db.get(CommentModel, comment_id)
    if not item:
        raise HTTPException(status_code=404, detail="Comment not found")
    db.delete(item)
    db.commit()
    return None
