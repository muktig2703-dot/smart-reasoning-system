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
                rows="6"
                placeholder="Example: Should I buy a laptop for college?"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
            />

            <button
                type="submit"
                disabled={loading}
            >
                {loading ? "Analyzing..." : "Analyze"}
            </button>
        </form>
    );
}

export default InputForm;