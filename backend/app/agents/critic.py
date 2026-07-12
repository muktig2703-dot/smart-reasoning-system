import json

from app.services.llm import generate_json
from app.utils.prompt_loader import load_prompt
from app.utils.prompt_builder import build_prompt


def critique_analysis(
    problem: str,
    analysis: list,
    settings
):
    critic_prompt = load_prompt("critic.txt")

    user_prompt = build_prompt(
        problem,
        settings,
    )

    prompt = f"""
{critic_prompt}

{user_prompt}

Analysis:
{json.dumps(analysis, indent=2)}
"""

    return generate_json(prompt)