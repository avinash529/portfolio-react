import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { FiEye, FiDownload } from "react-icons/fi";

const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Production Projects", value: "4+" },
    { label: "Core Framework", value: "CI 3/4" },
];

export default function About() {
    return (
        <section id="about" className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-zinc-900 dark:text-white mb-12 text-center">
                        About Me
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Bio */}
                        <div>
                            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                                Over 3+ years, I've specialized in Core PHP development, mastering the <span className="font-semibold text-indigo-500">CodeIgniter</span> framework and <span className="font-semibold text-indigo-500">Laravel</span> to build scalable applications. While I have some experience in automation testing, my primary focus has been on crafting robust and efficient solutions using CodeIgniter and Laravel.
                            </p>
                            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                                This combination of skills allows me to deliver high-quality software that meets modern development standards. I'm excited to utilize my skills in advancing innovation and optimizing efficiency in back-end development initiatives.
                            </p>

                            {/* CV Actions */}
                            <div className="flex items-center gap-3 mb-6">
                                <a
                                    href="/portfolio-react/public/storage/cv/Avinash_Raju.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                >
                                    <FiEye size={14} />
                                    View CV
                                </a>
                                <a
                                    href="/portfolio-react/public/storage/cv/Avinash_Raju.pdf"
                                    download="Avinash_Raju_CV.pdf"
                                    className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 border border-indigo-300 dark:border-indigo-700 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors"
                                >
                                    <FiDownload size={14} />
                                    Download CV
                                </a>
                            </div>

                            {/* Contact Links */}
                            <div className="space-y-3">
                                <a href="tel:+917025523228" className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-indigo-500 transition-colors">
                                    <FaPhoneAlt className="text-indigo-500" />
                                    <span>+91 70255 23228</span>
                                </a>
                                <a href="mailto:avinashraju815@gmail.com" className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-indigo-500 transition-colors">
                                    <FaEnvelope className="text-indigo-500" />
                                    <span>avinashraju815@gmail.com</span>
                                </a>
                                <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                                    <FaMapMarkerAlt className="text-indigo-500" />
                                    <span>Kochi, India</span>
                                </div>
                                <a href="https://www.linkedin.com/in/avinash-raju-b8b154184/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-indigo-500 transition-colors">
                                    <FaLinkedin className="text-indigo-500" />
                                    <span>linkedin.com/in/avinash-raju</span>
                                </a>
                                <a href="https://github.com/avinash529" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-indigo-500 transition-colors">
                                    <FaGithub className="text-indigo-500" />
                                    <span>github.com/avinash529</span>
                                </a>
                            </div>
                        </div>

                        {/* Stats + Experience */}
                        <div>
                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="bg-zinc-50 dark:bg-zinc-800 rounded-2xl p-4 text-center border border-zinc-100 dark:border-zinc-700">
                                        <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stat.value}</p>
                                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Work Experience */}
                            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">Work Experience</h3>
                            <div className="space-y-4">
                                <div className="border-l-2 border-indigo-500 pl-4">
                                    <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">Nov 2024 – Aug 2025</p>
                                    <h4 className="font-bold text-zinc-900 dark:text-white">PHP Developer</h4>
                                    <p className="text-sm text-indigo-500">YUYI Technology & Management Services Pvt. Ltd.</p>
                                    <p className="text-xs text-zinc-500">Kochi, India</p>
                                </div>
                                <div className="border-l-2 border-purple-500 pl-4">
                                    <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">Apr 2022 – Oct 2024</p>
                                    <h4 className="font-bold text-zinc-900 dark:text-white">PHP Developer</h4>
                                    <p className="text-sm text-purple-500">Megatrend Knowledge Management Systems</p>
                                    <p className="text-xs text-zinc-500">Kochi, India</p>
                                </div>
                                <div className="border-l-2 border-pink-500 pl-4">
                                    <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">2022 · Internship</p>
                                    <h4 className="font-bold text-zinc-900 dark:text-white">Full Stack Web Dev (Python/Django)</h4>
                                    <p className="text-sm text-pink-500">Synnefa Solutions, Kochi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
