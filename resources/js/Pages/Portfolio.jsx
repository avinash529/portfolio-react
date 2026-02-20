import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Portfolio/Navbar';
import Hero from '@/Components/Portfolio/Hero';
import About from '@/Components/Portfolio/About';
import Skills from '@/Components/Portfolio/Skills';
import Projects from '@/Components/Portfolio/Projects';
import Contact from '@/Components/Portfolio/Contact';
import Footer from '@/Components/Portfolio/Footer';
import AnimatedBackground from '@/Components/Portfolio/ui/AnimatedBackground';

export default function Portfolio({ auth }) {
    return (
        <>
            <Head title="Portfolio" />

            <div className="font-sans antialiased text-gray-900 bg-gray-50 dark:bg-zinc-950 selection:bg-indigo-500 selection:text-white">
                <AnimatedBackground />
                <Navbar />

                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </main>

                <Footer />
            </div>
        </>
    );
}
