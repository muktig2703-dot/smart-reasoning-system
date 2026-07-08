import json

from app.services.llm import generate_json
from app.utils.prompt_loader import load_prompt


def analyze_problem(problem: str, steps: list[str]):
    reasoner_prompt = load_prompt("reasoner.txt")

    prompt = f"""
{reasoner_prompt}

Problem:
{problem}

Steps:
{json.dumps(steps, indent=2)}
"""

    return generate_json(prompt)