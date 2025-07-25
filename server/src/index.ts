import "dotenv/config"
import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import errorhandler from "./middlwares/errorhandler.js";
import videoRoutes from "./features/video/video_routes.js";
import userRoutes from "./features/user/user_routes.js";


app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    methods: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
    allowedHeaders:
      "X-CSRF-Token, X-Requested-With, Accept, Content-Type, Authorization",
  })
);


app.get("/", (req, res) => res.end("API working fine"))
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/video", videoRoutes);

app.use(errorhandler);

connectDB();
app.listen(PORT, () => {
  console.log("connected to server");
});
