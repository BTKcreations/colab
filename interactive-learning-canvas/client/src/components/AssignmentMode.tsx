import React, { useState } from 'react';

const AssignmentMode: React.FC = () => {
    const [isFrozen, setIsFrozen] = useState(false);
    const [rubric, setRubric] = useState({});

    const handleFreezeCanvas = () => {
        setIsFrozen(true);
        // Logic to freeze the canvas
    };

    const handleSubmitAssignment = () => {
        // Logic to submit the assignment and save results
    };

    const handleRubricChange = (criteria: string, value: number) => {
        setRubric(prev => ({ ...prev, [criteria]: value }));
    };

    return (
        <div>
            <h2>Assignment Mode</h2>
            <button onClick={handleFreezeCanvas} disabled={isFrozen}>
                Start Assignment
            </button>
            {isFrozen && (
                <div>
                    <h3>Grading Rubric</h3>
                    {/* Example rubric criteria */}
                    <div>
                        <label>
                            Criteria 1:
                            <input type="range" min="0" max="10" onChange={(e) => handleRubricChange('criteria1', Number(e.target.value))} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Criteria 2:
                            <input type="range" min="0" max="10" onChange={(e) => handleRubricChange('criteria2', Number(e.target.value))} />
                        </label>
                    </div>
                    <button onClick={handleSubmitAssignment}>Submit Assignment</button>
                </div>
            )}
        </div>
    );
};

export default AssignmentMode;