import { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import LoadingSpinner from "./components/LoadingSpinner";
import { analyzeProblem } from "./api/reasoningApi";
import PlannerCard from "./components/PlannerCard";
import AnalysisCard from "./components/AnalysisCard";
import CritiqueCard from "./components/CritiqueCard";
import RecommendationCard from "./components/RecommendationCard";
import ConfidenceMeter from "./components/ConfidenceMeter";
import Container from "./components/layout/Container";
import Header from "./components/layout/Header";
function App() {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleAnalyze = async (problem) => {

    setLoading(true);

    try {

        const data = await analyzeProblem(problem);

        console.log(data);

        setResult(data);

    } catch (error) {

        console.error(error);

        alert(
            error.response?.data?.detail ||
            "Something went wrong."
        );

    } finally {

        setLoading(false);

    }

};

    return (
    <Container>

        <Header />

        <InputForm
            onAnalyze={handleAnalyze}
            loading={loading}
        />

        {loading && <LoadingSpinner />}
        {!loading && !result && (
    <div className="empty-state">
        <h2>🧠 Smart Reasoning System</h2>

        <p>
            Ask any reasoning question and let the AI analyze it
            through planning, reasoning, critique, and explanation.
        </p>

        <div className="example-box">
            💡 Example:
            <br />
            Should I buy a laptop for college?
        </div>
    </div>
)}

        {result && (
            <>
                <PlannerCard
                    steps={result.steps}
                />

                <AnalysisCard
                    analysis={result.analysis}
                />

                <CritiqueCard
                    critic={result.critic}
                />

                <RecommendationCard
                    recommendation={result.final_answer}
                />

                <ConfidenceMeter
                    confidence={result.final_answer.confidence}
                />
            </>
        )}

    </Container>
);
}

export default App;