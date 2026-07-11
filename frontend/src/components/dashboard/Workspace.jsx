import { useState, useEffect } from "react";
import { analyzeProblem } from "../../api/reasoningApi";
import { saveHistory } from "../../api/historyApi";
import Results from "./Results";
import SkeletonResults from "./SkeletonResults";
import EmptyState from "./EmptyState";
import { motion } from "framer-motion";
import {
    Brain,
    Search,
    TriangleAlert,
    BadgeCheck,
    ArrowRight
} from "lucide-react";
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


setResult(data);


// save permanently to database

const response = await saveHistory({

    problem,

    result: JSON.stringify(data)

});


const savedHistory = {

    ...response.data,

    result: JSON.parse(response.data.result)

};


setHistory(prev => [

    savedHistory,

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
const agents = [
    {
        title: "Planner",
        icon: Brain
    },
    {
        title: "Reasoner",
        icon: Search
    },
    {
        title: "Critic",
        icon: TriangleAlert
    },
    {
        title: "Explainer",
        icon: BadgeCheck
    }
];

    return (
        <motion.main
        initial={{
    opacity: 0,
    y: 20
}}

animate={{
    opacity: 1,
    y: 0
}}

transition={{
    duration: 0.5
}} className="flex-1 overflow-y-auto px-10 py-10">

            <div className="max-w-5xl mx-auto">

                <div
    className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/60
        backdrop-blur-sm
        p-10
        shadow-2xl
        shadow-black/30
    "
>

                    <div className="mb-10">

    <p className="text-indigo-400 font-medium tracking-wide uppercase text-sm">
        AI Workspace
    </p>

    <h2 className="mt-2 text-4xl font-bold tracking-tight">
        Analyze Complex Problems
    </h2>

    <p className="mt-4 max-w-3xl text-slate-400 leading-8">
        Enter any decision, technical question, research topic, or real-world
        problem. The AI will break it into logical steps, evaluate multiple
        perspectives, critique its own reasoning, and generate a structured
        recommendation.
    </p>

</div>

                    <textarea
    value={problem}
    onChange={(e) => setProblem(e.target.value)}
    placeholder="Describe your problem in as much detail as possible..."
    className="
        w-full
        h-56
        rounded-2xl
        border
        border-slate-700
        bg-[#0F172A]
        px-6
        py-5
        text-[15px]
        leading-8
        resize-none
        outline-none
        transition-all
        duration-300
        focus:border-indigo-500
        focus:ring-2
        focus:ring-indigo-500/20
    "
/>
<div className="mt-6">

    <p className="text-sm text-slate-500 mb-4">
        Try one of these examples
    </p>

    <div className="flex flex-wrap gap-3">

        {[
            "Should I pursue AI or Web Development first?",
            "Should I buy a gaming laptop for college?",
            "How can I prepare for AI internships?",
            "Create a roadmap to become an ML Engineer."
        ].map((example) => (

            <button
                key={example}
                onClick={() => setProblem(example)}
                className="
                    rounded-full
                    border
                    border-slate-700
                    bg-slate-900
                    px-4
                    py-2
                    text-sm
                    text-slate-300
                    transition
                    hover:border-indigo-500
                    hover:text-white
                "
            >
                {example}
            </button>

        ))}

    </div>

</div>
                    <div className="flex gap-4 mt-6">

    <motion.button
    whileHover={{
        y: -2,
        scale: 1.02
    }}
    whileTap={{
        scale: 0.98
    }}
    onClick={handleAnalyze}
    disabled={loading}
    className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition disabled:opacity-50"
>
    {loading ? "Analyzing..." : "Analyze"}
</motion.button>

    <motion.button
    whileHover={{
        y: -2,
        scale: 1.02
    }}
    whileTap={{
        scale: 0.98
    }}
    onClick={() => {
        setProblem("");
        setResult(null);
    }}
    className="px-6 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 transition"
>
    Clear
</motion.button>
</div>

<div className="mt-8 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/40 px-5 py-4">

    <div>

        <p className="text-sm text-slate-400">
            AI Reasoning Engine
        </p>

        <p className="text-xs text-slate-500 mt-1">
            Planner • Reasoner • Critic • Explainer
        </p>

    </div>

    <div
        className={`text-sm font-medium ${
            loading
                ? "text-indigo-400"
                : "text-emerald-400"
        }`}
    >
        {loading ? "Processing..." : "Ready"}
    </div>

</div>

<div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">

    <h3 className="text-lg font-semibold mb-6">
        Multi-Agent Pipeline
    </h3>

    <div className="flex flex-wrap items-center justify-between gap-4">

        {agents.map((agent, index) => (
    <div
        key={agent.title}
        className="flex items-center flex-1 min-w-[150px]"
    >

            <div
    className="
        flex-1
        rounded-xl
        border
        border-slate-700
        bg-slate-950/40
        p-4
    "
>
                <div className="flex items-center gap-3">

    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-800">

        <agent.icon className="h-5 w-5 text-indigo-400" />

    </div>

    <div>

        <p className="text-xs uppercase tracking-wide text-slate-500">
            Agent
        </p>

        <h4 className="font-semibold text-white">
            {agent.title}
        </h4>

    </div>

</div>

                <div className="mt-4">

                    {loading ? (

    <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs text-indigo-300 animate-pulse">

        Processing

    </span>

) : result ? (

    <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-300">

        Completed

    </span>

) : (

    <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">

        Waiting

    </span>

)}
<p className="mt-4 text-sm leading-6 text-slate-500">

    {index === 0 &&
        "Breaks the problem into structured steps."}

    {index === 1 &&
        "Evaluates the problem using logical reasoning."}

    {index === 2 &&
        "Finds assumptions, risks and missing information."}

    {index === 3 &&
        "Creates the final recommendation with confidence."}

</p>

                </div>
                
</div>
{index < agents.length - 1 && (
    <ArrowRight
        className="hidden lg:block mx-3 h-5 w-5 text-slate-600"
    />
)}

</div>

))
        }

    </div>

</div>
{loading && <SkeletonResults />}

{!loading && !result && <EmptyState />}

{!loading && result && (
    <Results result={result} />
)}
</div>
</div>
</motion.main>
    );
}