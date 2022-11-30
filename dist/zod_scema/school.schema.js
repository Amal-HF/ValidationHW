"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacherSchema = exports.classSchema = exports.studentSchema = void 0;
const zod_1 = require("zod");
exports.studentSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        age: zod_1.z.number(),
        major: zod_1.z.string(),
    })
});
exports.classSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
    })
});
exports.teacherSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
    })
});
const schoolParamsSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string(),
    })
});
