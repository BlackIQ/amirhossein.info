# FastAPI
from fastapi import APIRouter, Depends, HTTPException, status

# SQLAlchemy
from sqlalchemy.orm import Session

# Application
from dependencies import apikey, get_db  # Dependencies
from models import Comment  # Models
from schemas.comment import CommentCreate, CommentUpdate, CommentRead  # Schemas

# Router
router = APIRouter(
    prefix="/comments",
    tags=["Comment"],
)


@router.get("", response_model=list[CommentRead])
async def all_comments(
    db: Session = Depends(get_db),
):
    db_comments = (
        db.query(Comment)
        .order_by(
            Comment.id.desc(),
        )
        .all()
    )

    return db_comments


@router.post("", response_model=CommentRead, status_code=status.HTTP_201_CREATED)
async def create_comment(
    comment_data: CommentCreate,
    db: Session = Depends(get_db),
):
    db_comment = Comment(**comment_data.model_dump())

    db.add(db_comment)
    db.commit()
    db.refresh(db_comment)

    return db_comment


@router.get("/{comment_id}", response_model=CommentRead)
async def get_comment(
    comment_id: int,
    db: Session = Depends(get_db),
):
    db_comment = db.get(Comment, comment_id)

    if not db_comment:
        raise HTTPException(
            status_code=404,
            detail="Comment not found",
        )

    return db_comment


@router.put("/{comment_id}", response_model=CommentRead)
async def update_comment(
    comment_id: int,
    comment_data: CommentUpdate,
    apikey: str = Depends(apikey),
    db: Session = Depends(get_db),
):
    db_comment = db.get(Comment, comment_id)

    if not db_comment:
        raise HTTPException(
            status_code=404,
            detail="Comment not found",
        )

    for key, value in comment_data.model_dump(exclude_unset=True).items():
        setattr(db_comment, key, value)

    db.commit()
    db.refresh(db_comment)

    return db_comment


@router.delete("/{comment_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_comment(
    comment_id: int,
    apikey: str = Depends(apikey),
    db: Session = Depends(get_db),
):
    db_comment = db.get(Comment, comment_id)

    if not db_comment:
        raise HTTPException(
            status_code=404,
            detail="Comment not found",
        )

    db.delete(db_comment)
    db.commit()

    return None
