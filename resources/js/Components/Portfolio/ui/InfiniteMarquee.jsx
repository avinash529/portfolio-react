import { motion } from "framer-motion";

export default function InfiniteMarquee({
    children,
    speed = 20,
    direction = "left",
    pauseOnHover = true,
    className = "",
}) {
    const containerVariants = {
        animate: {
            x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: speed,
                    ease: "linear",
                },
            },
        },
    };

    return (
        <div className={`overflow-hidden w-full ${className}`}>
            <motion.div
                className="flex w-max"
                variants={containerVariants}
                animate="animate"
            >
                {/* Double the children to create seamless loop */}
                <div className="flex gap-8 px-4 flex-nowrap">
                    {children}
                </div>
                <div className="flex gap-8 px-4 flex-nowrap">
                    {children}
                </div>
            </motion.div>
        </div>
    );
}
