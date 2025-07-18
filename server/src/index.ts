import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;
import cors from "cors";
import connectDB from "./config/mongoDB.js";

app.use(cors({
  origin: process.env.CLIENT || "*",
  credentials: true,
  methods: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
  allowedHeaders: 'X-CSRF-Token, X-Requested-With, Accept, Content-Type, Authorization'
})); 



connectDB();
app.listen(PORT, () => {
  console.log("connected to server");
});
