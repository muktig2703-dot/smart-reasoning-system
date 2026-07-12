import json

from app.services.llm import generate_json
from app.utils.prompt_loader import load_prompt
from app.utils.prompt_builder import build_prompt


def analyze_problem(
    problem: str,
    steps: list[str],
    settings
):
    reasoner_prompt = load_prompt("reasoner.txt")

    user_prompt = build_prompt(
        problem,
        settings,
    )

    prompt = f"""
{reasoner_prompt}

{user_prompt}

Steps:
{json.dumps(steps, indent=2)}
"""

    return generate_json(prompt)