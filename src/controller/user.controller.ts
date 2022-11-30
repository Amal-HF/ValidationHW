import { User } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { Request, Response } from "express";
import { prisma } from "../config/db";
import * as argon2 from 'argon2';
import * as jwt from 'jsonwebtoken'

export const registerHandler = async(req:Request, res:Response) => {
    try {
        const newUser = req.body as User
        const hashedPass = await argon2.hash(newUser.password);
        newUser.password = hashedPass

        await prisma.user.create({
            data: newUser
        });
        console.log('after adding')
        return res.status(201).json({
            message: 'new user added'
        })
    } catch(error){
        console.log(error);
        const prismaError = error as PrismaClientKnownRequestError;
        return res.status(400).json({
            message: prismaError.message
        })
    }
    
};

export const loginHandler = async(req:Request, res:Response) => {
    const {username, password} = req.body as User
    const isValidUsername = await prisma.user.findUnique({
        where: {username}
    })
    if(!isValidUsername){
        return res.status(400).json({
            message: 'wrong username or pass'
        })
    }
    const isValidPass = await argon2.verify(isValidUsername.password, password)
    if(!isValidPass){
        return res.status(400).json({
            message: 'wrong username or pass'
        })
    }
    const token = jwt.sign({id:isValidUsername.id, role:isValidUsername.role}, process.env.JWT_SECRET as string)
    return res.status(200).json({
        message: 'welcom back',
        token,
    })
};

export const getAllUsersHandler = async(req:Request, res:Response) => {
    const users = await prisma.user.findMany();
    return res.status(200).json(users);    
};
