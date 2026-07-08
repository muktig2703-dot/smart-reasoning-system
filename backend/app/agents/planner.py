from app.services.llm import generate_json
from app.utils.prompt_loader import load_prompt


def create_plan(problem: str):
    planner_prompt = load_prompt("planner.txt")

    prompt = f"""
{planner_prompt}

{problem}
"""

    return generate_json(prompt)