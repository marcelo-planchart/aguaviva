"use client";

import { useEffect, useRef } from "react";

/**
 * Interactive line-art jellyfish on <canvas>.
 * - Floats and sways on its own (disabled under prefers-reduced-motion).
 * - Click anywhere on it: the tentacles lash toward the pointer and a small
 *   "sting" spark fires at that point. "Aguaviva" — the kind that stings.
 */
export function JellyfishSting({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const stroke = "#ededea";
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W = 0,
      H = 0,
      dpr = 1;
    const mouse = { x: 0, y: 0, inside: false };
    const sting = { active: false, start: 0, x: 0, y: 0 };
    let sparks: { x: number; y: number; born: number }[] = [];

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      W = r.width;
      H = r.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!mouse.inside) {
        mouse.x = W * 0.5;
        mouse.y = H * 0.92;
      }
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const local = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onMove = (e: PointerEvent) => {
      const p = local(e);
      mouse.x = p.x;
      mouse.y = p.y;
      mouse.inside = true;
    };
    const onLeave = () => (mouse.inside = false);
    const onDown = (e: PointerEvent) => {
      const p = local(e);
      sting.active = true;
      sting.start = performance.now();
      sting.x = p.x;
      sting.y = p.y;
      sparks.push({ x: p.x, y: p.y, born: performance.now() });
      if (sparks.length > 6) sparks = sparks.slice(-6);
    };
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);
    canvas.addEventListener("pointerdown", onDown);

    let raf = 0;
    const draw = (now: number) => {
      const t = now / 1000;
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = stroke;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      const cx = W * 0.5;
      const unit = Math.min(W, H);
      const bob = reduced ? 0 : Math.sin(t * 0.9) * unit * 0.02;
      const bellCy = H * 0.34 + bob;
      const bellRx = unit * 0.26;
      const bellRy = bellRx * 0.8;

      // sting strength (ease up ~140ms, down ~480ms)
      let s = 0;
      if (sting.active) {
        const dt = now - sting.start;
        if (dt < 140) s = dt / 140;
        else if (dt < 620) s = 1 - (dt - 140) / 480;
        else sting.active = false;
        s = Math.max(0, Math.min(1, s));
      }
      const target = sting.active ? sting : mouse;

      ctx.lineWidth = Math.max(1.6, unit * 0.008);

      // bell dome
      ctx.beginPath();
      ctx.moveTo(cx - bellRx, bellCy);
      ctx.bezierCurveTo(
        cx - bellRx,
        bellCy - bellRy * 1.5,
        cx + bellRx,
        bellCy - bellRy * 1.5,
        cx + bellRx,
        bellCy,
      );
      ctx.stroke();

      // scalloped hem
      ctx.beginPath();
      const scal = 6;
      ctx.moveTo(cx - bellRx, bellCy);
      for (let i = 0; i < scal; i++) {
        const x0 = cx - bellRx + 2 * bellRx * (i / scal);
        const x1 = cx - bellRx + 2 * bellRx * ((i + 1) / scal);
        ctx.quadraticCurveTo((x0 + x1) / 2, bellCy + bellRy * 0.3, x1, bellCy);
      }
      ctx.stroke();

      // inner dome hint
      ctx.globalAlpha = 0.5;
      ctx.beginPath();
      ctx.moveTo(cx - bellRx * 0.5, bellCy - bellRy * 0.1);
      ctx.bezierCurveTo(
        cx - bellRx * 0.5,
        bellCy - bellRy * 0.95,
        cx + bellRx * 0.5,
        bellCy - bellRy * 0.95,
        cx + bellRx * 0.5,
        bellCy - bellRy * 0.1,
      );
      ctx.stroke();
      ctx.globalAlpha = 1;

      // tentacles
      const N = 7;
      const baseY = bellCy + bellRy * 0.18;
      for (let k = 0; k < N; k++) {
        const bx = cx - bellRx * 0.72 + bellRx * 1.44 * (k / (N - 1));
        const len = bellRy * (2.5 + (k % 2 ? 0.5 : 0));
        const segs = 16;
        ctx.beginPath();
        for (let seg = 0; seg <= segs; seg++) {
          const f = seg / segs;
          const sway = reduced ? 0 : Math.sin(t * 1.7 + k * 0.7 + f * 4.2) * unit * 0.035 * f;
          let x = bx + sway;
          let y = baseY + len * f;
          if (s > 0) {
            const reach = s * f * f;
            x += (target.x - x) * reach * 0.92;
            y += (target.y - y) * reach * 0.92;
          }
          if (seg === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.globalAlpha = 0.9;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      // sting sparks
      sparks = sparks.filter((sp) => now - sp.born < 480);
      for (const sp of sparks) {
        const age = (now - sp.born) / 480;
        const R = unit * 0.03 + age * unit * 0.14;
        ctx.globalAlpha = 1 - age;
        ctx.lineWidth = Math.max(1, unit * 0.006);
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, R, 0, Math.PI * 2);
        ctx.stroke();
        const rays = 8;
        for (let i = 0; i < rays; i++) {
          const a = (i / rays) * Math.PI * 2 + age * 1.6;
          ctx.beginPath();
          ctx.moveTo(sp.x + Math.cos(a) * R * 0.45, sp.y + Math.sin(a) * R * 0.45);
          ctx.lineTo(sp.x + Math.cos(a) * R * 0.95, sp.y + Math.sin(a) * R * 0.95);
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      canvas.removeEventListener("pointerdown", onDown);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`h-full w-full cursor-crosshair touch-none ${className}`}
      role="img"
      aria-label="Medusa Aguaviva interactiva — haz clic y pica el cursor"
    />
  );
}
