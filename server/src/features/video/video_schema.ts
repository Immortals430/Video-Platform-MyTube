import { model, Schema } from "mongoose";

const videoSchema = new Schema({
  title: String,
  // channel:
  // views:
  thumbnail: String,
  like: Number,
  url: String,

},{ timestamps: true });

const Video = model("videos", videoSchema)

export default Video



