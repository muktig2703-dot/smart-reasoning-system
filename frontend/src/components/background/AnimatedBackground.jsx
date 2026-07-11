import FloatingGrid from "./FloatingGrid";
import FloatingEquations from "./FloatingEquations";
import NeuralNetwork from "./NeuralNetwork";

function AnimatedBackground() {

    return (

        <div className="fixed inset-0 overflow-hidden -z-50">

            <div className="absolute inset-0 bg-[#0B0F14]" />

            <div
    className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_top,rgba(99,102,241,.16),transparent_55%)]
    "
/>

<div
    className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_bottom_right,rgba(139,92,246,.10),transparent_45%)]
    "
/>

<div
    className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_left_center,rgba(6,182,212,.08),transparent_45%)]
    "
/>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#05070C]/70" />

            <FloatingGrid />

            <FloatingEquations />

            <NeuralNetwork />

        </div>

    );

}

export default AnimatedBackground;