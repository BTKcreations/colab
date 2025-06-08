import { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

const Whiteboard = () => {
    const canvasEl = useRef<HTMLCanvasElement | null>(null);
    const fabricCanvas = useRef<fabric.Canvas | null>(null);

    useEffect(() => {
        if (canvasEl.current) {
            const canvas = new fabric.Canvas(canvasEl.current, {
                backgroundColor: 'white',
                selection: false,
            });
            fabricCanvas.current = canvas;

            // Enable drawing mode
            canvas.isDrawingMode = true;

            // Zoom and pan support
            canvas.on('mouse:wheel', (opt) => {
                const delta = opt.e.deltaY;
                let zoom = canvas.getZoom();
                zoom *= 0.999 ** delta;
                if (zoom > 3) zoom = 3;
                if (zoom < 0.5) zoom = 0.5;
                canvas.setZoom(zoom);
                opt.e.preventDefault();
                opt.e.stopPropagation();
            });

            canvas.on('mouse:down', (opt) => {
                if (opt.e.altKey === true) {
                    // @ts-ignore
                    canvas.isDragging = true;
                    canvas.selection = false;
                    // @ts-ignore
                    canvas.lastPosX = opt.e.clientX;
                    // @ts-ignore
                    canvas.lastPosY = opt.e.clientY;
                }
            });

            canvas.on('mouse:move', (opt) => {
                // @ts-ignore
                if (canvas.isDragging) {
                    const e = opt.e;
                    const vpt = canvas.viewportTransform!;
                    // @ts-ignore
                    vpt[4] += e.clientX - canvas.lastPosX;
                    // @ts-ignore
                    vpt[5] += e.clientY - canvas.lastPosY;
                    canvas.requestRenderAll();
                    // @ts-ignore
                    canvas.lastPosX = e.clientX;
                    // @ts-ignore
                    canvas.lastPosY = e.clientY;
                }
            });

            canvas.on('mouse:up', () => {
                // @ts-ignore
                canvas.isDragging = false;
                canvas.selection = true;
            });

            return () => {
                canvas.dispose();
            };
        }
    }, []);

    return (
        <canvas
            ref={canvasEl}
            width={window.innerWidth}
            height={window.innerHeight}
            style={{ border: '1px solid black', display: 'block' }}
        />
    );
};

export default Whiteboard;