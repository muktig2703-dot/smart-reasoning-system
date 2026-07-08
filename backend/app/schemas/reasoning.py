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