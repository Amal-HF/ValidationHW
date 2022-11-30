import { Student, Teacher, Classroom } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { Request, Response } from "express";
import { prisma } from "../config/db";
import * as argon2 from 'argon2';

export const getAllStudentsHandler = async(req:Request, res:Response) => {
    const students = await prisma.student.findMany();
    return res.status(200).json(students);
};
export const getAllClassesHandler = async(req:Request, res:Response) => {
    const classes = await prisma.class.findMany();
    return res.status(200).json(classes);
};
export const getAllTeachersHandler = async(req:Request, res:Response) => {
    const teachers = await prisma.teacher.findMany();
    return res.status(200).json(teachers);
};


export const addStudentHandler = async(req:Request, res:Response) => {
    const newStudent = req.body as Student;
    try {
        await prisma.student.create({
            data: newStudent,
        });
        return res.status(201).json({
            message: 'New Student added'
        });
    } catch(error){
        const prismaError = error as PrismaClientKnownRequestError;
        return res.status(400).json({
            message: prismaError,
        })
    }
};
export const addTeacherHandler = async(req:Request, res:Response) => {
    const newTeacher = req.body as Teacher;
    try {
        await prisma.teacher.create({
            data: newTeacher,
        });
        return res.status(201).json({
            message: 'New Teacher added'
        });
    } catch(error){
        const prismaError = error as PrismaClientKnownRequestError;
        return res.status(400).json({
            message: prismaError,
        })
    }
};
export const addClassHandler = async(req:Request, res:Response) => {
    const newClass = req.body as Classroom;
    try {
        await prisma.classroom.create({
            data: newClass,
        });
        return res.status(201).json({
            message: 'New Class added'
        });
    } catch(error){
        const prismaError = error as PrismaClientKnownRequestError;
        return res.status(400).json({
            message: prismaError,
        })
    }
};
