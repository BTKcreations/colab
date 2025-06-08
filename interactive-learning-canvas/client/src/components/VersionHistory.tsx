import React, { useEffect, useState } from 'react';

const VersionHistory = ({ history, onSelectVersion }) => {
    const [selectedVersion, setSelectedVersion] = useState(null);

    useEffect(() => {
        if (selectedVersion !== null) {
            onSelectVersion(selectedVersion);
        }
    }, [selectedVersion, onSelectVersion]);

    return (
        <div className="version-history">
            <h2>Version History</h2>
            <ul>
                {history.map((version, index) => (
                    <li key={index} onClick={() => setSelectedVersion(version)}>
                        Version {index + 1}: {version.timestamp}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VersionHistory;