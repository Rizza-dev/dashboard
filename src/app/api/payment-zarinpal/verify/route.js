import { connectDB } from "@/lib/mongodb";
import Cart from "@/models/Cart";
import Order from "@/models/Order";
import TempPayment from "@/models/TempPayment";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const authority = searchParams.get("Authority");
    const status = searchParams.get("Status");

    if (status !== "OK") {
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_SITE_URL}/payment-failed`
      );
    }

    const temp = await TempPayment.findOne({ authority });

    if (!temp) {
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_SITE_URL}/payment-failed`
      );
    }

    const {
      user,
      items,
      finalPrice,
      recipientName,
      phone,
      postalCode,
      address,
    } = temp;

    const vetifyRes = await axios.post(process.env.ZARINPAL_VERIFY, {
      merchant_id: process.env.ZARINPAL_MERCHANT_ID,
      authority,
      amount: finalPrice,
    });

    const result = vetifyRes.data;
    if (result.data?.code === 100 || process.env.NODE_ENV === "development") {
      await Order.create({
        user,
        items,
        finalPrice,
        paymentStatus: "paid",
        recipientName,
        phone,
        postalCode,
        address,
        status: "در حال بررسی",
        authority,
      });
      // حذف پرداخت موقت
      await TempPayment.deleteOne({ authority });
      await Cart.deleteOne({ userId: user });
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_SITE_URL}/success`
      );
    } else {
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_SITE_URL}/payment-failed`
      );
    }
  } catch (err) {
    console.error(err);
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_SITE_URL}/payment-failed`
    );
  }
}
