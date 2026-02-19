import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const contactLinks = [
    {
        icon: FaEnvelope,
        label: "Email",
        value: "avinashraju815@gmail.com",
        href: "mailto:avinashraju815@gmail.com",
        color: "bg-red-500/10 text-red-500",
    },
    {
        icon: FaPhoneAlt,
        label: "Phone",
        value: "+91 70255 23228",
        href: "tel:+917025523228",
        color: "bg-green-500/10 text-green-500",
    },
    {
        icon: FaLinkedin,
        label: "LinkedIn",
        value: "avinash-raju",
        href: "https://www.linkedin.com/in/avinash-raju-b8b154184/",
        color: "bg-blue-500/10 text-blue-500",
    },
    {
        icon: FaGithub,
        label: "GitHub",
        value: "avinash529",
        href: "https://github.com/avinash529",
        color: "bg-zinc-500/10 text-zinc-500 dark:text-zinc-300",
    },
];

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-zinc-50 dark:bg-zinc-950">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-zinc-900 dark:text-white mb-4">
                        Let's Connect
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-xl mx-auto">
                        For PHP backend development, CodeIgniter/Laravel projects, or full-time roles — reach out directly.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-4 mb-12">
                    {contactLinks.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel="noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="flex items-center gap-4 p-5 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all shadow-sm group"
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color} flex-shrink-0`}>
                                <item.icon size={22} />
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-0.5">{item.label}</p>
                                <p className="font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-indigo-500 transition-colors">{item.value}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <a
                        href="mailto:avinashraju815@gmail.com"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold rounded-full hover:scale-105 transition-transform"
                    >
                        <FaEnvelope />
                        Send me an Email
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
