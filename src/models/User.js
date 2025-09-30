import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    phone: { type: String, required: true, unique: true },
    name: String,
    email: String,
    address: String,
    postalCode: String,
    role: { type: String, enum: ["user", "admin"], default: "user" },
    otp: String,
    otpExpire: Date,
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
