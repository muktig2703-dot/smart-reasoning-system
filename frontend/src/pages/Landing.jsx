import AnimatedBackground from "../components/background/AnimatedBackground";
import Container from "../components/layout/Container";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Section from "../components/layout/Section";
import Hero from "../components/sections/Hero";
function Landing() {
    return (
        <>
            <AnimatedBackground />

            <Header />

            <main className="pt-28">
                 <Container>

        <Hero />

    </Container>

                <Section>

                    <Container>

                        <h1 className="max-w-4xl text-6xl font-black leading-tight">

                            AI Reasoning

                            <br />

                            Built for Intelligent Decision Making

                        </h1>

                        <p className="mt-8 max-w-2xl text-lg text-gray-400">

                            Analyze complex problems using structured
                            reasoning, multiple AI agents,
                            self-critique and explainable outputs.

                        </p>

                    </Container>

                </Section>

            </main>

            <Footer />
        </>
    );
}

export default Landing;