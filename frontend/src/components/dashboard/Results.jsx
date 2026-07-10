import SectionCard from "./SectionCard";
import { motion } from "framer-motion";
import {
    Brain,
    Search,
    TriangleAlert,
    BadgeCheck
} from "lucide-react";
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.18,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};
export default function Results({ result }) {
    return (
    <motion.div
        className="mt-12 space-y-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
    >

            {/* ==========================
                REASONING PLAN
            ========================== */}

            <motion.div variants={cardVariants}>
<SectionCard
                icon={<Brain className="h-6 w-6 text-indigo-400" />}
                title="Reasoning Plan"
            >
                <div className="space-y-3">

                    {result.steps.map((step, index) => (

                        <motion.div
    key={index}
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.08 }}
                            className="
flex items-start
gap-5
rounded-2xl
border
border-slate-800
bg-gradient-to-br
from-slate-900
to-slate-950
p-6
transition-all
duration-300
hover:border-indigo-500/40
hover:-translate-y-1
hover:shadow-lg
hover:shadow-indigo-500/5
"
                        >

                            <div className="
flex
h-10
w-10
items-center
justify-center
rounded-xl
bg-indigo-500/15
border
border-indigo-500/30
text-indigo-300
font-semibold
">
                                {index + 1}
                            </div>

                            <p className="text-slate-300">
                                {step}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </SectionCard>
            </motion.div>

            {/* ==========================
                ANALYSIS
            ========================== */}

            <motion.div variants={cardVariants}>

<SectionCard
                icon={<Search className="h-6 w-6 text-sky-400" />}
                title="Analysis"
            >
                <div className="space-y-6">

                    {result.analysis.analysis.map((item, index) => (

                        <motion.div
    key={index}
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.08 }}
    className="
        rounded-2xl
        border
        border-slate-800
        bg-gradient-to-br
        from-slate-900
        to-slate-950
        p-6
        transition
        duration-300
        hover:border-sky-500/40
        hover:-translate-y-1
    "
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

                        </motion.div>

                    ))}

                </div>

            </SectionCard>
            </motion.div>

            {/* ==========================
                CRITIQUE
            ========================== */}

            <motion.div variants={cardVariants}>

<SectionCard
                icon={<TriangleAlert className="h-6 w-6 text-amber-400" />}
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
            </motion.div>

            {/* ==========================
                FINAL RECOMMENDATION
            ========================== */}

            <motion.div variants={cardVariants}>

<SectionCard
                icon={<BadgeCheck className="h-6 w-6 text-emerald-400" />}
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

                        <div className="relative w-full h-4 rounded-full bg-slate-800 overflow-hidden border border-slate-700">

                            <motion.div
    initial={{ width: 0 }}
    animate={{
        width: `${result.final_answer.confidence}%`
    }}
    transition={{
        duration: 1
    }}
    className="
        h-full
        rounded-full
        bg-gradient-to-r
        from-indigo-500
        to-violet-500
    "
/>

                        </div>

                        <p className="mt-3 text-right text-indigo-400 font-semibold">

                            {result.final_answer.confidence}%

                        </p>

                    </div>

                </div>

            </SectionCard>
        </motion.div>
        </motion.div>
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

                    <motion.li
    initial={{ opacity: 0, x: -15 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.05 }}
                        key={index}
                        className="
rounded-xl
border
border-slate-800
bg-slate-900/70
p-4
transition
duration-300
hover:border-indigo-500/40
hover:bg-slate-900
"
                    >
                        {item}
                    </motion.li>

                ))}

            </ul>

        </div>

    );

}

function InfoBox({ title, color, children }) {

    return (

        <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
>

            <h3 className={`text-lg font-semibold mb-3 ${color}`}>
                {title}
            </h3>

            <div className="
rounded-2xl
border
border-slate-800
bg-gradient-to-br
from-slate-900
to-slate-950
p-6
">

                <p className="leading-7 text-slate-300">
                    {children}
                </p>

            </div>

        </motion.div>

    );

}