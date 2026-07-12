from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.user import User
from app.schemas.user import UserResponse, UserUpdate
from app.auth.dependencies import get_current_user

router = APIRouter(
    prefix="/profile",
    tags=["Profile"]
)

@router.get(
    "/",
    response_model=UserResponse
)
def get_profile(
    current_user: User = Depends(get_current_user)
):
    return current_user

@router.put(
    "/",
    response_model=UserResponse
)
def update_profile(
    data: UserUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    existing = (
        db.query(User)
        .filter(
            User.email == data.email,
            User.id != current_user.id
        )
        .first()
    )

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Email already exists."
        )

    current_user.name = data.name
    current_user.email = data.email

    db.commit()
    db.refresh(current_user)

    return current_user