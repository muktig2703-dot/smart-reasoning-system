import { useState } from "react";

function InputForm({ onAnalyze, loading }) {
    const [problem, setProblem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!problem.trim()) return;

        onAnalyze(problem);
    };

    return (
        <form className="input-form" onSubmit={handleSubmit}>
            <textarea
                rows="5"
                placeholder="Ask a reasoning question..."
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
            />

            <button type="submit" disabled={loading}>
                {loading ? "Analyzing..." : "Analyze"}
            </button>
        </form>
    );
}

export default InputForm;