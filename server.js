import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import apiRouter from "./routes/index.js"
dotenv.config();
const app = new express();
const { PORT = 5000 } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/api', apiRouter)
app.listen(PORT, () => {
    console.log('Server started on port ', PORT)
})

if(process.env.NODE_ENV='production'){
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}
