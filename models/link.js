import mongoose from "mongoose";

const LinkSchema = mongoose.Schema({
   originalURL: String,
});

export default mongoose.model("links", LinkSchema);
