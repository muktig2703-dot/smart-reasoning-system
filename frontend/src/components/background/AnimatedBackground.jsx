import FloatingGrid from "./FloatingGrid";
import FloatingEquations from "./FloatingEquations";
import NeuralNetwork from "./NeuralNetwork";

function AnimatedBackground() {

    return (

        <div className="fixed inset-0 overflow-hidden -z-50">

            <div className="absolute inset-0 bg-[#0B0F14]" />

            <div
                className="
                absolute inset-0
                bg-[radial-gradient(circle_at_top,rgba(99,102,241,.12),transparent_55%)]
                "
            />

            <FloatingGrid />

            <FloatingEquations />

            <NeuralNetwork />

        </div>

    );

}

export default AnimatedBackground;