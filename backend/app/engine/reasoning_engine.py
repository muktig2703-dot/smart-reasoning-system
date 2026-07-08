from app.agents.reasoning_agent import solve_problem


def run_reasoning_pipeline(problem: str):

    result = solve_problem(problem)

    result["problem"] = problem

    return result