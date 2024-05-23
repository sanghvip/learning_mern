"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
//The Dotenv/config import loads your environment variables
require("dotenv/config");
//Mongoos epackage helps us to connect with our database
const mongoose_1 = __importDefault(require("mongoose"));
const users_1 = __importDefault(require("./routes/users"));
const auth_1 = __importDefault(require("./routes/auth"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = __importDefault(require("path"));
mongoose_1.default.connect(process.env.MONGODB_CONNECTION_STRING);
console.log("Connection String:" + (process.env.MONGODB_CONNECTION_STRING));
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
//Helps to convert API request body to json automatically
app.use(express_1.default.json());
// Helps to parse the URL to get the create parameters
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));
//helps to serve the static files for our frontend
app.use(express_1.default.static(path_1.default.join(__dirname, "../../frontend/dist")));
app.use("/api/auth", auth_1.default);
app.use("/api/users", users_1.default);
//start the server for supporing the requests
app.listen(7000, () => {
    console.log("Server is running on localhost:7000");
});
