from app.agents.reasoning_agent import solve_problem
from app.services.cache import get_cached, save_cached
from app.agents.reasoner import analyze_problem
from app.agents.critic import critique_analysis
from app.agents.explainer import generate_explanation


def run_reasoning_pipeline(problem: str):

    # Step 1: Check cache
    cached = get_cached(problem)

    if cached:
        print("✅ Cache Hit")
        return cached

    print("❌ Cache Miss")

    # Step 2: Run full pipeline
    result = solve_problem(problem)

    analysis_data = analyze_problem(
        problem,
        result["steps"],
    )

    critic_data = critique_analysis(
        problem,
        analysis_data,
    )

    explanation = generate_explanation(
        problem,
        analysis_data,
        critic_data,
    )

    final_result = {
        **result,
        "analysis": analysis_data,
        "critic": critic_data,
        "final_answer": explanation,
    }

    # Step 3: Save into cache
    save_cached(problem, final_result)

    return final_result