import { connectDB } from "@/lib/mongodb";
import TempPayment from "@/models/TempPayment";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const {
      user,
      items,
      finalPrice,
      recipientName,
      phone,
      postalCode,
      address,
    } = body;

    const description = "پرداخت به پخش لوازم آشپزخانه برلیان";
    const merchant_id =
      process.env.ZARINPAL_MERCHANT_ID ||
      "00000000-0000-0000-0000-000000000000";

    const callback_url = `${process.env.NEXT_PUBLIC_SITE_URL}/api/payment-zarinpal/verify`;

    const res = await axios.post(process.env.ZARINPAL_REQ, {
      merchant_id,
      amount: finalPrice,
      description,
      callback_url,
    });

    const result = res.data;

    if (result.data && result.data.code === 100) {
      const authority = result.data.authority;

      // ذخیره پرداخت موقت
      await TempPayment.create({
        authority,
        user,
        items,
        finalPrice,
        paymentStatus: "pending",
        recipientName,
        phone,
        postalCode,
        address,
      });

      return NextResponse.json({
        url: `https://sandbox.zarinpal.com/pg/StartPay/${authority}`,
      });
    } else {
      return NextResponse.json({ message: "خطا در درخواست پرداخت" });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
