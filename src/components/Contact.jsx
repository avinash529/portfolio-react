import './Contact.css';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const contactItems = [
    {
        label: 'Email',
        value: 'avinashraju815@gmail.com',
        href: 'mailto:avinashraju815@gmail.com',
        icon: FaEnvelope,
        variant: 'red',
    },
    {
        label: 'Phone',
        value: '+91 70255 23228',
        href: 'tel:+917025523228',
        icon: FaPhoneAlt,
        variant: 'green',
    },
    {
        label: 'LinkedIn',
        value: 'avinash-raju',
        href: 'https://www.linkedin.com/in/avinash-raju-b8b154184/',
        icon: FaLinkedin,
        variant: 'blue',
    },
    {
        label: 'GitHub',
        value: 'avinash529',
        href: 'https://github.com/avinash529',
        icon: FaGithub,
        variant: 'zinc',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.45,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    }),
};

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact__container">
                {/* Header */}
                <motion.div
                    className="contact__header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="contact__subtitle-badge">Get in Touch</span>
                    <h2 className="contact__title">Let's Connect</h2>
                    <p className="contact__description">
                        For PHP backend development, CodeIgniter/Laravel projects, or
                        full-time roles — reach out directly.
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <div className="contact__grid">
                    {contactItems.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.a
                                key={item.label}
                                className={`contact-card contact-card--${item.variant}`}
                                href={item.href}
                                target={
                                    item.label === 'LinkedIn' || item.label === 'GitHub'
                                        ? '_blank'
                                        : undefined
                                }
                                rel={
                                    item.label === 'LinkedIn' || item.label === 'GitHub'
                                        ? 'noopener noreferrer'
                                        : undefined
                                }
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-30px' }}
                                custom={i}
                                whileHover={{ y: -4 }}
                            >
                                <div className="contact-card__icon">
                                    <Icon size={20} />
                                </div>
                                <div className="contact-card__content">
                                    <span className="contact-card__label">{item.label}</span>
                                    <span className="contact-card__value">{item.value}</span>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    className="contact__cta"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <a
                        href="mailto:avinashraju815@gmail.com"
                        className="contact__cta-btn"
                    >
                        <FaEnvelope size={16} />
                        Send me an Email
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
