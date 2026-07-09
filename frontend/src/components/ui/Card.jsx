import { cn } from "../../lib/utils";

function Card({

    children,

    className

}) {

    return (

        <div

            className={cn(

                "rounded-2xl",

                "border border-white/10",

                "bg-white/[0.03]",

                "backdrop-blur-md",

                "shadow-2xl",

                "transition-all duration-300",

                "hover:border-indigo-500/30",

                className

            )}

        >

            {children}

        </div>

    );

}

export default Card;