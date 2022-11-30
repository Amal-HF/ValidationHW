import {Request, Response, NextFunction} from 'express'
import * as jwt from 'jsonwebtoken'

interface IUser {
    id: string,
    role: string,
    iat: number
}

const protect = (req:Request, res:Response, next:NextFunction) => {
    try{
        const header = req.headers.authorization;
        if(!header){
            return res.status(401).json({
                message: 'You are not allowed to enter this page'
            })
        }
        const token = header.split(' ')[1];
        const user = jwt.verify(token,process.env.JWT_SECRET as string);
        
        res.locals.user = user;
        console.log(user)
        next()

    }catch(error){
        console.log(error);
        return res.status(401).json({
            message: 'You are not allowed to enter this page'
        })
    }

}

const authorize = (role:string) => (req:Request, res:Response, next:NextFunction) => {
    const user = res.locals.user as IUser;
    if (user.role!=role){
        return res.status(403).json({
            message: 'You are not allowed to enter this page'
        })
    }
    next();
}

export {protect, authorize};