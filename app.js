import express from 'express';
import session from "express-session";
import cors from 'cors';
import mongoose from 'mongoose';
import UserController from './controllers/users-controller.js';
import AuthController from './controllers/auth-controller.js';
import BillingController from './controllers/billing-controller.js';
import MovieController from './controllers/movie-controller.js';


const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/zinema' //'mongodb+srv://Cluster57626:anjali@cluster0.jyy3myf.mongodb.net/zinema'
// const CONNECTION_STRING = 'mongodb+srv://Cluster57626:anjali@cluster0.jyy3myf.mongodb.net/zinema'
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(
  session({
    secret: "any string",
    resave: false,
    saveUninitialized: true,
    // store: new session.MemoryStore(),
  })
);

app.use(express.json());
app.use(cors({
  credentials: true,
  origin: "http://localhost:3000",
})
)

UserController(app);
MovieController(app);
BillingController(app);
AuthController(app);
app.listen(process.env.PORT || 4000) 
