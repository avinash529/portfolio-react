import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/* ─────── Orb configs ─────── */
const lightOrbs = [
    { id: 1, size: 560, color: "radial-gradient(circle, rgba(99,102,241,0.22) 0%, rgba(139,92,246,0.12) 50%, transparent 70%)", baseX: "8%", baseY: "6%", depth: 0.04, dur: 18, delay: 0 },
    { id: 2, size: 440, color: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, rgba(236,72,153,0.10) 50%, transparent 70%)", baseX: "63%", baseY: "4%", depth: 0.06, dur: 22, delay: -6 },
    { id: 3, size: 400, color: "radial-gradient(circle, rgba(59,130,246,0.16) 0%, rgba(99,102,241,0.09) 50%, transparent 70%)", baseX: "38%", baseY: "52%", depth: 0.03, dur: 26, delay: -12 },
    { id: 4, size: 320, color: "radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.08) 50%, transparent 70%)", baseX: "76%", baseY: "58%", depth: 0.07, dur: 20, delay: -4 },
    { id: 5, size: 280, color: "radial-gradient(circle, rgba(16,185,129,0.13) 0%, rgba(59,130,246,0.07) 50%, transparent 70%)", baseX: "4%", baseY: "68%", depth: 0.05, dur: 24, delay: -9 },
];

const darkOrbs = [
    { id: 1, size: 600, color: "radial-gradient(circle, rgba(99,102,241,0.14) 0%, rgba(139,92,246,0.07) 50%, transparent 70%)", baseX: "5%", baseY: "5%", depth: 0.035, dur: 20, delay: 0 },
    { id: 2, size: 480, color: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, rgba(59,130,246,0.06) 50%, transparent 70%)", baseX: "60%", baseY: "3%", depth: 0.055, dur: 24, delay: -7 },
    { id: 3, size: 420, color: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, rgba(99,102,241,0.06) 50%, transparent 70%)", baseX: "35%", baseY: "50%", depth: 0.025, dur: 28, delay: -14 },
    { id: 4, size: 340, color: "radial-gradient(circle, rgba(244,63,94,0.10) 0%, rgba(168,85,247,0.05) 50%, transparent 70%)", baseX: "74%", baseY: "56%", depth: 0.065, dur: 22, delay: -5 },
    { id: 5, size: 300, color: "radial-gradient(circle, rgba(20,184,166,0.10) 0%, rgba(6,182,212,0.05) 50%, transparent 70%)", baseX: "2%", baseY: "65%", depth: 0.045, dur: 26, delay: -10 },
];

/* ─────── Single parallax orb ─────── */
function Orb({ orb, mouseX, mouseY }) {
    const springCfg = { stiffness: 60, damping: 20, mass: 1.2 };
    const sx = useSpring(useMotionValue(0), springCfg);
    const sy = useSpring(useMotionValue(0), springCfg);
    const sxRef = useRef(sx);
    const syRef = useRef(sy);

    useEffect(() => {
        sxRef.current = sx;
        syRef.current = sy;
    }, [sx, sy]);

    useEffect(() => {
        const unX = mouseX.on("change", (v) => sxRef.current.set(v * orb.depth * window.innerWidth));
        const unY = mouseY.on("change", (v) => syRef.current.set(v * orb.depth * window.innerHeight));
        return () => { unX(); unY(); };
    }, [mouseX, mouseY, orb.depth]);

    return (
        <motion.div
            style={{
                position: "absolute",
                width: orb.size,
                height: orb.size,
                left: orb.baseX,
                top: orb.baseY,
                background: orb.color,
                borderRadius: "50%",
                filter: "blur(56px)",
                x: sx,
                y: sy,
                animationName: `orbFloat${orb.id}`,
                animationDuration: `${orb.dur}s`,
                animationDelay: `${orb.delay}s`,
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                willChange: "transform",
                pointerEvents: "none",
            }}
        />
    );
}

/* ─────── Shooting stars (canvas) ─────── */
const STAR_COLORS = [
    [99, 102, 241],   // indigo
    [139, 92, 246],   // violet
    [6, 182, 212],    // cyan
    [168, 85, 247],   // purple
    [255, 255, 255],  // white
];

function ShootingStars() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let animId;
        let stars = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const spawnStar = () => {
            const [r, g, b] = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
            // Start from top-right quadrant, travel down-left
            const startX = -20 + Math.random() * canvas.width * 0.6;  // spawn left side
            const startY = -20 + Math.random() * canvas.height * 0.35;
            const speed = 4 + Math.random() * 3;
            const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.4; // ~45° → upper-left to lower-right

            stars.push({
                x: startX,
                y: startY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                length: 90 + Math.random() * 130,
                maxLife: 55 + Math.random() * 35,
                life: 0,
                r, g, b,
                width: 0.6 + Math.random() * 1.2,
            });
        };

        // Initial burst then steady spawns
        setTimeout(spawnStar, 600);
        setTimeout(spawnStar, 1800);
        const interval = setInterval(() => {
            if (Math.random() > 0.3) spawnStar();          // sometimes spawn 1
            if (Math.random() > 0.75) spawnStar();          // occasionally spawn 2
        }, 1800 + Math.random() * 1200);

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars = stars.filter((s) => s.life < s.maxLife);

            for (const s of stars) {
                s.life++;
                s.x += s.vx;
                s.y += s.vy;

                const t = s.life / s.maxLife;
                // Ease in then fade out
                const alpha = t < 0.2 ? t / 0.2 : 1 - (t - 0.2) / 0.8;

                const steps = Math.floor(s.length / 4);
                const tailX = s.x - s.vx * steps;
                const tailY = s.y - s.vy * steps;

                // Gradient tail
                const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
                grad.addColorStop(0, `rgba(${s.r},${s.g},${s.b},0)`);
                grad.addColorStop(0.7, `rgba(${s.r},${s.g},${s.b},${alpha * 0.55})`);
                grad.addColorStop(1, `rgba(${s.r},${s.g},${s.b},${alpha})`);

                ctx.save();
                ctx.beginPath();
                ctx.moveTo(tailX, tailY);
                ctx.lineTo(s.x, s.y);
                ctx.strokeStyle = grad;
                ctx.lineWidth = s.width;
                ctx.lineCap = "round";
                ctx.stroke();

                // Glowing head
                const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 4);
                glow.addColorStop(0, `rgba(${s.r},${s.g},${s.b},${alpha})`);
                glow.addColorStop(0.5, `rgba(${s.r},${s.g},${s.b},${alpha * 0.4})`);
                glow.addColorStop(1, `rgba(${s.r},${s.g},${s.b},0)`);
                ctx.fillStyle = glow;
                ctx.beginPath();
                ctx.arc(s.x, s.y, 4, 0, Math.PI * 2);
                ctx.fill();

                // Extra soft outer glow
                const outer = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 10);
                outer.addColorStop(0, `rgba(${s.r},${s.g},${s.b},${alpha * 0.15})`);
                outer.addColorStop(1, `rgba(${s.r},${s.g},${s.b},0)`);
                ctx.fillStyle = outer;
                ctx.beginPath();
                ctx.arc(s.x, s.y, 10, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
            }

            animId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animId);
            clearInterval(interval);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 1,
                pointerEvents: "none",
            }}
        />
    );
}

/* ─────── Light theme: soft floating dots ─────── */
function FloatingDots() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let animId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const COLORS = [
            [99, 102, 241],   // indigo
            [139, 92, 246],   // violet
            [236, 72, 153],   // pink
            [59, 130, 246],   // blue
            [16, 185, 129],   // emerald
        ];

        const count = Math.max(Math.floor((canvas.width * canvas.height) / 18000), 18);
        const dots = Array.from({ length: count }, () => {
            const [r, g, b] = COLORS[Math.floor(Math.random() * COLORS.length)];
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: 4 + Math.random() * 9,
                vx: (Math.random() - 0.5) * 0.25,
                vy: -0.12 - Math.random() * 0.28,   // drift upward
                baseAlpha: 0.06 + Math.random() * 0.09,
                pulsePhase: Math.random() * Math.PI * 2,
                pulseSpeed: 0.006 + Math.random() * 0.010,
                r, g, b,
            };
        });

        let frame = 0;
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            frame++;

            for (const d of dots) {
                d.x += d.vx;
                d.y += d.vy;

                // wrap edges
                if (d.y + d.radius < 0) d.y = canvas.height + d.radius;
                if (d.x + d.radius < 0) d.x = canvas.width + d.radius;
                if (d.x - d.radius > canvas.width) d.x = -d.radius;

                const pulse = Math.sin(frame * d.pulseSpeed + d.pulsePhase);
                const a = d.baseAlpha * (0.65 + 0.35 * pulse);

                // soft glow halo
                const grd = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.radius * 2.8);
                grd.addColorStop(0, `rgba(${d.r},${d.g},${d.b},${a})`);
                grd.addColorStop(0.5, `rgba(${d.r},${d.g},${d.b},${a * 0.35})`);
                grd.addColorStop(1, `rgba(${d.r},${d.g},${d.b},0)`);
                ctx.beginPath();
                ctx.arc(d.x, d.y, d.radius * 2.8, 0, Math.PI * 2);
                ctx.fillStyle = grd;
                ctx.fill();

                // solid centre pip
                ctx.beginPath();
                ctx.arc(d.x, d.y, d.radius * 0.35, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${d.r},${d.g},${d.b},${a * 1.5})`;
                ctx.fill();
            }

            animId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
        />
    );
}

export default function AnimatedBackground() {
    const [mounted, setMounted] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        // Read initial state
        setIsDark(document.documentElement.classList.contains("dark"));
        setMounted(true);

        // Watch for theme changes
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains("dark"));
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        // Mouse tracking
        const onMove = (e) => {
            mouseX.set((e.clientX / window.innerWidth) - 0.5);
            mouseY.set((e.clientY / window.innerHeight) - 0.5);
        };
        window.addEventListener("mousemove", onMove);

        return () => {
            observer.disconnect();
            window.removeEventListener("mousemove", onMove);
        };
    }, [mouseX, mouseY]);

    if (!mounted) return null;

    const orbs = isDark ? darkOrbs : lightOrbs;

    return (
        <>
            <style>{`
                @keyframes orbFloat1 {
                    0%   { transform: translate(0px, 0px) scale(1);    }
                    25%  { transform: translate(40px,-30px) scale(1.05); }
                    50%  { transform: translate(20px, 50px) scale(0.97); }
                    75%  { transform: translate(-30px,20px) scale(1.03); }
                    100% { transform: translate(0px, 0px) scale(1);    }
                }
                @keyframes orbFloat2 {
                    0%   { transform: translate(0px, 0px) scale(1);    }
                    30%  { transform: translate(-50px,40px) scale(1.06); }
                    60%  { transform: translate(30px,-20px) scale(0.96); }
                    100% { transform: translate(0px, 0px) scale(1);    }
                }
                @keyframes orbFloat3 {
                    0%   { transform: translate(0px, 0px) scale(1);      }
                    20%  { transform: translate(60px, 30px) scale(1.04);  }
                    55%  { transform: translate(-20px,60px) scale(0.98);  }
                    80%  { transform: translate(-40px,-30px) scale(1.02); }
                    100% { transform: translate(0px, 0px) scale(1);      }
                }
                @keyframes orbFloat4 {
                    0%   { transform: translate(0px, 0px) scale(1);      }
                    35%  { transform: translate(-35px,-50px) scale(1.07); }
                    70%  { transform: translate(45px, 25px) scale(0.95);  }
                    100% { transform: translate(0px, 0px) scale(1);      }
                }
                @keyframes orbFloat5 {
                    0%   { transform: translate(0px, 0px) scale(1);    }
                    40%  { transform: translate(50px,-40px) scale(1.05); }
                    75%  { transform: translate(-30px,50px) scale(0.97); }
                    100% { transform: translate(0px, 0px) scale(1);    }
                }
            `}</style>

            {/* Orb layer */}
            <div
                aria-hidden="true"
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: "none",
                    overflow: "hidden",
                }}
            >
                {orbs.map((orb) => (
                    <Orb key={orb.id} orb={orb} mouseX={mouseX} mouseY={mouseY} />
                ))}
            </div>

            {/* Shooting stars — dark mode only */}
            {isDark && <ShootingStars />}

            {/* Floating dots — light mode only */}
            {!isDark && <FloatingDots />}
        </>
    );
}
