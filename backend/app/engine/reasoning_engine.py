from app.agents.planner import create_plan
from app.agents.reasoner import analyze_problem
from app.agents.critic import critique_analysis
from app.agents.explainer import generate_explanation

from app.schemas.reasoning import (
    PlannerResponse,
    ReasonerResponse,
    CriticResponse,
    ExplainerResponse,
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

    critic_data = critic_response.critic.model_dump()

    # Explainer
    explanation = generate_explanation(
        problem,
        analysis_data,
        critic_data,
    )

    explainer = ExplainerResponse(**explanation)

    return {
        "problem": problem,
        "steps": planner.steps,
        "analysis": analysis_data,
        "critic": critic_data,
        "final_answer": explainer.model_dump(),
    }