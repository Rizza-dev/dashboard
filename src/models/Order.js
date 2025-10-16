import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
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
    authority: { type: String, required: true, unique: true , sparse: true, },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", orderSchema);
