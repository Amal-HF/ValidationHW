import { Student, Teacher, ClassRoom } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { Request, Response } from "express";
import { prisma } from "../config/db";
import * as argon2 from 'argon2';
import { schoolParamsSchemaType } from "../zod_scema/school.schema";

// get all
export const getAllStudentsHandler = async(req:Request, res:Response) => {
    const students = await prisma.student.findMany();
    return res.status(200).json(students);
};
export const getAllClassesHandler = async(req:Request, res:Response) => {
    const classes = await prisma.classRoom.findMany();
    return res.status(200).json(classes);
};
export const getAllTeachersHandler = async(req:Request, res:Response) => {
    const teachers = await prisma.teacher.findMany();
    return res.status(200).json(teachers);
};

// adding one
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
    const newClass = req.body as ClassRoom;
    try {
        await prisma.classRoom.create({
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

// searchby id
export const getStudentByIDHandler = async(req:Request, res:Response) => {
    try{
        const {id} = req.params as schoolParamsSchemaType;
        const student = await prisma.student.findFirst({
            where: {id}
        })
        return res.status(200).json({student})
    
    }catch(error){
        console.log(error);
        return res.status(400).json({message: 'Server Error'})
    }
};
export const getTeacherByIDHandler = async(req:Request, res:Response) => {
    try{
        const {id} = req.params as schoolParamsSchemaType;
        const teacher = await prisma.teacher.findFirst({
            where: {id}
        })
        return res.status(200).json({teacher})
    
    }catch(error){
        console.log(error);
        return res.status(400).json({message: 'Server Error'})
    }
};
export const getClassByIDHandler = async(req:Request, res:Response) => {
    try{
        const {id} = req.params as schoolParamsSchemaType;
        const classs = await prisma.classRoom.findFirst({
            where: {id}
        })
        return res.status(200).json({classs})
    
    }catch(error){
        console.log(error);
        return res.status(400).json({message: 'Server Error'})
    }
};

