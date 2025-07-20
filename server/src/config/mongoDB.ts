import mongoose from "mongoose";
const url = process.env.ATLAS_PASS || "mongodb://127.0.0.1/mytube";
console.log(url)
const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
