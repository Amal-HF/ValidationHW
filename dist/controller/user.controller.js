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
exports.registerHandler = void 0;
const db_1 = require("../config/db");
const registerHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = req.body;
        yield db_1.prisma.user.create({
            data: newUser
        });
        console.log('after adding');
        return res.status(201).json({
            message: 'new user added'
        });
    }
    catch (error) {
        console.log(error);
        const prismaError = error;
        return res.status(400).json({
            message: prismaError.message
        });
    }
});
exports.registerHandler = registerHandler;
// export const loginHandler = async(req:Request, res:Response) => {
//     const newUser = req.body as User
//     await prisma.User.create({
//         data: newUser
//     });
//     return res.status(201).json({
//         message: 'new user added'
//     })
// };
