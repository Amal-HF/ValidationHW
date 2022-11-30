"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const user_router_1 = __importDefault(require("./routes/user.router"));
// import 'dotenv/config'
const app = (0, express_1.default)();
app.use(express_1.default.json());
// db connecton 
(0, db_1.connectDB)();
// middlewares
app.use('api/v1/user', user_router_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT);
});
