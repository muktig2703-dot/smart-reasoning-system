import { useState } from "react";

import Navbar from "./components/Navbar";
import InputForm from "./components/InputForm";
import LoadingSpinner from "./components/LoadingSpinner";
import { analyzeProblem } from "./api/reasoningApi";
import PlannerCard from "./components/PlannerCard";
import AnalysisCard from "./components/AnalysisCard";
import CritiqueCard from "./components/CritiqueCard";
import RecommendationCard from "./components/RecommendationCard";
import ConfidenceMeter from "./components/ConfidenceMeter";
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
        <div className="container">

            <Navbar />

            <InputForm
                onAnalyze={handleAnalyze}
                loading={loading}
            />

            {loading && <LoadingSpinner />}

            {result && (
    <PlannerCard
        steps={result.steps}
    />
)}

{result && (
    <AnalysisCard
        analysis={result.analysis}
    />
)}

{result && (
    <CritiqueCard
        critic={result.critic}
    />
)}

{result && (
    <RecommendationCard
        recommendation={result.final_answer}
    />
)}

{result && (
    <ConfidenceMeter
        confidence={result.final_answer.confidence}
    />
)}
        </div>
    );
}

export default App;