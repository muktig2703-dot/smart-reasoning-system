from fastapi import APIRouter

from app.engine.reasoning_engine import run_reasoning_pipeline
from app.agents.planner import create_plan
from app.schemas.reasoning import (
    PlannerResponse,
    ReasoningRequest,
)

router = APIRouter(
    prefix="/reasoning",
    tags=["Reasoning"],
)


@router.get("/health")
def health_check():
    return {
        "status": "Healthy",
        "message": "Reasoning API is working."
    }


@router.post("/plan")
def generate_plan(request: ReasoningRequest):
    plan = create_plan(request.problem)

    planner_response = PlannerResponse(**plan)

    return {
        "problem": request.problem,
        "steps": planner_response.steps,
    }


@router.post("/analyze")
def analyze(request: ReasoningRequest):
    return run_reasoning_pipeline(request.problem)