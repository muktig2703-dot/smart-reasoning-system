import NeuralNetwork from "./NeuralNetwork";

function ReasoningVisualization() {

    return (

        <div
            className="
            relative
            h-full
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            overflow-hidden
            "
        >

            <NeuralNetwork />

        </div>

    );

}

export default ReasoningVisualization;