import json

from app.services.llm import generate_json
from app.utils.prompt_loader import load_prompt


def generate_explanation(problem: str, analysis: list, critic: dict):
    explainer_prompt = load_prompt("explainer.txt")

    prompt = f"""
{explainer_prompt}

Problem:
{problem}

Analysis:
{json.dumps(analysis, indent=2)}

Critique:
{json.dumps(critic, indent=2)}
"""

    return generate_json(prompt)