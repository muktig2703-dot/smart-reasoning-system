import { useState, useEffect } from "react";
import SectionCard from "./SectionCard";
import { analyzeProblem } from "../../api/reasoningApi";
import SkeletonCard from "./SkeletonCard";
import Results from "./Results";
import SkeletonResults from "./SkeletonResults";
import EmptyState from "./EmptyState";
export default function Workspace({
    history,
    setHistory,
    selectedAnalysis
}) {
    const [problem, setProblem] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    useEffect(() => {

    if (!selectedAnalysis) return;

    setProblem(selectedAnalysis.problem);

    setResult(selectedAnalysis.result);

}, [selectedAnalysis]);
    const handleAnalyze = async () => {

    if (!problem.trim()) return;

    setLoading(true);

    try {

        const data = await analyzeProblem(problem);

        console.log(data);

        setResult(data);
        setHistory(prev => [

    {
        id: Date.now(),
        problem,
        result: data,
        time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        })
    },

    ...prev

]);

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
        <main className="flex-1 overflow-y-auto px-10 py-10">

            <div className="max-w-5xl mx-auto">

                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">

                    <h2 className="text-3xl font-bold mb-3">
                        AI Reasoning Workspace
                    </h2>

                    <p className="text-slate-400 mb-8">
                        Describe your problem and let the AI analyze it using
                        structured multi-agent reasoning.
                    </p>

                    <textarea
                        value={problem}
                        onChange={(e) => setProblem(e.target.value)}
                        placeholder="Describe your problem..."
                        className="w-full h-48 rounded-xl bg-[#0F172A] border border-slate-700 p-5 resize-none outline-none focus:border-indigo-500"
                    />
                    <div className="flex gap-4 mt-6">

    <button
    onClick={handleAnalyze}
    disabled={loading}
    className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition disabled:opacity-50"
>
    {loading ? "Analyzing..." : "Analyze"}
</button>

    <button
    onClick={() => {
        setProblem("");
        setResult(null);
    }}
    className="px-6 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 transition"
>
    Clear
</button>
</div>
<div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">

    <h3 className="text-lg font-semibold mb-6">
        Multi-Agent Pipeline
    </h3>

    <div className="flex flex-wrap items-center justify-between gap-4">

        {[
            "Planner",
            "Reasoner",
            "Critic",
            "Explainer"
        ].map((agent, index) => (

            <div
                key={agent}
                className="
                    flex-1
                    min-w-[150px]
                    rounded-xl
                    border
                    border-slate-700
                    bg-slate-950/40
                    p-4
                "
            >

                <div className="text-sm text-slate-400">
                    Agent
                </div>

                <div className="mt-2 text-lg font-semibold">

                    {agent}

                </div>

                <div className="mt-4">

                    {loading ? (

                        <span className="text-indigo-400 animate-pulse">

                            Processing...

                        </span>

                    ) : result ? (

                        <span className="text-green-400">

                            ✔ Completed

                        </span>

                    ) : (

                        <span className="text-slate-500">

                            Waiting

                        </span>

                    )}

                </div>

            </div>

        ))}

    </div>

</div>
{loading && <SkeletonResults />}

{!loading && !result && <EmptyState />}

{!loading && result && (
    <Results result={result} />
)}
</div>
</div>
</main>
    );
}