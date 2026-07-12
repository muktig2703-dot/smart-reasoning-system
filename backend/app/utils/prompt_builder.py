from app.schemas.reasoning import UserSettings


def build_prompt(problem: str, settings: UserSettings) -> str:

    prompt = f"""
Problem:
{problem}

Reasoning Depth:
{settings.reasoningDepth}

Response Style:
{settings.responseStyle}

"""

    prompt += "\nActive AI Agents:\n"

    if settings.agents.planner:
        prompt += "- Planner\n"

    if settings.agents.reasoner:
        prompt += "- Reasoner\n"

    if settings.agents.critic:
        prompt += "- Critic\n"

    if settings.agents.explainer:
        prompt += "- Explainer\n"

    prompt += "\nInstructions:\n"

    if settings.reasoningDepth == "quick":
        prompt += "- Keep the reasoning concise.\n"

    elif settings.reasoningDepth == "balanced":
        prompt += "- Provide balanced reasoning.\n"

    elif settings.reasoningDepth == "deep":
        prompt += "- Think carefully before answering.\n"
        prompt += "- Explore multiple perspectives.\n"
        prompt += "- Produce detailed reasoning.\n"

    if settings.responseStyle == "professional":
        prompt += "- Write professionally.\n"

    elif settings.responseStyle == "beginner":
        prompt += "- Explain everything in simple language.\n"

    elif settings.responseStyle == "technical":
        prompt += "- Use technical terminology.\n"

    return prompt