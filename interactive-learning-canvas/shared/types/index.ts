export interface WhiteboardState {
    elements: Array<WhiteboardElement>;
    backgroundColor: string;
    zoomLevel: number;
    pan: {
        x: number;
        y: number;
    };
}

export interface WhiteboardElement {
    id: string;
    type: 'line' | 'rectangle' | 'circle' | 'text' | 'image';
    properties: any; // Specific properties based on the type
}

export interface User {
    id: string;
    name: string;
}

export interface Assignment {
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    submitted: boolean;
    grade?: number;
}

export interface MediaNote {
    id: string;
    type: 'audio' | 'video';
    url: string;
    timestamp: Date;
}