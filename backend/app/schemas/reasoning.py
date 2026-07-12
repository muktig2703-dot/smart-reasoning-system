from pydantic import BaseModel

class AgentSettings(BaseModel):
    planner: bool = True
    reasoner: bool = True
    critic: bool = True
    explainer: bool = True

class UserSettings(BaseModel):
    reasoningDepth: str = "balanced"
    responseStyle: str = "professional"
    autoSaveHistory: bool = True
    animations: bool = True
    autoClearWorkspace: bool = False
    agents: AgentSettings

class ReasoningRequest(BaseModel):
    problem: str
    settings: UserSettings
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

class ExplainerResponse(BaseModel):
    summary: str
    recommendation: str
    confidence: int