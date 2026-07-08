import json
import os
import re
from dotenv import load_dotenv
from google import genai
from google.genai.errors import ClientError, ServerError
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
    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
        )

        text = response.text.strip()

        # Remove Markdown code fences if present
        if text.startswith("```json"):
            text = text.replace("```json", "").replace("```", "").strip()

        return json.loads(text)

    except ClientError as e:
        raise Exception(
            "Gemini API quota exceeded. Please wait a minute and try again."
        ) from e

    except ServerError as e:
        raise Exception(
            "Gemini servers are currently busy. Please try again shortly."
        ) from e

    except json.JSONDecodeError as e:
        raise Exception(
            "Gemini returned an invalid JSON response."
        ) from e

    except Exception as e:
        raise Exception(
            f"Unexpected LLM error: {str(e)}"
        ) from e