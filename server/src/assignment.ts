import { Request, Response } from 'express';
import { Assignment } from './types'; // Assuming you have an Assignment type defined in your types file
import { db } from './db'; // Assuming you have a database connection setup

// Create a new assignment
export const createAssignment = async (req: Request, res: Response) => {
    const { title, description, dueDate } = req.body;

    const newAssignment: Assignment = {
        title,
        description,
        dueDate,
        submitted: false,
        grades: [],
    };

    try {
        const result = await db.collection('assignments').insertOne(newAssignment);
        res.status(201).json({ message: 'Assignment created', assignmentId: result.insertedId });
    } catch (error) {
        res.status(500).json({ message: 'Error creating assignment', error });
    }
};

// Submit an assignment
export const submitAssignment = async (req: Request, res: Response) => {
    const { assignmentId, studentId, submissionData } = req.body;

    try {
        const assignment = await db.collection('assignments').findOne({ _id: assignmentId });

        if (!assignment) {
            return res.status(404).json({ message: 'Assignment not found' });
        }

        assignment.submitted = true;
        assignment.grades.push({ studentId, submissionData });

        await db.collection('assignments').updateOne({ _id: assignmentId }, { $set: assignment });
        res.status(200).json({ message: 'Assignment submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting assignment', error });
    }
};

// Get all assignments
export const getAssignments = async (req: Request, res: Response) => {
    try {
        const assignments = await db.collection('assignments').find().toArray();
        res.status(200).json(assignments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching assignments', error });
    }
};

// Grade an assignment
export const gradeAssignment = async (req: Request, res: Response) => {
    const { assignmentId, studentId, grade } = req.body;

    try {
        const assignment = await db.collection('assignments').findOne({ _id: assignmentId });

        if (!assignment) {
            return res.status(404).json({ message: 'Assignment not found' });
        }

        const studentGrade = assignment.grades.find(g => g.studentId === studentId);
        if (studentGrade) {
            studentGrade.grade = grade;
        } else {
            return res.status(404).json({ message: 'Student submission not found' });
        }

        await db.collection('assignments').updateOne({ _id: assignmentId }, { $set: assignment });
        res.status(200).json({ message: 'Assignment graded successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error grading assignment', error });
    }
};