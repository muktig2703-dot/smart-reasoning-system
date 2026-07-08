from app.services.llm import generate_json
from app.utils.prompt_loader import load_prompt


def solve_problem(problem: str):

    prompt_template = load_prompt("reasoning_pipeline.txt")

    prompt = f"""
{prompt_template}

Problem:

{problem}
"""

    return generate_json(prompt)