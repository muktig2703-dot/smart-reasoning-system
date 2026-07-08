import json

from app.services.llm import generate_json
from app.utils.prompt_loader import load_prompt


def critique_analysis(problem: str, analysis: list):
    critic_prompt = load_prompt("critic.txt")

    prompt = f"""
{critic_prompt}

Problem:
{problem}

Analysis:
{json.dumps(analysis, indent=2)}
"""

    return generate_json(prompt)