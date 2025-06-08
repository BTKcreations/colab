import React, { useState } from 'react';
import { BlockMath, InlineMath } from 'react-katex'; 
import 'katex/dist/katex.min.css';


const MathTools: React.FC = () => {
    const [equation, setEquation] = useState<string>('');
    const [isBlock, setIsBlock] = useState<boolean>(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEquation(event.target.value);
    };

    const toggleBlock = () => {
        setIsBlock(!isBlock);
    };

    return (
        <div className="math-tools">
            <h2>Math Tools</h2>
            <input
                type="text"
                value={equation}
                onChange={handleInputChange}
                placeholder="Enter LaTeX equation"
            />
            <button onClick={toggleBlock}>
                {isBlock ? 'Switch to Inline' : 'Switch to Block'}
            </button>
            <div className="math-output">
                {isBlock ? (
                    <BlockMath math={equation} />
                ) : (
                    <InlineMath math={equation} />
                )}
            </div>
        </div>
    );
};

export default MathTools;