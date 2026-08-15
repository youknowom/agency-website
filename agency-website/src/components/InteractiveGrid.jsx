import { useEffect, useRef, useCallback } from "react";

/**
 * InteractiveGrid — A performant canvas-based animated grid background.
 *
 * Features:
 *  - Soft orange radial glow follows the mouse cursor
 *  - Grid intersections near the cursor brighten toward orange
 *  - Tiny pulsing glow dots at random intersections
 *  - Occasional thin orange light traveling along a grid line
 *  - Extremely subtle parallax offset based on mouse position
 *  - Mobile: automatic slow ambient movement replaces cursor tracking
 *  - Respects prefers-reduced-motion
 */

const GRID_SIZE = 64; // px — matches the existing 4rem grid
const GLOW_RADIUS = 180; // px radius of cursor glow influence
const DOT_COUNT = 8; // number of pulsing intersection dots
const SIGNAL_INTERVAL = 4000; // ms between new traveling signals
const SIGNAL_SPEED = 1.2; // px per frame

function InteractiveGrid() {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    mouse: { x: -9999, y: -9999 },
    smoothMouse: { x: -9999, y: -9999 },
    offset: { x: 0, y: 0 },
    dots: [],
    signals: [],
    lastSignalTime: 0,
    isMobile: false,
    autoAngle: 0,
    animId: null,
    prefersReducedMotion: false,
    dpr: 1,
    w: 0,
    h: 0,
  });

  // Generate random pulsing dots at grid intersections
  const generateDots = useCallback((w, h) => {
    const cols = Math.floor(w / GRID_SIZE);
    const rows = Math.floor(h / GRID_SIZE);
    const dots = [];
    for (let i = 0; i < DOT_COUNT; i++) {
      dots.push({
        col: Math.floor(Math.random() * cols) + 1,
        row: Math.floor(Math.random() * rows) + 1,
        phase: Math.random() * Math.PI * 2,
        speed: 0.008 + Math.random() * 0.012, // different pulse speeds
      });
    }
    return dots;
  }, []);

  // Create a new traveling signal
  const spawnSignal = useCallback((w, h) => {
    const cols = Math.floor(w / GRID_SIZE);
    const rows = Math.floor(h / GRID_SIZE);
    const isHorizontal = Math.random() > 0.5;
    if (isHorizontal) {
      const row = (Math.floor(Math.random() * rows) + 1) * GRID_SIZE;
      return { x: 0, y: row, dx: SIGNAL_SPEED, dy: 0, maxX: w, maxY: h, life: 1 };
    } else {
      const col = (Math.floor(Math.random() * cols) + 1) * GRID_SIZE;
      return { x: col, y: 0, dx: 0, dy: SIGNAL_SPEED, maxX: w, maxY: h, life: 1 };
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const s = stateRef.current;

    // Check reduced motion preference
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    s.prefersReducedMotion = motionQuery.matches;
    const onMotionChange = (e) => { s.prefersReducedMotion = e.matches; };
    motionQuery.addEventListener("change", onMotionChange);

    // Detect mobile / touch
    s.isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    // Sizing
    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      s.dpr = Math.min(window.devicePixelRatio || 1, 2);
      s.w = rect.width;
      s.h = rect.height;
      canvas.width = s.w * s.dpr;
      canvas.height = s.h * s.dpr;
      canvas.style.width = s.w + "px";
      canvas.style.height = s.h + "px";
      ctx.setTransform(s.dpr, 0, 0, s.dpr, 0, 0);
      s.dots = generateDots(s.w, s.h);
    };
    resize();
    window.addEventListener("resize", resize);

    // Mouse tracking
    const onMouseMove = (e) => {
      if (s.isMobile) return;
      const rect = canvas.getBoundingClientRect();
      s.mouse.x = e.clientX - rect.left;
      s.mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => {
      s.mouse.x = -9999;
      s.mouse.y = -9999;
    };
    window.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    // Check dark mode
    const isDark = () => document.documentElement.classList.contains("dark");

    // --- Main render loop ---
    const render = (timestamp) => {
      const { w, h } = s;
      ctx.clearRect(0, 0, w, h);

      if (s.prefersReducedMotion) {
        // Draw only the static grid, no animation
        s.animId = requestAnimationFrame(render);
        return;
      }

      // Mobile automatic ambient cursor
      if (s.isMobile) {
        s.autoAngle += 0.003;
        s.mouse.x = w / 2 + Math.cos(s.autoAngle) * w * 0.25;
        s.mouse.y = h / 2 + Math.sin(s.autoAngle * 0.7) * h * 0.2;
      }

      // Smooth interpolation for mouse position
      const lerp = 0.06;
      s.smoothMouse.x += (s.mouse.x - s.smoothMouse.x) * lerp;
      s.smoothMouse.y += (s.mouse.y - s.smoothMouse.y) * lerp;

      // Subtle parallax offset from mouse position
      const parallaxStrength = 3;
      const targetOffsetX = ((s.smoothMouse.x / w) - 0.5) * parallaxStrength;
      const targetOffsetY = ((s.smoothMouse.y / h) - 0.5) * parallaxStrength;
      s.offset.x += (targetOffsetX - s.offset.x) * 0.03;
      s.offset.y += (targetOffsetY - s.offset.y) * 0.03;

      const ox = s.offset.x;
      const oy = s.offset.y;
      const mx = s.smoothMouse.x;
      const my = s.smoothMouse.y;

      const dark = isDark();
      const baseGridAlpha = dark ? 0.025 : 0.04;
      const glowColor = "255, 90, 31"; // orange rgb

      // --- Draw grid lines with proximity glow ---
      const cols = Math.ceil(w / GRID_SIZE) + 1;
      const rows = Math.ceil(h / GRID_SIZE) + 1;

      for (let c = 0; c <= cols; c++) {
        const x = c * GRID_SIZE + ox;
        // Distance from cursor to this vertical line
        const distToLine = Math.abs(mx - x);
        const influence = Math.max(0, 1 - distToLine / GLOW_RADIUS);
        const alpha = baseGridAlpha + influence * (dark ? 0.06 : 0.08);
        const rv = dark ? 180 : 128;
        const gv = dark ? 180 : 128;
        const bv = dark ? 180 : 128;
        // Blend toward orange when influenced
        const rr = Math.round(rv + (255 - rv) * influence * 0.5);
        const gg = Math.round(gv + (90 - gv) * influence * 0.5);
        const bb = Math.round(bv + (31 - bv) * influence * 0.5);

        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.strokeStyle = `rgba(${rr}, ${gg}, ${bb}, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      for (let r = 0; r <= rows; r++) {
        const y = r * GRID_SIZE + oy;
        const distToLine = Math.abs(my - y);
        const influence = Math.max(0, 1 - distToLine / GLOW_RADIUS);
        const alpha = baseGridAlpha + influence * (dark ? 0.06 : 0.08);
        const rv = dark ? 180 : 128;
        const gv = dark ? 180 : 128;
        const bv = dark ? 180 : 128;
        const rr = Math.round(rv + (255 - rv) * influence * 0.5);
        const gg = Math.round(gv + (90 - gv) * influence * 0.5);
        const bb = Math.round(bv + (31 - bv) * influence * 0.5);

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.strokeStyle = `rgba(${rr}, ${gg}, ${bb}, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // --- Cursor glow radial ---
      if (mx > -1000 && my > -1000) {
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, GLOW_RADIUS);
        gradient.addColorStop(0, `rgba(${glowColor}, ${dark ? 0.07 : 0.05})`);
        gradient.addColorStop(0.5, `rgba(${glowColor}, ${dark ? 0.025 : 0.02})`);
        gradient.addColorStop(1, `rgba(${glowColor}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(mx - GLOW_RADIUS, my - GLOW_RADIUS, GLOW_RADIUS * 2, GLOW_RADIUS * 2);
      }

      // --- Intersection brightening near cursor ---
      if (mx > -1000 && my > -1000) {
        const nearCols = Math.floor((mx - GLOW_RADIUS) / GRID_SIZE);
        const farCols = Math.ceil((mx + GLOW_RADIUS) / GRID_SIZE);
        const nearRows = Math.floor((my - GLOW_RADIUS) / GRID_SIZE);
        const farRows = Math.ceil((my + GLOW_RADIUS) / GRID_SIZE);

        for (let c = nearCols; c <= farCols; c++) {
          for (let r = nearRows; r <= farRows; r++) {
            const ix = c * GRID_SIZE + ox;
            const iy = r * GRID_SIZE + oy;
            const dist = Math.sqrt((mx - ix) ** 2 + (my - iy) ** 2);
            if (dist < GLOW_RADIUS) {
              const intensity = (1 - dist / GLOW_RADIUS) ** 2;
              const dotAlpha = intensity * (dark ? 0.25 : 0.2);
              const dotSize = 1.5 + intensity * 1.5;
              ctx.beginPath();
              ctx.arc(ix, iy, dotSize, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(${glowColor}, ${dotAlpha})`;
              ctx.fill();
            }
          }
        }
      }

      // --- Pulsing dots at random intersections ---
      for (const dot of s.dots) {
        dot.phase += dot.speed;
        const pulse = (Math.sin(dot.phase) + 1) / 2; // 0..1
        const dx = dot.col * GRID_SIZE + ox;
        const dy = dot.row * GRID_SIZE + oy;
        const dotAlpha = 0.08 + pulse * (dark ? 0.15 : 0.12);
        const dotSize = 1.2 + pulse * 1.3;
        ctx.beginPath();
        ctx.arc(dx, dy, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${glowColor}, ${dotAlpha})`;
        ctx.fill();
      }

      // --- Traveling signals ---
      if (timestamp - s.lastSignalTime > SIGNAL_INTERVAL && s.signals.length < 3) {
        s.signals.push(spawnSignal(w, h));
        s.lastSignalTime = timestamp;
      }

      s.signals = s.signals.filter((sig) => {
        sig.x += sig.dx;
        sig.y += sig.dy;

        // Check bounds
        if (sig.x > sig.maxX + 20 || sig.y > sig.maxY + 20) return false;

        // Draw the signal as a short fading line
        const len = 40;
        const tailX = sig.x - sig.dx * len;
        const tailY = sig.y - sig.dy * len;

        const gradient = ctx.createLinearGradient(tailX, tailY, sig.x, sig.y);
        gradient.addColorStop(0, `rgba(${glowColor}, 0)`);
        gradient.addColorStop(1, `rgba(${glowColor}, ${dark ? 0.18 : 0.14})`);

        ctx.beginPath();
        ctx.moveTo(tailX + ox, tailY + oy);
        ctx.lineTo(sig.x + ox, sig.y + oy);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Tiny bright head dot
        ctx.beginPath();
        ctx.arc(sig.x + ox, sig.y + oy, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${glowColor}, ${dark ? 0.3 : 0.25})`;
        ctx.fill();

        return true;
      });

      s.animId = requestAnimationFrame(render);
    };

    s.animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(s.animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      motionQuery.removeEventListener("change", onMotionChange);
    };
  }, [generateDots, spawnSignal]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
}

export default InteractiveGrid;
