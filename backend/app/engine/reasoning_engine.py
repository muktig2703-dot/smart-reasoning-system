from app.agents.reasoning_agent import solve_problem
from app.agents.reasoner import analyze_problem
from app.agents.critic import critique_analysis
from app.agents.explainer import generate_explanation

from app.services.cache import get_cached, save_cached


def run_reasoning_pipeline(problem: str, settings):

    # -----------------------------
    # Cache
    # -----------------------------
    cached = get_cached(problem)

    if cached:
        print("✅ Cache Hit")
        return cached

    print("❌ Cache Miss")

    agents = settings.agents

    # -----------------------------
    # Planner
    # -----------------------------
    if agents.planner:

        result = solve_problem(
            problem,
            settings,
        )

        steps = result.get("steps", [])

    else:

        steps = []

        result = {
            "steps": []
        }

    # -----------------------------
    # Reasoner
    # -----------------------------
    if agents.reasoner:

        analysis_data = analyze_problem(
            problem,
            steps,
            settings,
        )

    else:

        analysis_data = []

    # -----------------------------
    # Critic
    # -----------------------------
    if agents.critic:

        critic_data = critique_analysis(
            problem,
            analysis_data,
            settings,
        )

    else:

        critic_data = {
            "skipped": True,
            "message": "Critic disabled."
        }

    # -----------------------------
    # Explainer
    # -----------------------------
    if agents.explainer:

        explanation = generate_explanation(
            problem,
            analysis_data,
            critic_data,
            settings,
        )

    else:

        explanation = {
            "skipped": True,
            "message": "Explainer disabled."
        }

    # -----------------------------
    # Final Response
    # -----------------------------
    final_result = {
        **result,
        "analysis": analysis_data,
        "critic": critic_data,
        "final_answer": explanation,
        "active_agents": [
            name
            for name, enabled in agents.model_dump().items()
            if enabled
        ],
        "settings_used": settings.model_dump(),
    }

    # -----------------------------
    # Cache
    # -----------------------------
    if settings.autoSaveHistory:
        save_cached(
            problem,
            final_result,
        )

    return final_result