import { useEffect, useRef } from 'react';

/**
 * Flowing "aurora" background in dark gold tones.
 * A handful of large, soft blobs drift along slow lissajous paths and breathe
 * in size, drawn with additive blending. The canvas itself is blurred via CSS
 * so the shapes melt into each other like flowing ribbons of light. Fixed
 * behind everything, with a vignette so foreground content stays readable.
 */
export default function LiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let raf;
    let t = 0;

    // Gold / amber shades derived from the site palette (#dda15e family).
    // Each blob gets a color, a lissajous orbit, a base radius and a pulse phase.
    const COLORS = [
      '221,161,94', // gold
      '244,201,122', // light amber
      '188,138,79', // bronze
      '160,110,55', // deep amber
      '120,80,40', // umber shadow
    ];

    const buildBlobs = () => {
      const n = 6;
      return Array.from({ length: n }, (_, i) => ({
        color: COLORS[i % COLORS.length],
        // Orbit centre, expressed as a fraction of the viewport.
        cx: 0.15 + (i / n) * 0.7,
        cy: 0.2 + ((i * 0.37) % 1) * 0.6,
        // Lissajous amplitudes + frequencies — what makes them flow.
        ax: 0.18 + (i % 3) * 0.05,
        ay: 0.16 + (i % 2) * 0.07,
        fx: 0.7 + (i % 3) * 0.25,
        fy: 0.5 + (i % 4) * 0.21,
        phase: (i / n) * Math.PI * 2,
        // Base radius as a fraction of the shorter screen side.
        r: 0.32 + (i % 3) * 0.07,
        a: 0.55 + (i % 3) * 0.12,
      }));
    };

    let blobs = buildBlobs();

    const resize = () => {
      width = canvas.width = Math.floor(window.innerWidth * dpr);
      height = canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    const draw = () => {
      // Translucent base fill leaves faint trails so motion feels liquid.
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#070605';
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = 'lighter';
      const minSide = Math.min(width, height);

      for (const b of blobs) {
        // Lissajous path for the centre.
        const x = (b.cx + Math.sin(t * b.fx + b.phase) * b.ax) * width;
        const y = (b.cy + Math.cos(t * b.fy + b.phase) * b.ay) * height;
        // Breathing radius.
        const r = b.r * minSide * (1 + Math.sin(t * 0.6 + b.phase) * 0.18);

        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, `rgba(${b.color},${b.a})`);
        g.addColorStop(0.5, `rgba(${b.color},${b.a * 0.45})`);
        g.addColorStop(1, `rgba(${b.color},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      t += 0.0022;
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const onResize = () => {
      resize();
      blobs = buildBlobs();
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
      {/* The blur melts the blobs into flowing ribbons of light. */}
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        style={{ filter: 'blur(48px) saturate(1.25)' }}
      />
      {/* Vignette keeps the centre calm so content stays legible. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,4,3,0.55)_100%)]" />
      {/* Subtle film grain. */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('/noise.svg')]" />
    </div>
  );
}
