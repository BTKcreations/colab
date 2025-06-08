import React from 'react';

const DiagramTemplates: React.FC = () => {
    const templates = [
        { name: 'Flowchart', id: 'flowchart' },
        { name: 'UML Diagram', id: 'uml' },
        { name: 'Circuit Diagram', id: 'circuit' },
    ];

    const insertTemplate = (templateId: string) => {
        // Logic to insert the selected template into the canvas
        console.log(`Inserting template: ${templateId}`);
    };

    return (
        <div className="diagram-templates">
            <h2>Diagram Templates</h2>
            <ul>
                {templates.map(template => (
                    <li key={template.id}>
                        <button onClick={() => insertTemplate(template.id)}>
                            {template.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DiagramTemplates;