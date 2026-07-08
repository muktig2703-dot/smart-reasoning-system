import json
import os
import re

from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def _extract_json(text: str) -> str:
    """
    Extract JSON from Gemini responses.
    Handles cases where the model wraps JSON in markdown.
    """

    text = text.strip()

    # Remove ```json ... ```
    text = re.sub(r"^```json", "", text, flags=re.IGNORECASE)
    text = re.sub(r"^```", "", text)
    text = re.sub(r"```$", "", text)

    return text.strip()


def generate_json(prompt: str):
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt,
    )

    cleaned = _extract_json(response.text)

    try:
        return json.loads(cleaned)

    except json.JSONDecodeError as e:
        raise ValueError(
            f"Gemini returned invalid JSON:\n\n{response.text}"
        ) from e