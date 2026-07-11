from pydantic import BaseModel
from datetime import datetime


class HistoryCreate(BaseModel):
    problem: str
    result: str


class HistoryResponse(BaseModel):
    id: int
    problem: str
    result: str
    created_at: datetime

    class Config:
        from_attributes = True