import './Projects.css';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

const workProjects = [
    {
        title: "Jobstars Administrative Dashboard",
        company: "YUYI Technology",
        description:
            "Built comprehensive Candidate Management and Invoice System for JOBSTARS HR SOLUTIONS PVT. LTD — a recruitment consultancy specializing in job placements across India and overseas. Streamlines candidate registration, details management and invoicing.",
        tags: ["CodeIgniter 4", "MySQL", "Bootstrap 4", "GitLab", "Linux"],
        color: "indigo",
        span: 2,
        period: "Nov 2024 – Feb 2025",
    },
    {
        title: "Will System",
        company: "Megatrend",
        description:
            "System focusing on succession planning workflows and legal frameworks for asset distribution.",
        tags: ["PHP", "CodeIgniter 4"],
        color: "purple",
        span: 1,
        period: "Apr 2023 – Oct 2024",
    },
    {
        title: "FARELABS",
        company: "Megatrend",
        description:
            "Laboratory testing platform for food products. Expert provider of testing and calibration services.",
        tags: ["PHP", "CodeIgniter 3"],
        color: "emerald",
        span: 1,
        period: "Oct 2022 – Aug 2023",
    },
    {
        title: "ELMS – Spices Board",
        company: "Megatrend",
        description:
            "Laboratory testing software for Spices Board of India, supporting registered spice exporters.",
        tags: ["PHP", "CodeIgniter 3"],
        color: "pink",
        span: 2,
        period: "Jun 2022 – Oct 2022",
    },
];

const personalProjects = [
    {
        title: "Quiz App",
        description:
            "Full-featured quiz application with user authentication, timed questions, result tracking and score analytics. Deployed live on AWS EC2.",
        tags: ["Laravel", "Blade", "MySQL", "AWS EC2"],
        github: "https://github.com/avinash529/quiz-app",
        link: "http://3.108.61.132/login",
        liveLabel: "Live on AWS",
        color: "sky",
        span: 2,
        stars: 1,
    },
    {
        title: "Code360",
        description: "A PHP-based coding / developer platform with MIT licence.",
        tags: ["PHP", "MIT License"],
        github: "https://github.com/avinash529/code360",
        color: "orange",
        span: 1,
    },
    {
        title: "Lead Management",
        description:
            "PHP-based CRM lead tracking system for managing sales leads, status updates and follow-up pipelines.",
        tags: ["PHP"],
        github: "https://github.com/avinash529/lead-management",
        color: "rose",
        span: 1,
    },
    {
        title: "Spice Basket",
        description:
            "Laravel/Blade e-commerce project for a spice brand — product catalog, cart management and order workflows.",
        tags: ["Laravel", "Blade", "MySQL"],
        github: "https://github.com/avinash529/spice-basket",
        color: "amber",
        span: 1,
    },
    {
        title: "Blog App",
        description:
            "Full-stack blog application with CRUD operations, authentication and a clean Blade-based UI.",
        tags: ["Laravel", "Blade", "MySQL"],
        github: "https://github.com/avinash529/blog-app",
        color: "teal",
        span: 1,
    },
    {
        title: "NCC & NSS Cadet Management",
        description:
            "Comprehensive platform for colleges to manage NCC and NSS cadet information.",
        tags: ["Python", "Django"],
        github: "https://github.com/avinash529",
        color: "violet",
        span: 2,
    },
    {
        title: "Farm Management System",
        description:
            "Advanced agricultural management system for planning, monitoring and managing farm activities.",
        tags: ["Python", "Django"],
        github: "https://github.com/avinash529",
        color: "green",
        span: 1,
    },
    {
        title: "Simple Pong Game",
        description: "Classic Pong game implementation in vanilla JavaScript.",
        tags: ["JavaScript", "Canvas API"],
        github: "https://github.com/avinash529/simple-pong-game",
        color: "zinc",
        span: 1,
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.08,
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    }),
};

function ProjectCard({ project, index, isWork }) {
    const firstLetter = project.title.charAt(0);

    return (
        <motion.div
            className={`project-card project-card--${project.color}${
                project.span === 2 ? ' project-card--span-2' : ''
            }`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            custom={index}
            whileHover={{ y: -5 }}
        >
            {/* Hover glow overlay */}
            <div className="project-card__glow" />

            {/* Decorative visual header */}
            <div className="project-card__visual">
                <div className="project-card__visual-grid" />
                <div className="project-card__visual-shape" />
            </div>

            {/* Top row */}
            <div className="project-card__top-row">
                <div className="project-card__top-left">
                    <div className="project-card__icon">{firstLetter}</div>
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card__github-link"
                            aria-label={`GitHub repo for ${project.title}`}
                        >
                            <FaGithub size={16} />
                        </a>
                    )}
                </div>
                <div className="project-card__top-right">
                    {project.link && (
                        <span className="project-card__live-badge">
                            <span className="project-card__live-dot" />
                            {project.liveLabel || 'Live'}
                        </span>
                    )}
                    {project.stars > 0 && (
                        <span className="project-card__stars">
                            <FaStar size={12} />
                            {project.stars}
                        </span>
                    )}
                </div>
            </div>

            {/* Meta */}
            {isWork && (
                <div className="project-card__meta">
                    <span className="project-card__period">{project.period}</span>
                    <span className="project-card__meta-dot" />
                    <span className="project-card__company">{project.company}</span>
                </div>
            )}

            {/* Title */}
            <h3 className="project-card__title">{project.title}</h3>

            {/* Description */}
            <p className="project-card__desc">{project.description}</p>

            {/* Tags */}
            <div className="project-card__tags">
                {project.tags.map((tag) => (
                    <span key={tag} className="project-card__tag">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Visit App button */}
            {project.link && (
                <div className="project-card__actions">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__visit-btn"
                    >
                        Visit App <FaExternalLinkAlt size={11} />
                    </a>
                </div>
            )}
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="projects__container">
                {/* Work Projects */}
                <motion.div
                    className="projects__header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="projects__subtitle-badge">Professional</span>
                    <h2 className="projects__title">Work Projects</h2>
                    <p className="projects__description">
                        Production applications built during full-time roles, handling real
                        users and business-critical workflows.
                    </p>
                </motion.div>

                <div className="projects__grid">
                    {workProjects.map((project, i) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={i}
                            isWork
                        />
                    ))}
                </div>

                <hr className="projects__divider" />

                {/* Personal Projects */}
                <motion.div
                    className="projects__header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="projects__subtitle-badge">Open Source</span>
                    <h2 className="projects__title">Personal Projects</h2>
                    <p className="projects__description">
                        Side projects and experiments — explore more on{' '}
                        <a
                            href="https://github.com/avinash529"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @avinash529
                        </a>
                    </p>
                </motion.div>

                <div className="projects__grid">
                    {personalProjects.map((project, i) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={i}
                            isWork={false}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
