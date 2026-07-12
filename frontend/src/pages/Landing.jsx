import AnimatedBackground from "../components/background/AnimatedBackground";
import Container from "../components/layout/Container";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Section from "../components/layout/Section";
import Hero from "../components/sections/Hero";
import {
    Brain,
    GitBranch,
    ShieldCheck,
    Sparkles
} from "lucide-react";
function Landing() {
    return (
        <>
            <AnimatedBackground />

            <Header />

            <main className="pt-28">
                 <Container>

    <div id="home">
        <Hero />
    </div>

</Container>

                <Section className="pt-8">

    <Container>

        <div
            id="features"
            className="text-center"
        >

            <p className="text-indigo-400 font-semibold uppercase tracking-widest">
                Features
            </p>

            <h2 className="mt-4 text-5xl font-black">

                Built for Intelligent Decision Making

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">

                Smart Reasoning combines planning, reasoning,
                self-critique and explainable AI into one unified
                workspace.

            </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
                {
                    icon: Brain,
                    title: "Planning",
                    desc: "Break complex problems into manageable steps."
                },
                {
                    icon: GitBranch,
                    title: "Reasoning",
                    desc: "Analyze multiple perspectives before deciding."
                },
                {
                    icon: ShieldCheck,
                    title: "Self Critique",
                    desc: "Detect risks, assumptions and missing information."
                },
                {
                    icon: Sparkles,
                    title: "Final Answer",
                    desc: "Generate clear recommendations with confidence."
                }
            ].map((feature) => (

                <div
                    key={feature.title}
                    className="
                        rounded-3xl
                        border
                        border-slate-800
                        bg-slate-900/60
                        p-8
                        transition
                        duration-300
                        hover:-translate-y-2
                        hover:border-indigo-500/40
                    "
                >

                    <div
                        className="
                            mb-6
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-2xl
                            bg-indigo-500/10
                        "
                    >

                        <feature.icon className="h-7 w-7 text-indigo-400" />

                    </div>

                    <h3 className="text-xl font-semibold">

                        {feature.title}

                    </h3>

                    <p className="mt-4 leading-7 text-slate-400">

                        {feature.desc}

                    </p>

                </div>

            ))}

        </div>

    </Container>

</Section>

<Section>

    <Container>

        <div
            id="how-it-works"
            className="text-center"
        >

            <p className="text-indigo-400 font-semibold uppercase tracking-widest">

                Workflow

            </p>

            <h2 className="mt-4 text-5xl font-black">

                How Smart Reasoning Works

            </h2>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-4">

            {[
                "Describe your problem",
                "Planner creates strategy",
                "AI critiques its reasoning",
                "Receive final recommendation"
            ].map((step, index) => (

                <div
                    key={step}
                    className="
                        rounded-3xl
                        border
                        border-slate-800
                        bg-slate-900/60
                        p-8
                        text-center
                    "
                >

                    <div
                    id="contact"
                        className="
                            mx-auto
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-full
                            bg-indigo-600
                            text-xl
                            font-bold
                        "
                    >

                        {index + 1}

                    </div>

                    <h3 className="mt-6 text-lg font-semibold">

                        {step}

                    </h3>

                </div>

            ))}

        </div>

    </Container>

</Section>

<Section>

    <Container>

        <div
            className="
                rounded-[40px]
                border
                border-slate-800
                bg-gradient-to-br
                from-slate-900
                to-slate-950
                px-12
                py-20
                text-center
            "
        >

            <h2 className="text-5xl font-black">

                Ready to Think Smarter?

            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">

                Experience explainable AI reasoning with planning,
                critique and intelligent recommendations.

            </p>

        </div>

    </Container>

</Section>

            </main>

            <Footer />
        </>
    );
}

export default Landing;