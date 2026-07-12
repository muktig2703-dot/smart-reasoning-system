from app.services.llm import generate_json
from app.utils.prompt_loader import load_prompt
from app.utils.prompt_builder import build_prompt


def solve_problem(
    problem: str,
    settings
):

    prompt_template = load_prompt("reasoning_pipeline.txt")

    user_prompt = build_prompt(
        problem,
        settings,
    )

    prompt = f"""
{prompt_template}

{user_prompt}
"""

    return generate_json(prompt)