"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const school_controller_1 = require("../controller/school.controller");
const validate_1 = __importDefault(require("../middleware/validate"));
const school_schema_1 = require("../zod_scema/school.schema");
const router = express_1.default.Router();
// student
router.get('/student', school_controller_1.getAllStudentsHandler);
router.post('/student', (0, validate_1.default)(school_schema_1.studentSchema), school_controller_1.addStudentHandler);
router.get('/student/:id', school_controller_1.getStudentByIDHandler);
// class
router.get('/class', school_controller_1.getAllClassesHandler);
router.post('/class', (0, validate_1.default)(school_schema_1.classSchema), school_controller_1.addClassHandler);
router.get('/class/:id', school_controller_1.getTeacherByIDHandler);
// teacher
router.get('/teacher', school_controller_1.getAllTeachersHandler);
router.post('/teacher', (0, validate_1.default)(school_schema_1.teacherSchema), school_controller_1.addTeacherHandler);
router.get('/teacher/:id', school_controller_1.getClassByIDHandler);
exports.default = router;
