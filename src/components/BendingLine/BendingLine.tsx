import { useRef, useEffect } from "react";

const BendingLine = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        canvas.width = 900;
        canvas.height = 200;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const points: { x: number; y: number; vy: number; target: number }[] =
            [];
        const numPoints = 60;
        const maxOffset = 50;
        const radius = 120;
        const stiffness = 0.08;
        const damping = 0.82;
        let baseY = 0;
        let mouse: { x: number; y: number } | null = null;
        let frameId = 0;
        const introDuration = 1500;
        let introStart: number | null = null;
        let introDone = false;

        const initializePoints = () => {
            points.length = 0;
            baseY = canvas.height / 2;
            const spacing = canvas.width / (numPoints - 1);
            for (let i = 0; i < numPoints; i++) {
                points.push({ x: i * spacing, y: baseY, vy: 0, target: baseY });
            }
        };

        const drawLine = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);

            for (let i = 1; i < points.length - 1; i++) {
                const xc = (points[i].x + points[i + 1].x) / 2;
                const yc = (points[i].y + points[i + 1].y) / 2;
                ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
            }
            ctx.quadraticCurveTo(
                points[points.length - 2].x,
                points[points.length - 2].y,
                points[points.length - 1].x,
                points[points.length - 1].y
            );

            ctx.lineWidth = 40;
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
            gradient.addColorStop(0, "#CEEBFF");
            gradient.addColorStop(0.5, "#E2D9FF");
            gradient.addColorStop(1, "#FFDCCF");
            ctx.strokeStyle = gradient;
            ctx.stroke();
            ctx.closePath();
        };

        const easeInOut = (t: number) =>
            t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

        const getGhost = (now: number) => {
            if (introDone) return null;
            if (introStart === null) introStart = now;
            const t = (now - introStart) / introDuration;
            if (t >= 1) {
                introDone = true;
                return null;
            }
            const start = -radius;
            const end = canvas.width + radius;
            const offsetY = 30;
            const e = easeInOut(t);
            return { x: start + (end - start) * e, y: baseY - offsetY };
        };

        const updateTargets = (now: number) => {
            const pointer = mouse ?? getGhost(now);
            for (const p of points) {
                if (!pointer) {
                    p.target = baseY;
                    continue;
                }
                const dx = p.x - pointer.x;
                const dy = pointer.y - baseY;
                const horizontal = Math.exp(-(dx * dx) / (2 * (radius / 2) ** 2));
                const vertical = Math.max(0, 1 - Math.abs(dy) / (canvas.height / 2));
                const direction = dy < 0 ? 1 : -1;
                p.target = baseY + direction * maxOffset * horizontal * vertical;
            }
        };

        const animate = (now: number) => {
            updateTargets(now);
            for (const p of points) {
                p.vy += (p.target - p.y) * stiffness;
                p.vy *= damping;
                p.y += p.vy;
            }
            drawLine();
            frameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse = { x: event.clientX - rect.left, y: event.clientY - rect.top };
            introDone = true;
        };

        const handleMouseLeave = () => {
            mouse = null;
        };

        const resizeCanvas = () => {
            if (window.innerWidth <= 992) {
                canvas.width = window.innerWidth * 0.95;
            } else {
                canvas.width = window.innerWidth * 0.9;
            }
            canvas.height = 200;
            initializePoints();
            drawLine();
        };

        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener("resize", resizeCanvas);

        resizeCanvas();
        frameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(frameId);
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} />;
};

export default BendingLine;
