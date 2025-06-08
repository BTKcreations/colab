import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

type FabricCanvasWithPan = fabric.Canvas & {
    isDragging?: boolean;
    lastPosX?: number;
    lastPosY?: number;
};

const Whiteboard = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const fabricCanvasRef = useRef<FabricCanvasWithPan | null>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = new fabric.Canvas(canvasRef.current, {
                isDrawingMode: true,
                backgroundColor: 'white',
                selection: false,
            }) as FabricCanvasWithPan;
            fabricCanvasRef.current = canvas;

            // Zoom
            canvas.on('mouse:wheel', (opt: any) => {
                const delta = opt.e.deltaY;
                let zoom = canvas.getZoom();
                zoom *= 0.999 ** delta;
                zoom = Math.max(0.5, Math.min(zoom, 3));
                canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
                opt.e.preventDefault();
                opt.e.stopPropagation();
            });

            // Pan
            canvas.on('mouse:down', (opt: any) => {
                if (opt.e.altKey === true) {
                    canvas.isDragging = true;
                    canvas.selection = false;
                    canvas.lastPosX = opt.e.clientX;
                    canvas.lastPosY = opt.e.clientY;
                }
            });

            canvas.on('mouse:move', (opt: any) => {
                if (canvas.isDragging) {
                    const e = opt.e;
                    const vpt = canvas.viewportTransform!;
                    vpt[4] += e.clientX - (canvas.lastPosX ?? 0);
                    vpt[5] += e.clientY - (canvas.lastPosY ?? 0);
                    canvas.requestRenderAll();
                    canvas.lastPosX = e.clientX;
                    canvas.lastPosY = e.clientY;
                }
            });

            canvas.on('mouse:up', () => {
                canvas.isDragging = false;
                canvas.selection = true;
            });
        }

        return () => {
            fabricCanvasRef.current?.dispose();
        };
    }, []);

    return (
        <div style={{ border: '1px solid black', height: '600px', width: '100%' }}>
            <canvas ref={canvasRef} width={1200} height={600} />
        </div>
    );
};

export default Whiteboard;