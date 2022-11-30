"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClassByIDHandler = exports.getTeacherByIDHandler = exports.getStudentByIDHandler = exports.addClassHandler = exports.addTeacherHandler = exports.addStudentHandler = exports.getAllTeachersHandler = exports.getAllClassesHandler = exports.getAllStudentsHandler = void 0;
const db_1 = require("../config/db");
// get all
const getAllStudentsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield db_1.prisma.student.findMany();
    return res.status(200).json(students);
});
exports.getAllStudentsHandler = getAllStudentsHandler;
const getAllClassesHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const classes = yield db_1.prisma.classRoom.findMany();
    return res.status(200).json(classes);
});
exports.getAllClassesHandler = getAllClassesHandler;
const getAllTeachersHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const teachers = yield db_1.prisma.teacher.findMany();
    return res.status(200).json(teachers);
});
exports.getAllTeachersHandler = getAllTeachersHandler;
// adding one
const addStudentHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newStudent = req.body;
    try {
        yield db_1.prisma.student.create({
            data: newStudent,
        });
        return res.status(201).json({
            message: 'New Student added'
        });
    }
    catch (error) {
        const prismaError = error;
        return res.status(400).json({
            message: prismaError,
        });
    }
});
exports.addStudentHandler = addStudentHandler;
const addTeacherHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newTeacher = req.body;
    try {
        yield db_1.prisma.teacher.create({
            data: newTeacher,
        });
        return res.status(201).json({
            message: 'New Teacher added'
        });
    }
    catch (error) {
        const prismaError = error;
        return res.status(400).json({
            message: prismaError,
        });
    }
});
exports.addTeacherHandler = addTeacherHandler;
const addClassHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newClass = req.body;
    try {
        yield db_1.prisma.classRoom.create({
            data: newClass,
        });
        return res.status(201).json({
            message: 'New Class added'
        });
    }
    catch (error) {
        const prismaError = error;
        return res.status(400).json({
            message: prismaError,
        });
    }
});
exports.addClassHandler = addClassHandler;
// searchby id
const getStudentByIDHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const student = yield db_1.prisma.student.findFirst({
            where: { id }
        });
        return res.status(200).json({ student });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Server Error' });
    }
});
exports.getStudentByIDHandler = getStudentByIDHandler;
const getTeacherByIDHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const teacher = yield db_1.prisma.teacher.findFirst({
            where: { id }
        });
        return res.status(200).json({ teacher });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Server Error' });
    }
});
exports.getTeacherByIDHandler = getTeacherByIDHandler;
const getClassByIDHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const classs = yield db_1.prisma.classRoom.findFirst({
            where: { id }
        });
        return res.status(200).json({ classs });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Server Error' });
    }
});
exports.getClassByIDHandler = getClassByIDHandler;
