import React, { useEffect, useRef } from 'react';

const ChemistryEditor: React.FC = () => {
    const ketcherRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const ketcher = new window.Ketcher(ketcherRef.current, {
            // Ketcher configuration options
        });

        return () => {
            ketcher.destroy();
        };
    }, []);

    return (
        <div>
            <h2>Chemistry Editor</h2>
            <div ref={ketcherRef} style={{ width: '100%', height: '500px' }} />
        </div>
    );
};

export default ChemistryEditor;