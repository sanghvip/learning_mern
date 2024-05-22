import express, {Request,Response, application} from'express';
import cors from 'cors';
//The Dotenv/config import loads your environment variables
import "dotenv/config";
//Mongoos epackage helps us to connect with our database
// import mongoose, { mongo } from "mongoose";
import userRoutes  from './routes/users';
import authRoutes from "./routes/auth";
import cookieParser from "cookie-parser";

const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:5U4bH6o2S1aJiVMA@cluster0.aewsoqg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);

// //start the server for supporing the requests
// app.listen(7000,() => {
//     console.log("Server is running on localhost:7000");
// })