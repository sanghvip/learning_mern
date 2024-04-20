import express, {Request,Response} from'express';
import cors from 'cors';
//The Dotenv/config import loads your environment variables
import "dotenv/config";
//Mongoos epackage helps us to connect with our database
import mongoose, { mongo } from "mongoose";


mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)

const app = express();

//Helps to convert API request body to json automatically
app.use(express.json());
// Helps to parse the URL to get the create parameters
app.use(express.urlencoded({extended:true}));
app.use(cors())

//Express endpoint
app.get("/api/test",async (req:Request,resp:Response)=> {
    resp.json({message:"Hello from express endpoitn"});

})


//start the server for supporing the requests
app.listen(7000,() => {
    console.log("Server is running on localhost:7000");
})