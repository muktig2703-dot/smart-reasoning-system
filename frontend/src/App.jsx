import { useState } from "react";
import { analyzeProblem } from "./api/reasoning";

function App() {
  const [problem, setProblem] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!problem.trim()) return;

    setLoading(true);

    try {
      const data = await analyzeProblem(problem);
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-5xl rounded-lg bg-white p-8 shadow">

        <h1 className="mb-6 text-4xl font-bold">
          Smart Reasoning System
        </h1>

        <textarea
          className="w-full rounded border p-4"
          rows={5}
          placeholder="Enter a complex problem..."
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
        />

        <button
          onClick={handleAnalyze}
          className="mt-4 rounded bg-blue-600 px-6 py-3 text-white"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>

        {result && (
          <pre className="mt-8 overflow-auto rounded bg-gray-900 p-6 text-green-300">
            {JSON.stringify(result, null, 2)}
          </pre>
        )}

      </div>
    </div>
  );
}

export default App;