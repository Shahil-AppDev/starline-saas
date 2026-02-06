'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  rotation: number;
  rotationSpeed: number;
  icon: string;
  opacity: number;
}

export default function SocialMediaRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Icônes des réseaux sociaux (emojis/symboles)
    const socialIcons = ['📱', '🎬', '🎵', '⭐', '💫', '🔥', '💎', '👑', '🎯', '🚀', '💜', '🎨'];

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (): Particle => {
      return {
        x: Math.random() * canvas.width,
        y: -50,
        size: Math.random() * 40 + 30,
        speed: Math.random() * 2 + 0.8,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 3,
        icon: socialIcons[Math.floor(Math.random() * socialIcons.length)],
        opacity: Math.random() * 0.4 + 0.3,
      };
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < particleCount; i++) {
        const particle = createParticle();
        particle.y = Math.random() * canvas.height;
        particles.push(particle);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Ajouter de nouvelles particules aléatoirement
      if (Math.random() < 0.02) {
        particles.push(createParticle());
      }

      // Mettre à jour et dessiner les particules
      particles.forEach((particle, index) => {
        particle.y += particle.speed;
        particle.rotation += particle.rotationSpeed;

        // Supprimer les particules hors écran
        if (particle.y > canvas.height + 50) {
          particles.splice(index, 1);
          return;
        }

        // Dessiner la particule
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.translate(particle.x, particle.y);
        ctx.rotate((particle.rotation * Math.PI) / 180);
        ctx.font = `${particle.size}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(particle.icon, 0, 0);
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    initParticles();
    animate();

    window.addEventListener('resize', () => {
      resize();
      initParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ 
        opacity: 0.6,
        zIndex: 1
      }}
    />
  );
}
