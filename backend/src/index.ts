import express, {Request,Response, application} from'express';
import cors from 'cors';
//The Dotenv/config import loads your environment variables
import "dotenv/config";
//Mongoos epackage helps us to connect with our database
import mongoose, { mongo } from "mongoose";
import userRoutes  from './routes/users';
import authRoutes from "./routes/auth";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)

const app = express();

//Helps to convert API request body to json automatically
app.use(express.json());
// Helps to parse the URL to get the create parameters
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials:true,
}));

app.use("/api/auth",authRoutes);
app.use("/api/users", userRoutes);

//start the server for supporing the requests
app.listen(7000,() => {
    console.log("Server is running on localhost:7000");
})