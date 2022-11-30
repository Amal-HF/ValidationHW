"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    body: zod_1.z.object({
        username: zod_1.z.string({ required_error: 'Username is required' }).min(2, 'Username must be longer'),
        password: zod_1.z.string({ required_error: 'Password is required' }).min(2, 'Password must be longer'),
        email: zod_1.z.string({ required_error: 'Email is required' }).min(2, 'Email must be longer'),
    })
});
