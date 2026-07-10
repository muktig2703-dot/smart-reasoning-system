import SectionCard from "./SectionCard";

export default function Results({ result }) {
    return (
        <div className="mt-12 space-y-10">

            {/* ==========================
                REASONING PLAN
            ========================== */}

            <SectionCard
                icon="🧠"
                title="Reasoning Plan"
            >
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

            </SectionCard>

            {/* ==========================
                ANALYSIS
            ========================== */}

            <SectionCard
                icon="🔍"
                title="Analysis"
            >
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

                                <h3 className="font-semibold text-lg">
                                    {item.step}
                                </h3>

                            </div>

                            <p className="leading-7 text-slate-400">
                                {item.reasoning}
                            </p>

                        </div>

                    ))}

                </div>

            </SectionCard>

            {/* ==========================
                CRITIQUE
            ========================== */}

            <SectionCard
                icon="⚠️"
                title="Critique"
            >

                <div className="space-y-8">

                    <Category
                        title="Assumptions"
                        color="text-amber-400"
                        items={result.critic.critic.assumptions}
                    />

                    <Category
                        title="Missing Information"
                        color="text-cyan-400"
                        items={result.critic.critic.missing_information}
                    />

                    <Category
                        title="Risks"
                        color="text-red-400"
                        items={result.critic.critic.risks}
                    />

                    <Category
                        title="Follow-up Questions"
                        color="text-green-400"
                        items={result.critic.critic.follow_up_questions}
                    />

                </div>

            </SectionCard>

            {/* ==========================
                FINAL RECOMMENDATION
            ========================== */}

            <SectionCard
                icon="✅"
                title="Final Recommendation"
            >

                <div className="space-y-8">

                    <InfoBox
                        title="Summary"
                        color="text-indigo-400"
                    >
                        {result.final_answer.summary}
                    </InfoBox>

                    <InfoBox
                        title="Recommendation"
                        color="text-emerald-400"
                    >
                        {result.final_answer.recommendation}
                    </InfoBox>

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

            </SectionCard>

        </div>
    );
}

function Category({ title, color, items }) {

    return (

        <div>

            <h3 className={`text-lg font-semibold mb-3 ${color}`}>
                {title}
            </h3>

            <ul className="space-y-2">

                {items.map((item, index) => (

                    <li
                        key={index}
                        className="rounded-lg border border-slate-800 bg-slate-950/40 p-3"
                    >
                        {item}
                    </li>

                ))}

            </ul>

        </div>

    );

}

function InfoBox({ title, color, children }) {

    return (

        <div>

            <h3 className={`text-lg font-semibold mb-3 ${color}`}>
                {title}
            </h3>

            <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-5">

                <p className="leading-7 text-slate-300">
                    {children}
                </p>

            </div>

        </div>

    );

}