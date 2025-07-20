import { model, Schema } from "mongoose";

let userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        message: (props: { path: string; value: string }) =>
          `${props.value} is not a valid email address!`,
      },
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    avatar: {
      type: String,
      default: "image-user.jpg",
    },
    avatarUrl: {
      type: String,
      default:
        "https://firebasestorage.googleapis.com/v0/b/hangouts-41e52.appspot.com/o/avatar%2Fimage-user.jpg?alt=media&token=a27415bd-57f2-4522-a100-676301952c90",
    },

  },
  { timestamps: true }
);

 const User = model("users", userSchema);

 export default User;

