from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.history import History
from app.models.user import User
from app.schemas.history import (
    HistoryCreate,
    HistoryResponse
)
from app.auth.dependencies import get_current_user

router = APIRouter(
    prefix="/history",
    tags=["History"]
)


@router.post(
    "/",
    response_model=HistoryResponse
)
def save_history(
    history: HistoryCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    new_history = History(
        problem=history.problem,
        result=history.result,
        user_id=current_user.id
    )

    db.add(new_history)
    db.commit()
    db.refresh(new_history)

    return new_history

@router.get("/", response_model=list[HistoryResponse])
def get_history(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    history = (
        db.query(History)
        .filter(History.user_id == current_user.id)
        .order_by(History.created_at.desc())
        .all()
    )

    return history

from fastapi import HTTPException

@router.delete("/{history_id}")
def delete_history(
    history_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    history = (
        db.query(History)
        .filter(
            History.id == history_id,
            History.user_id == current_user.id
        )
        .first()
    )

    if not history:
        raise HTTPException(
            status_code=404,
            detail="History not found."
        )

    db.delete(history)
    db.commit()

    return {
        "message": "History deleted successfully."
    }

from sqlalchemy import or_

@router.get("/search", response_model=list[HistoryResponse])
def search_history(
    q: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    history = (
        db.query(History)
        .filter(
            History.user_id == current_user.id,
            or_(
                History.problem.contains(q),
                History.result.contains(q)
            )
        )
        .order_by(History.created_at.desc())
        .all()
    )

    return history