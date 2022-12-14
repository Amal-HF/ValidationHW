"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
const validate_1 = __importDefault(require("../middleware/validate"));
const user_schema_1 = require("../zod_scema/user.schema");
// import 'dotenv/config'
const router = express_1.default.Router();
router.post('/register', (0, validate_1.default)(user_schema_1.userSchema), user_controller_1.registerHandler);
router.post('/login', user_controller_1.loginHandler);
exports.default = router;
