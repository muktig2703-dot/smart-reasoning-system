from app.services.llm import generate_json
from app.utils.prompt_loader import load_prompt
from app.utils.prompt_builder import build_prompt


def create_plan(
    problem: str,
    settings
):

    planner_prompt = load_prompt("planner.txt")

    user_prompt = build_prompt(
        problem,
        settings,
    )

    prompt = f"""
{planner_prompt}

{user_prompt}
"""

    return generate_json(prompt)