import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Spotlight from "./ui/Spotlight";

export default function Hero() {
    return (
        <div id="hero" className="relative w-full min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Radial mask for depth */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-zinc-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className="container relative z-10 px-6 mx-auto">
                <div className="flex flex-col items-center text-center">

                    <div className="relative">
                        <Spotlight />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-8">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                                    Open to PHP Developer opportunities
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-8xl font-bold font-display text-zinc-900 dark:text-white tracking-tight leading-none mb-4">
                                Avinash Raju
                            </h1>

                            <p className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-6">
                                PHP Developer
                            </p>
                        </motion.div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-2xl text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed"
                    >
                        3+ years specializing in PHP & CodeIgniter, building scalable backend systems and modern full-stack applications. Based in Kochi, India.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold rounded-full hover:scale-105 transition-transform cursor-pointer"
                        >
                            See My Work
                        </Link>
                        <a
                            href="mailto:avinashraju815@gmail.com"
                            className="px-8 py-4 bg-transparent border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white font-semibold rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
