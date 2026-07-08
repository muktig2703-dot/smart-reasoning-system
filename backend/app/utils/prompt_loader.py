from pathlib import Path

PROMPTS_DIR = Path(__file__).parent.parent / "prompts"


def load_prompt(filename: str) -> str:
    """
    Load a prompt template from the prompts directory.
    """
    prompt_path = PROMPTS_DIR / filename
    return prompt_path.read_text(encoding="utf-8")