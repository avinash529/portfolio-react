import { motion } from "framer-motion";
import InfiniteMarquee from "./ui/InfiniteMarquee";

const skills = [
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
    { name: "CodeIgniter 4", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg" },
    { name: "CodeIgniter 3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg" },
    { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "MSSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    { name: "SVN", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/subversion/subversion-original.svg" },
    { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-transparent border-t border-zinc-200 dark:border-zinc-800">
            <div className="container mx-auto px-6 mb-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold font-display text-zinc-900 dark:text-white mb-4"
                >
                    Technologies
                </motion.h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                    Core technologies I use for building backend-heavy web applications and modern interfaces.
                </p>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* Gradient fades */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white/0 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white/0 to-transparent z-10 pointer-events-none" />

                <InfiniteMarquee speed={40}>
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 px-5 py-3 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700 transition-all cursor-default"
                        >
                            <img
                                src={skill.logo}
                                alt={skill.name}
                                className="w-7 h-7 object-contain"
                                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                            />
                            <span className="font-semibold text-zinc-700 dark:text-zinc-200 whitespace-nowrap text-sm">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </InfiniteMarquee>
            </div>
        </section>
    );
}
