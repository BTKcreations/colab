import React, { useState } from 'react';

interface Version {
    timestamp: string;
    // Add other properties of a version here if needed
}

interface VersionHistoryProps {
    versions: Version[];
}

const VersionHistory: React.FC<VersionHistoryProps> = ({ versions }) => {
    const [selectedVersion, setSelectedVersion] = useState(null);

    interface HandleVersionSelect {
        (version: Version): void;
    }

    const handleVersionSelect: HandleVersionSelect = (version) => {
        setSelectedVersion(version);
        // Logic to replay the selected version on the whiteboard
    };

    return (
        <div>
            <h2>Version History</h2>
            <ul>
                {versions.map((version, index) => (
                    <li key={index} onClick={() => handleVersionSelect(version)}>
                        Version {index + 1} - {version.timestamp}
                    </li>
                ))}
            </ul>
            {selectedVersion && (
                <div>
                    <h3>Selected Version Details</h3>
                    {/* Display details of the selected version */}
                </div>
            )}
        </div>
    );
};

export default VersionHistory;