import { motion } from "framer-motion";

const equations = [
    "Σ",
    "π",
    "∫",
    "λ",
    "f(x)",
    "x²+y²",
    "P→Q",
    "Δ",
    "√x",
];

function FloatingEquations() {
    return (
        <>
            {equations.map((eq, index) => (

                <motion.span

                    key={index}

                    initial={{
                        opacity:0,
                        y:20
                    }}

                    animate={{
                        opacity:0.08,
                        y:[0,-20,0]
                    }}

                    transition={{
                        duration:8+index,
                        repeat:Infinity
                    }}

                    className="absolute text-4xl font-bold text-indigo-300"

                    style={{
                        top:`${10+index*8}%`,
                        left:`${5+(index*10)%80}%`
                    }}

                >

                    {eq}

                </motion.span>

            ))}
        </>
    );
}

export default FloatingEquations;