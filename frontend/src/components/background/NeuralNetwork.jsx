import { motion } from "framer-motion";

const nodes = [
    { x: 15, y: 20 },
    { x: 45, y: 35 },
    { x: 75, y: 20 },

    { x: 25, y: 60 },
    { x: 55, y: 70 },
    { x: 85, y: 55 },
];

function NeuralNetwork() {

    return (

        <svg
            className="absolute inset-0 h-full w-full"
        >

            {nodes.map((node, index)=>

                <motion.circle

                    key={index}

                    cx={`${node.x}%`}

                    cy={`${node.y}%`}

                    r="5"

                    fill="#6366F1"

                    animate={{
                        opacity:[0.4,1,0.4],
                        r:[5,7,5]
                    }}

                    transition={{
                        duration:3,
                        repeat:Infinity
                    }}

                />

            )}

            {nodes.slice(0,-1).map((node,index)=>

                <line

                    key={index}

                    x1={`${node.x}%`}

                    y1={`${node.y}%`}

                    x2={`${nodes[index+1].x}%`}

                    y2={`${nodes[index+1].y}%`}

                    stroke="rgba(99,102,241,.25)"

                    strokeWidth="2"

                />

            )}

        </svg>

    );

}

export default NeuralNetwork;