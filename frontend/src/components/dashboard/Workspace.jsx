import { useState } from "react";
import SectionCard from "./SectionCard";
import { analyzeProblem } from "../../api/reasoningApi";
export default function Workspace() {
    const [problem, setProblem] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const handleAnalyze = async () => {

    if (!problem.trim()) return;

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

<div className="mt-12 space-y-10">

    <SectionCard
    icon="🧠"
    title="Reasoning Plan"
>
    {result ? (
        <div className="space-y-3">

            {result.steps.map((step, index) => (

                <div
                    key={index}
                    className="flex items-start gap-4 rounded-lg border border-slate-800 bg-slate-950/40 p-4"
                >

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold">
                        {index + 1}
                    </div>

                    <p className="text-slate-300">
                        {step}
                    </p>

                </div>

            ))}

        </div>
    ) : (

        <p className="text-slate-500">
            Your reasoning plan will appear here after analysis.
        </p>

    )}
</SectionCard>

    <SectionCard
    icon="🔍"
    title="Analysis"
>
    {result ? (

        <div className="space-y-6">

            {result.analysis.analysis.map((item, index) => (

                <div
                    key={index}
                    className="rounded-xl border border-slate-800 bg-slate-950/40 p-5"
                >

                    <div className="flex items-center gap-3 mb-3">

                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold">
                            {index + 1}
                        </div>

                        <h3 className="font-semibold text-lg text-white">
                            {item.step}
                        </h3>

                    </div>

                    <p className="leading-7 text-slate-400">
                        {item.reasoning}
                    </p>

                </div>

            ))}

        </div>

    ) : (

        <p className="text-slate-500">
            Detailed reasoning will appear here after analysis.
        </p>

    )}
</SectionCard>

    <SectionCard
    icon="⚠️"
    title="Critique"
>
    {result ? (

        <div className="space-y-8">

            {/* Assumptions */}

            <div>

                <h3 className="text-lg font-semibold mb-3 text-amber-400">
                    Assumptions
                </h3>

                <ul className="space-y-2">

                    {result.critic.critic.assumptions.map((item, index) => (

                        <li
                            key={index}
                            className="rounded-lg border border-slate-800 bg-slate-950/40 p-3"
                        >
                            {item}
                        </li>

                    ))}

                </ul>

            </div>

            {/* Missing Information */}

            <div>

                <h3 className="text-lg font-semibold mb-3 text-cyan-400">
                    Missing Information
                </h3>

                <ul className="space-y-2">

                    {result.critic.critic.missing_information.map((item, index) => (

                        <li
                            key={index}
                            className="rounded-lg border border-slate-800 bg-slate-950/40 p-3"
                        >
                            {item}
                        </li>

                    ))}

                </ul>

            </div>

            {/* Risks */}

            <div>

                <h3 className="text-lg font-semibold mb-3 text-red-400">
                    Risks
                </h3>

                <ul className="space-y-2">

                    {result.critic.critic.risks.map((item, index) => (

                        <li
                            key={index}
                            className="rounded-lg border border-slate-800 bg-slate-950/40 p-3"
                        >
                            {item}
                        </li>

                    ))}

                </ul>

            </div>

            {/* Follow-up Questions */}

            <div>

                <h3 className="text-lg font-semibold mb-3 text-green-400">
                    Follow-up Questions
                </h3>

                <ul className="space-y-2">

                    {result.critic.critic.follow_up_questions.map((item, index) => (

                        <li
                            key={index}
                            className="rounded-lg border border-slate-800 bg-slate-950/40 p-3"
                        >
                            {item}
                        </li>

                    ))}

                </ul>

            </div>

        </div>

    ) : (

        <p className="text-slate-500">
            Critique will appear here after analysis.
        </p>

    )}
</SectionCard>

    <SectionCard
    icon="✅"
    title="Final Recommendation"
>
    {result ? (

        <div className="space-y-8">

            {/* Summary */}

            <div>

                <h3 className="text-lg font-semibold text-indigo-400 mb-3">
                    Summary
                </h3>

                <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-5">

                    <p className="leading-7 text-slate-300">
                        {result.final_answer.summary}
                    </p>

                </div>

            </div>

            {/* Recommendation */}

            <div>

                <h3 className="text-lg font-semibold text-emerald-400 mb-3">
                    Recommendation
                </h3>

                <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-5">

                    <p className="leading-7 text-slate-300">
                        {result.final_answer.recommendation}
                    </p>

                </div>

            </div>

            {/* Confidence */}

            <div>

                <h3 className="text-lg font-semibold mb-3">
                    Confidence
                </h3>

                <div className="w-full h-4 rounded-full bg-slate-800 overflow-hidden">

                    <div
                        className="h-full bg-indigo-500 transition-all duration-700"
                        style={{
                            width: `${result.final_answer.confidence}%`
                        }}
                    />

                </div>

                <p className="mt-3 text-right text-indigo-400 font-semibold">

                    {result.final_answer.confidence}%

                </p>

            </div>

        </div>

    ) : (

        <p className="text-slate-500">
            Final recommendation will appear here.
        </p>

    )}
</SectionCard>
</div>
</div>
</div>
</main>
    );
}