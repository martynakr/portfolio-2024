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

        const points: { x: number; y: number }[] = [];
        const numPoints = 60;
        const spacing = canvas.width / (numPoints - 1);

        for (let i = 0; i < numPoints; i++) {
            points.push({ x: i * spacing, y: 2 * (canvas.height / 3) });
        }
        ``;
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
            ctx.strokeStyle = "#CEEBFF";
            ctx.stroke();
            ctx.closePath();
        };

        const handleMouseMove = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            for (let i = 0; i < points.length; i++) {
                const dx = points[i].x - mouseX;
                const dy = points[i].y - mouseY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 100;
                const influence = Math.max(0, (maxDist - distance) / maxDist);
                points[i].y = 2 * (canvas.height / 3) + influence * 50;
            }
            drawLine();
        };

        canvas.addEventListener("mousemove", handleMouseMove);
        drawLine();

        return () => {
            canvas.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return <canvas ref={canvasRef} />;
};

export default BendingLine;
