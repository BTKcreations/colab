import React, { useEffect, useRef } from 'react';

// @ts-ignore
// import 'chemdoodle/build/chemdoodleWeb.js';
// import 'chemdoodle/build/chemdoodleWeb.css';

const ChemistryTools: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        // @ts-ignore
        if (window.ChemDoodle && canvasRef.current) {
            // @ts-ignore
            const sketcher = new window.ChemDoodle.SketcherCanvas(canvasRef.current, 500, 300, {useServices:false});
            // You can access sketcher.getMolecule() to get the molecule data
        }
    }, []);

    return (
        <div>
            <h2>Chemistry Tools</h2>
            <canvas ref={canvasRef} width={500} height={300} style={{border: '1px solid #ccc'}} />
        </div>
    );
};

export default ChemistryTools;