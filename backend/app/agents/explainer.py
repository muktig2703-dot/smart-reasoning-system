import json

from app.services.llm import generate_json
from app.utils.prompt_loader import load_prompt
from app.utils.prompt_builder import build_prompt


def generate_explanation(
    problem: str,
    analysis: list,
    critic: dict,
    settings
):
    explainer_prompt = load_prompt("explainer.txt")

    user_prompt = build_prompt(
        problem,
        settings,
    )

    prompt = f"""
{explainer_prompt}

{user_prompt}

Analysis:
{json.dumps(analysis, indent=2)}

Critique:
{json.dumps(critic, indent=2)}
"""

    return generate_json(prompt)