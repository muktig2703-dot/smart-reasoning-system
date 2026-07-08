from pydantic import BaseModel


class ReasoningRequest(BaseModel):
    problem: str


class PlannerResponse(BaseModel):
    steps: list[str]


class AnalysisItem(BaseModel):
    step: str
    reasoning: str


class ReasonerResponse(BaseModel):
    analysis: list[AnalysisItem]

class CriticResult(BaseModel):
    assumptions: list[str]
    missing_information: list[str]
    risks: list[str]
    follow_up_questions: list[str]


class CriticResponse(BaseModel):
    critic: CriticResult