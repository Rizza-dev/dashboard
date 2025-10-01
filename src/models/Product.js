import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    colors: [
      {
        name: { type: String, required: true },
        hex: { type: String, required: true },
        images: [String],
        stock: { type: Number, default: 0 },
      },
    ],
    images: {
      type: [String],
      validator: (val) => val.length <= 5,
      message: "تعداد عکس ها باید کمتر از 5 باشد",
    },
    specialPrice: { type: Number }, // قیمت ویژه
    discountStart: { type: Date }, // تاریخ شروع تخفیف
    discountEnd: { type: Date }, // تاریخ پایان تخفیف

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
