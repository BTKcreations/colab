import React, { useState } from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

// TypeScript will treat 'react-katex' as an untyped module.
// Optionally, you can create a separate .d.ts file for type declarations if needed.

const MathEditor: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [isBlock, setIsBlock] = useState<boolean>(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(event.target.value);
    };

    const toggleBlock = () => {
        setIsBlock(!isBlock);
    };

    return (
        <div>
            <h2>Math Editor</h2>
            <textarea
                value={input}
                onChange={handleInputChange}
                placeholder="Enter LaTeX here"
                rows={4}
                cols={50}
            />
            <button onClick={toggleBlock}>
                {isBlock ? 'Switch to Inline' : 'Switch to Block'}
            </button>
            <div>
                {isBlock ? (
                    <BlockMath math={input} />
                ) : (
                    <InlineMath math={input} />
                )}
            </div>
        </div>
    );
};

export default MathEditor;