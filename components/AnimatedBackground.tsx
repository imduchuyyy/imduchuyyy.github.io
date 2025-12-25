"use client";

import { useEffect, useRef } from "react";

interface ShootingStar {
    id: number;
    x: number;
    y: number;
    angle: number;
    scale: number;
    speed: number;
    distance: number;
}

interface Star {
    x: number;
    y: number;
    scale: number;
    opacity: number;
}

export function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];
        const shootingStars: ShootingStar[] = [];
        let w = 0;
        let h = 0;

        const resize = () => {
            w = window.innerWidth;
            h = window.innerHeight;
            canvas.width = w;
            canvas.height = h;
            initStars();
        };

        const initStars = () => {
            stars = [];
            const numStars = Math.floor((w * h) / 3000); // Density
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    scale: Math.random() * 0.5 + 0.5,
                    opacity: Math.random(),
                });
            }
        };

        const createShootingStar = () => {
            const startX = Math.random() * w;
            const startY = Math.random() * h * 0.5; // Start from top half usually
            const angle = Math.PI / 4; // 45 degrees

            const star: ShootingStar = {
                id: Date.now() + Math.random(),
                x: startX,
                y: startY,
                angle,
                scale: 1,
                speed: Math.random() * 10 + 10,
                distance: 0,
            };

            shootingStars.push(star);
        };

        const draw = () => {
            if (!ctx || !canvas) return; // Null check inside loop

            // Clear with transparent black to leave trails (optional, but keeping simple here)
            ctx.clearRect(0, 0, w, h);

            // Draw static stars
            stars.forEach((star) => {
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.scale, 0, Math.PI * 2);
                ctx.fill();
            });

            // Update and draw shooting stars
            for (let i = shootingStars.length - 1; i >= 0; i--) {
                const star = shootingStars[i];

                // Move
                star.x += star.speed * Math.cos(star.angle);
                star.y += star.speed * Math.sin(star.angle);
                star.distance += star.speed;

                // Draw trail
                const tailLength = 150;
                const gradient = ctx.createLinearGradient(
                    star.x,
                    star.y,
                    star.x - tailLength * Math.cos(star.angle),
                    star.y - tailLength * Math.sin(star.angle)
                );
                gradient.addColorStop(0, "rgba(99, 102, 241, 1)"); // Primary color (indigo)
                gradient.addColorStop(1, "rgba(99, 102, 241, 0)");

                ctx.strokeStyle = gradient;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(star.x, star.y);
                ctx.lineTo(star.x - tailLength * Math.cos(star.angle), star.y - tailLength * Math.sin(star.angle));
                ctx.stroke();

                // Glow
                ctx.fillStyle = "rgba(99, 102, 241, 0.8)";
                ctx.beginPath();
                ctx.arc(star.x, star.y, 1, 0, Math.PI * 2);
                ctx.fill();

                // Remove if out of bounds or travelled too far
                if (star.x > w + 100 || star.y > h + 100 || star.distance > 800) {
                    shootingStars.splice(i, 1);
                }
            }

            // Randomly spawn shooting star
            if (Math.random() < 0.02) { // Adjust probability
                createShootingStar();
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener("resize", resize);
        resize();
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] pointer-events-none bg-background transition-colors duration-300"
        />
    );
}
