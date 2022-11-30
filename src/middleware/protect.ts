import {Request, Response, NextFunction} from 'express'
import * as jwt from 'jsonwebtoken'


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
        console.log(user)
        next()

    }catch(error){
        console.log(error);
        return res.status(401).json({
            message: 'You are not allowed to enter this page'
        })
    }

}

export default protect;