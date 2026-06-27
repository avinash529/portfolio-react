import React, { useEffect, useRef, useState, useCallback, memo } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/* ─── Orb configurations ────────────────────────────────── */
const lightOrbs = [
  {
    gradient: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
    size: 600,
    top: '-10%',
    left: '-5%',
    depth: 0.02,
    duration: 20,
  },
  {
    gradient: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)',
    size: 500,
    top: '20%',
    right: '-10%',
    depth: 0.03,
    duration: 25,
  },
  {
    gradient: 'radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)',
    size: 450,
    bottom: '10%',
    left: '20%',
    depth: 0.015,
    duration: 22,
  },
  {
    gradient: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)',
    size: 350,
    top: '50%',
    right: '20%',
    depth: 0.025,
    duration: 18,
  },
  {
    gradient: 'radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)',
    size: 400,
    bottom: '-5%',
    right: '-5%',
    depth: 0.02,
    duration: 23,
  },
];

const darkOrbs = [
  {
    gradient: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
    size: 600,
    top: '-10%',
    left: '-5%',
    depth: 0.02,
    duration: 20,
  },
  {
    gradient: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
    size: 500,
    top: '20%',
    right: '-10%',
    depth: 0.03,
    duration: 25,
  },
  {
    gradient: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)',
    size: 450,
    bottom: '10%',
    left: '20%',
    depth: 0.015,
    duration: 22,
  },
  {
    gradient: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
    size: 350,
    top: '50%',
    right: '20%',
    depth: 0.025,
    duration: 18,
  },
  {
    gradient: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
    size: 400,
    bottom: '-5%',
    right: '-5%',
    depth: 0.02,
    duration: 23,
  },
];

/* ─── Orb component ─────────────────────────────────────── */
const Orb = memo(({ config, index, mouseX, mouseY }) => {
  const springConfig = { damping: 50, stiffness: 100 };
  const x = useSpring(useMotionValue(0), springConfig);
  const y = useSpring(useMotionValue(0), springConfig);

  useEffect(() => {
    const unsubX = mouseX.on('change', (latest) => {
      x.set(latest * config.depth);
    });
    const unsubY = mouseY.on('change', (latest) => {
      y.set(latest * config.depth);
    });
    return () => {
      unsubX();
      unsubY();
    };
  }, [mouseX, mouseY, config.depth, x, y]);

  const style = {
    position: 'absolute',
    borderRadius: '50%',
    background: config.gradient,
    width: config.size,
    height: config.size,
    top: config.top,
    left: config.left,
    right: config.right,
    bottom: config.bottom,
    animation: `orbFloat${(index % 5) + 1} ${config.duration}s ease-in-out infinite`,
    willChange: 'transform',
    pointerEvents: 'none',
  };

  return <motion.div style={{ ...style, x, y }} />;
});

Orb.displayName = 'Orb';

/* ─── Shooting Stars (dark mode) ────────────────────────── */
const ShootingStars = memo(() => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let stars = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Star {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 0.5;
        this.length = Math.random() * 80 + 20;
        this.speed = Math.random() * 3 + 2;
        this.opacity = 0;
        this.fadeSpeed = Math.random() * 0.02 + 0.005;
        this.angle = (Math.PI / 4) + (Math.random() * 0.2 - 0.1);
        this.active = false;
        this.activateDelay = Math.random() * 10000;
        this.startTime = Date.now();
      }
      update() {
        if (!this.active) {
          if (Date.now() - this.startTime > this.activateDelay) {
            this.active = true;
          }
          return;
        }
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        if (this.opacity < 1) {
          this.opacity += this.fadeSpeed * 2;
        }
        if (
          this.x > canvas.width + 100 ||
          this.y > canvas.height + 100
        ) {
          this.reset();
        }
      }
      draw(ctx) {
        if (!this.active) return;
        const tailX = this.x - Math.cos(this.angle) * this.length;
        const tailY = this.y - Math.sin(this.angle) * this.length;
        const gradient = ctx.createLinearGradient(tailX, tailY, this.x, this.y);
        gradient.addColorStop(0, `rgba(99, 102, 241, 0)`);
        gradient.addColorStop(0.5, `rgba(139, 92, 246, ${this.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(236, 72, 153, ${this.opacity})`);
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    }

    for (let i = 0; i < 5; i++) {
      stars.push(new Star());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.update();
        star.draw(ctx);
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
});

ShootingStars.displayName = 'ShootingStars';

/* ─── Floating Dots (light mode) ────────────────────────── */
const FloatingDots = memo(() => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let dots = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Dot {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.color = [
          'rgba(99, 102, 241,',
          'rgba(168, 85, 247,',
          'rgba(236, 72, 153,',
        ][Math.floor(Math.random() * 3)];
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color} ${this.opacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 50; i++) {
      dots.push(new Dot());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((dot) => {
        dot.update();
        dot.draw(ctx);
      });

      // Draw connections
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.05 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
});

FloatingDots.displayName = 'FloatingDots';

/* ─── Keyframe styles ───────────────────────────────────── */
const keyframeStyles = `
@keyframes orbFloat1 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -30px) rotate(5deg); }
  66% { transform: translate(-20px, 20px) rotate(-3deg); }
}
@keyframes orbFloat2 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(-25px, 35px) rotate(-5deg); }
  66% { transform: translate(35px, -15px) rotate(3deg); }
}
@keyframes orbFloat3 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(40px, 25px); }
}
@keyframes orbFloat4 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(-30px, -20px) rotate(4deg); }
  75% { transform: translate(20px, 30px) rotate(-4deg); }
}
@keyframes orbFloat5 {
  0%, 100% { transform: translate(0, 0); }
  40% { transform: translate(-35px, 20px); }
  80% { transform: translate(25px, -35px); }
}
`;

/* ─── Main Component ────────────────────────────────────── */
const AnimatedBackground = () => {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains('dark')
  );
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Observe dark mode changes
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'));
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  // Track mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const orbs = isDark ? darkOrbs : lightOrbs;

  return (
    <>
      <style>{keyframeStyles}</style>

      {/* Orb layer */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        {orbs.map((orb, i) => (
          <Orb
            key={`${isDark ? 'dark' : 'light'}-${i}`}
            config={orb}
            index={i}
            mouseX={mouseX}
            mouseY={mouseY}
          />
        ))}
      </div>

      {/* Canvas effects */}
      {isDark ? <ShootingStars /> : <FloatingDots />}
    </>
  );
};

export default AnimatedBackground;
