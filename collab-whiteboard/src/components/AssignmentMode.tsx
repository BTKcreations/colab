import React, { useState } from 'react';

const AssignmentMode: React.FC = () => {
    const [isAssignmentActive, setIsAssignmentActive] = useState(false);
    const [rubricScores, setRubricScores] = useState<{ [key: string]: number }>({});
    const [submissionLocked, setSubmissionLocked] = useState(false);

    const startAssignment = () => {
        setIsAssignmentActive(true);
        setSubmissionLocked(false);
    };

    const submitAssignment = () => {
        setSubmissionLocked(true);
        // Logic to save results to backend can be added here
    };

    const handleRubricChange = (criteria: string, score: number) => {
        setRubricScores(prevScores => ({
            ...prevScores,
            [criteria]: score,
        }));
    };

    return (
        <div>
            <h2>Assignment Mode</h2>
            {!isAssignmentActive ? (
                <button onClick={startAssignment}>Start Assignment</button>
            ) : (
                <div>
                    <h3>Grading Rubric</h3>
                    <div>
                        <label>
                            Criteria 1:
                            <input
                                type="number"
                                min="0"
                                max="10"
                                onChange={(e) => handleRubricChange('Criteria 1', Number(e.target.value))}
                                disabled={submissionLocked}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Criteria 2:
                            <input
                                type="number"
                                min="0"
                                max="10"
                                onChange={(e) => handleRubricChange('Criteria 2', Number(e.target.value))}
                                disabled={submissionLocked}
                            />
                        </label>
                    </div>
                    <button onClick={submitAssignment} disabled={submissionLocked}>Submit Assignment</button>
                </div>
            )}
        </div>
    );
};

export default AssignmentMode;