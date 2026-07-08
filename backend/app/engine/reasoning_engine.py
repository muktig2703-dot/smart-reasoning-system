from app.agents.planner import create_plan
from app.agents.reasoner import analyze_problem

from app.schemas.reasoning import (
    PlannerResponse,
    ReasonerResponse,
)


def run_reasoning_pipeline(problem: str):
    # Step 1: Planner
    plan = create_plan(problem)
    planner_response = PlannerResponse(**plan)

    # Step 2: Reasoner
    analysis = analyze_problem(
        problem,
        planner_response.steps,
    )

    reasoner_response = ReasonerResponse(**analysis)

    return {
        "problem": problem,
        "steps": planner_response.steps,
        "analysis": [
            item.model_dump()
            for item in reasoner_response.analysis
        ],
    }