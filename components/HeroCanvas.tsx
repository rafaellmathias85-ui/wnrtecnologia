"use client";

import { useEffect, useRef } from "react";

type Dot = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const activeCanvas = canvas;

    const context = activeCanvas.getContext("2d");
    if (!context) return;
    const activeContext = context;

    let frame = 0;
    let width = 0;
    let height = 0;
    let dots: Dot[] = [];
    let animationId = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = activeCanvas.clientWidth;
      height = activeCanvas.clientHeight;
      activeCanvas.width = Math.floor(width * ratio);
      activeCanvas.height = Math.floor(height * ratio);
      activeContext.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.max(30, Math.min(72, Math.floor(width / 22)));
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28
      }));
    }

    function draw() {
      frame += 1;
      activeContext.clearRect(0, 0, width, height);
      activeContext.fillStyle = "rgba(35, 215, 255, 0.7)";
      activeContext.strokeStyle = "rgba(125, 211, 252, 0.12)";

      dots.forEach((dot, index) => {
        if (!reducedMotion) {
          dot.x += dot.vx;
          dot.y += dot.vy;
          if (dot.x < 0 || dot.x > width) dot.vx *= -1;
          if (dot.y < 0 || dot.y > height) dot.vy *= -1;
        }

        activeContext.beginPath();
        activeContext.arc(dot.x, dot.y, index % 5 === 0 ? 1.8 : 1.15, 0, Math.PI * 2);
        activeContext.fill();

        for (let next = index + 1; next < dots.length; next += 1) {
          const other = dots[next];
          const distance = Math.hypot(dot.x - other.x, dot.y - other.y);
          if (distance < 128) {
            activeContext.globalAlpha = 1 - distance / 128;
            activeContext.beginPath();
            activeContext.moveTo(dot.x, dot.y);
            activeContext.lineTo(other.x, other.y);
            activeContext.stroke();
            activeContext.globalAlpha = 1;
          }
        }
      });

      if (!reducedMotion || frame < 2) {
        animationId = requestAnimationFrame(draw);
      }
    }

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="absolute inset-0 h-full w-full opacity-70" />;
}
