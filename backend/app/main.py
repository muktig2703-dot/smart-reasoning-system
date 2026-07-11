from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import Base, engine
from app.models import User, History
from app.routes.reasoning import router
from app.routes.auth import router as auth_router
from app.routes.history import router as history_router
Base.metadata.create_all(bind=engine)
app = FastAPI(
    title="Smart Reasoning System",
    version="1.0.0"
)
app.include_router(auth_router)
app.include_router(router)
app.include_router(history_router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
def root():
    return {
        "message": "Smart Reasoning System API is running!"
    }