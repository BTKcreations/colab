export interface User {
    id: string;
    name: string;
    role: 'teacher' | 'student';
}

export interface Drawing {
    id: string;
    type: 'line' | 'rectangle' | 'circle' | 'text';
    content: any; // This can be a path for shapes or text content
    createdAt: Date;
    updatedAt: Date;
    userId: string;
}

export interface Assignment {
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    submissions: Submission[];
}

export interface Submission {
    id: string;
    assignmentId: string;
    userId: string;
    content: any; // This can be the drawing or any other submission content
    submittedAt: Date;
    grade?: number; // Optional grading
}

export interface Version {
    id: string;
    drawingId: string;
    content: Drawing[];
    createdAt: Date;
}