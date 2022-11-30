import express from 'express'
import { addClassHandler, addStudentHandler, addTeacherHandler, getAllClassesHandler, getAllStudentsHandler, getAllTeachersHandler, getClassByIDHandler, getStudentByIDHandler, getTeacherByIDHandler } from '../controller/school.controller';
import validate from '../middleware/validate';
import { studentSchema, teacherSchema, classSchema } from '../zod_scema/school.schema';


const router = express.Router();
// student
router.get('/student', getAllStudentsHandler);
router.post('/student', validate(studentSchema),addStudentHandler);
router.get('/student/:id',getStudentByIDHandler);

// class
router.get('/class', getAllClassesHandler);
router.post('/class', validate(classSchema),addClassHandler);
router.get('/class/:id',getTeacherByIDHandler);

// teacher
router.get('/teacher', getAllTeachersHandler);
router.post('/teacher', validate(teacherSchema),addTeacherHandler);
router.get('/teacher/:id',getClassByIDHandler);

export default router;