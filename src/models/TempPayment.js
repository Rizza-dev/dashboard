import mongoose from "mongoose";

const tempPaymentSchema = new mongoose.Schema({
  authority: { type: String, required: true, unique: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  finalPrice: { type: Number, required: true },
  paymentStatus: {
    type: String,
    default: "pending",
    enum: ["pending", "paid", "failed"],
    required: true,
  },
  recipientName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now, expires: 1800 }, // حذف خودکار بعد از 30 دقیقه
});

export default mongoose.models.TempPayment ||
  mongoose.model("TempPayment", tempPaymentSchema);
