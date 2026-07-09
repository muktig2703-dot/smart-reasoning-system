import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReasoningVisualization
from "../background/ReasoningVisualization";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

function Hero() {
    return (
        <section className="min-h-[90vh] grid lg:grid-cols-2 items-center gap-20">

            {/* LEFT */}

            <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >

                <Badge>
                    AI Powered • Multi-Agent • Explainable
                </Badge>

                <h1 className="mt-8 text-6xl lg:text-7xl font-black leading-tight">

                    Think Better

                    <br />

                    with AI Reasoning

                </h1>

                <p className="mt-8 text-xl text-gray-400 leading-9">

                    Analyze complex problems through planning,
                    reasoning, self-critique, and explainable AI.

                    Built for students, engineers,
                    researchers and decision makers.

                </p>

                <div className="mt-10 flex gap-5">

                    <Link to="/dashboard">

                        <Button>

                            Get Started

                        </Button>

                    </Link>

                    <Link to="/login">

                        <Button variant="secondary">

                            Login

                        </Button>

                    </Link>

                </div>

            </motion.div>

            {/* RIGHT */}

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .4 }}
                className="relative h-[550px]"
            >

                <ReasoningVisualization />

            </motion.div>

        </section>
    );
}

export default Hero;