<template>
  <div ref="container" class="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <canvas ref="canvas" class="w-full h-full"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const container = ref(null);
const canvas = ref(null);
let ctx = null;
let animationId = null;
let particles = [];
let mouseX = 0;
let mouseY = 0;

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.baseX = x;
    this.baseY = y;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2 + 1;
    this.opacity = Math.random() * 0.5 + 0.2;
    this.hue = Math.random() * 50 + 180; // Cyan to blue range
  }

  update() {
    // Mouse interaction
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = 100;

    if (distance < maxDistance) {
      const force = (maxDistance - distance) / maxDistance;
      this.x -= dx * force * 0.02;
      this.y -= dy * force * 0.02;
    }

    // Return to base position
    this.x += (this.baseX - this.x) * 0.02;
    this.y += (this.baseY - this.y) * 0.02;

    // Add some drift
    this.x += this.vx;
    this.y += this.vy;

    // Boundary check
    if (this.x < 0 || this.x > canvas.value.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.value.height) this.vy *= -1;
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = `hsl(${this.hue}, 70%, 60%)`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

const initParticles = () => {
  particles = [];
  const particleCount = Math.min(
    150,
    Math.floor((canvas.value.width * canvas.value.height) / 8000)
  );

  for (let i = 0; i < particleCount; i++) {
    particles.push(
      new Particle(
        Math.random() * canvas.value.width,
        Math.random() * canvas.value.height
      )
    );
  }
};

let connectionColor = "#1b7df5";

const drawConnections = () => {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 80) {
        ctx.save();
        ctx.globalAlpha = ((80 - distance) / 80) * 0.1;
        ctx.strokeStyle = connectionColor;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
        ctx.restore();
      }
    }
  }
};

const animate = () => {
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });

  drawConnections();
  animationId = requestAnimationFrame(animate);
};

const handleResize = () => {
  canvas.value.width = container.value.offsetWidth;
  canvas.value.height = container.value.offsetHeight;
  initParticles();
};

const handleMouseMove = (e) => {
  const rect = canvas.value.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
};

onMounted(() => {
  if (process.client) {
    ctx = canvas.value.getContext("2d");
    const accent = getComputedStyle(document.documentElement).getPropertyValue(
      "--accent-1"
    );
    if (accent) {
      connectionColor = accent.trim();
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    canvas.value.addEventListener("mousemove", handleMouseMove);

    animate();
  }
});

onUnmounted(() => {
  if (process.client) {
    if (animationId) cancelAnimationFrame(animationId);
    window.removeEventListener("resize", handleResize);
    if (canvas.value) {
      canvas.value.removeEventListener("mousemove", handleMouseMove);
    }
  }
});
</script>
