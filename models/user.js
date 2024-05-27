import mongoose from "mongoose";
import links from "./link.js";

const UserSchema = mongoose.Schema({
   // _id: Number,
    name: String,
    email: String,
    password: String,
    links: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: links
    }],
});

export default mongoose.model("users", UserSchema);
