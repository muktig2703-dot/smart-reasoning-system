from app.agents.critic import critique_analysis
from app.agents.planner import create_plan
from app.agents.reasoner import analyze_problem

from app.schemas.reasoning import (
    CriticResponse,
    PlannerResponse,
    ReasonerResponse,
)


def run_reasoning_pipeline(problem: str):

    # Planner
    plan = create_plan(problem)
    planner = PlannerResponse(**plan)

    # Reasoner
    analysis = analyze_problem(problem, planner.steps)
    reasoner = ReasonerResponse(**analysis)

    analysis_data = [
        item.model_dump()
        for item in reasoner.analysis
    ]

    # Critic
    critic = critique_analysis(
        problem,
        analysis_data,
    )

    critic_response = CriticResponse(**critic)

    return {
        "problem": problem,
        "steps": planner.steps,
        "analysis": analysis_data,
        "critic": critic_response.critic.model_dump(),
    }