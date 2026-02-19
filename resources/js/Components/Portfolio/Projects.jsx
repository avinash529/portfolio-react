import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const workProjects = [
    {
        title: "Jobstars Administrative Dashboard",
        company: "YUYI Technology",
        description: "Built comprehensive Candidate Management and Invoice System for JOBSTARS HR SOLUTIONS PVT. LTD — a recruitment consultancy specializing in job placements across India and overseas. Streamlines candidate registration, details management and invoicing.",
        tags: ["CodeIgniter 4", "MySQL", "Bootstrap 4", "GitLab", "Linux"],
        color: "from-indigo-500 to-indigo-700",
        badge: "bg-indigo-500",
        className: "md:col-span-2",
        period: "Nov 2024 – Feb 2025",
    },
    {
        title: "Will System",
        company: "Megatrend",
        description: "System focusing on succession planning workflows and legal frameworks for asset distribution. Covers statutory procedures and implications across various jurisdictions.",
        tags: ["PHP", "CodeIgniter 4"],
        color: "from-purple-500 to-purple-700",
        badge: "bg-purple-500",
        className: "md:col-span-1",
        period: "Apr 2023 – Oct 2024",
    },
    {
        title: "FARELABS",
        company: "Megatrend",
        description: "Laboratory testing platform for food products. Expert provider of testing and calibration services, ensuring adherence to rigorous quality and regulatory standards.",
        tags: ["PHP", "CodeIgniter 3"],
        color: "from-emerald-500 to-emerald-700",
        badge: "bg-emerald-500",
        className: "md:col-span-1",
        period: "Oct 2022 – Aug 2023",
    },
    {
        title: "ELMS – Spices Board",
        company: "Megatrend",
        description: "Laboratory testing software for Spices Board of India, supporting registered spice exporters and institutions for spice quality control and export compliance workflows.",
        tags: ["PHP", "CodeIgniter 3"],
        color: "from-pink-500 to-pink-700",
        badge: "bg-pink-500",
        className: "md:col-span-2",
        period: "Jun 2022 – Oct 2022",
    },
];

const personalProjects = [
    {
        title: "Quiz App",
        description: "Full-featured quiz application with user authentication, timed questions, result tracking and score analytics. Deployed live on AWS EC2.",
        tags: ["Laravel", "Blade", "MySQL", "AWS EC2"],
        github: "https://github.com/avinash529/quiz-app",
        link: "http://3.108.61.132/login",
        liveLabel: "Live on AWS",
        color: "from-sky-500 to-sky-700",
        badge: "bg-sky-500",
        className: "md:col-span-2",
        stars: 1,
    },
    {
        title: "Code360",
        description: "A PHP-based coding / developer platform with MIT licence. Multi-feature backend-driven application built with PHP.",
        tags: ["PHP", "MIT License"],
        github: "https://github.com/avinash529/code360",
        color: "from-orange-500 to-orange-700",
        badge: "bg-orange-500",
        className: "md:col-span-1",
    },
    {
        title: "Lead Management",
        description: "PHP-based CRM lead tracking system for managing sales leads, status updates and follow-up pipelines.",
        tags: ["PHP"],
        github: "https://github.com/avinash529/lead-management",
        color: "from-rose-500 to-rose-700",
        badge: "bg-rose-500",
        className: "md:col-span-1",
    },
    {
        title: "Spice Basket",
        description: "Laravel/Blade e-commerce project for a spice brand — product catalog, cart management and order workflows.",
        tags: ["Laravel", "Blade", "MySQL"],
        github: "https://github.com/avinash529/spice-basket",
        color: "from-amber-500 to-amber-700",
        badge: "bg-amber-500",
        className: "md:col-span-1",
    },
    {
        title: "Blog App",
        description: "Full-stack blog application with CRUD operations, authentication and a clean Blade-based UI.",
        tags: ["Laravel", "Blade", "MySQL"],
        github: "https://github.com/avinash529/blog-app",
        color: "from-teal-500 to-teal-700",
        badge: "bg-teal-500",
        className: "md:col-span-1",
    },
    {
        title: "NCC & NSS Cadet Management",
        description: "Comprehensive platform for colleges to manage NCC and NSS cadet information. Streamlines communication, attendance and real-time announcements.",
        tags: ["Python", "Django"],
        github: "https://github.com/avinash529",
        color: "from-violet-500 to-violet-700",
        badge: "bg-violet-500",
        className: "md:col-span-2",
    },
    {
        title: "Farm Management System",
        description: "Advanced agricultural management system for planning, monitoring and managing farm activities including crop and livestock management, inventory control and field mapping.",
        tags: ["Python", "Django"],
        github: "https://github.com/avinash529",
        color: "from-green-500 to-green-700",
        badge: "bg-green-500",
        className: "md:col-span-1",
    },
    {
        title: "Simple Pong Game",
        description: "Classic Pong game implementation in vanilla JavaScript, showcasing game loop, collision detection and canvas rendering fundamentals.",
        tags: ["JavaScript", "Canvas API"],
        github: "https://github.com/avinash529/simple-pong-game",
        color: "from-zinc-500 to-zinc-700",
        badge: "bg-zinc-500",
        className: "md:col-span-1",
    },
];

function ProjectCard({ project }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className={`group relative overflow-hidden rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-7 flex flex-col justify-between ${project.className}`}
        >
            {/* Hover glow */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br pointer-events-none ${project.color}`} />

            <div>
                <div className="flex justify-between items-start mb-5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-lg bg-gradient-to-br ${project.color}`}>
                        {project.title.charAt(0)}
                    </div>
                    <div className="flex items-center gap-3">
                        {project.stars > 0 && (
                            <span className="text-xs text-amber-500 font-semibold">★ {project.stars}</span>
                        )}
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noreferrer"
                                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 hover:bg-green-500/20 transition-colors">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                                </span>
                                {project.liveLabel || "Live Demo"}
                            </a>
                        )}
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                                <FaGithub size={19} />
                            </a>
                        )}
                    </div>
                </div>

                {project.period && (
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-1">{project.period}</p>
                )}
                {project.company && (
                    <p className="text-xs font-semibold text-indigo-500 mb-2">{project.company}</p>
                )}

                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">{project.description}</p>

                {/* Prominent live link button */}
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 mb-5 px-4 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white text-sm font-semibold transition-colors shadow-md shadow-green-500/30 w-fit"
                    >
                        <FaExternalLinkAlt size={12} />
                        Visit App
                    </a>
                )}
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-lg border border-zinc-200 dark:border-zinc-700">
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-white dark:bg-zinc-950">
            <div className="container mx-auto px-6">

                {/* Work Projects */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <span className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-2 block">Professional</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-zinc-900 dark:text-white mb-3">Work Projects</h2>
                    <p className="text-zinc-500 dark:text-zinc-400 text-lg">Production systems built during my professional career.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
                    {workProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>

                {/* Personal / GitHub Projects */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <span className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-2 block">Open Source</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-zinc-900 dark:text-white mb-3">Personal Projects</h2>
                    <p className="text-zinc-500 dark:text-zinc-400 text-lg">
                        Side projects & open source work on{" "}
                        <a href="https://github.com/avinash529" target="_blank" rel="noreferrer" className="text-indigo-500 hover:underline font-semibold">@avinash529</a>.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {personalProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>

            </div>
        </section>
    );
}
