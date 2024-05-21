import mongoose from "mongoose";
import link from "./link.js";

const LinkSchema = mongoose.Schema({
   // _id: Number,
    name: String,
    email: String,
    password: String,
    links: [mongoose.Schema.Types.ObjectId],
});

export default mongoose.model("users", LinkSchema);
