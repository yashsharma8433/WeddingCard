import React, { useEffect, useRef } from 'react';

export default function PetalsCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const petalCount = window.innerWidth < 768 ? 22 : 40;
    const petals = [];

    const petalColors = [
      { fill: 'rgba(215, 65, 85, 0.82)', stroke: 'rgba(180, 40, 60, 0.35)' },
      { fill: 'rgba(235, 105, 125, 0.78)', stroke: 'rgba(200, 70, 90, 0.35)' },
      { fill: 'rgba(245, 175, 45, 0.85)', stroke: 'rgba(205, 130, 20, 0.35)' },
      { fill: 'rgba(255, 205, 75, 0.80)', stroke: 'rgba(220, 160, 30, 0.35)' },
      { fill: 'rgba(255, 150, 120, 0.75)', stroke: 'rgba(220, 110, 80, 0.35)' }
    ];

    class Petal {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : -20 - Math.random() * 40;
        this.size = 8 + Math.random() * 10;
        this.speedY = 1.0 + Math.random() * 1.5;
        this.speedX = -0.5 + Math.random() * 1.0;
        this.angle = Math.random() * Math.PI * 2;
        this.spin = -0.02 + Math.random() * 0.04;
        this.flip = Math.random() * Math.PI;
        this.flipSpeed = 0.015 + Math.random() * 0.025;
        this.color = petalColors[Math.floor(Math.random() * petalColors.length)];
        this.oscillationSpeed = 0.01 + Math.random() * 0.02;
        this.oscillationDist = 0.8 + Math.random() * 1.4;
      }

      update() {
        this.y += this.speedY;
        this.x += Math.sin(this.y * this.oscillationSpeed) * this.oscillationDist + this.speedX;
        this.angle += this.spin;
        this.flip += this.flipSpeed;

        if (this.y > height + 25 || this.x < -30 || this.x > width + 30) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.scale(1, Math.cos(this.flip));

        ctx.beginPath();
        ctx.moveTo(0, -this.size);
        ctx.bezierCurveTo(this.size * 0.7, -this.size * 0.7, this.size * 0.9, this.size * 0.4, 0, this.size);
        ctx.bezierCurveTo(-this.size * 0.9, this.size * 0.4, -this.size * 0.7, -this.size * 0.7, 0, -this.size);
        ctx.closePath();

        ctx.fillStyle = this.color.fill;
        ctx.fill();

        ctx.strokeStyle = this.color.stroke;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        ctx.restore();
      }
    }

    for (let i = 0; i < petalCount; i++) {
      petals.push(new Petal());
    }

    let animId;
    function animate() {
      ctx.clearRect(0, 0, width, height);
      petals.forEach(p => {
        p.update();
        p.draw();
      });
      animId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="petals-canvas" aria-hidden="true" />;
}
