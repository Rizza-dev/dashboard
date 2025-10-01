import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true }, // مثلا "کفش"
  slug: { type: String, required: true, unique: true }, // برای آدرس URL
  description: { type: String },
}, { timestamps: true });

export default mongoose.models.Category || mongoose.model("Category", CategorySchema);
