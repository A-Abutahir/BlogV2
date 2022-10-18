import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user/", router);


mongoose.connect("mongodb+srv://admin:admin@cluster0.m8s4opu.mongodb.net/Blog?retryWrites=true&w=majority")
        .then(() => app.listen(5000))
        .then(() => console.log("Connected to DB"))
        .catch((err) => console.log("ERR", err));

app.use("/", (request, response, next) => {
    response.send("Welcome to MERN Application")
})