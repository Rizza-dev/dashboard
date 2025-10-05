import { connectDB } from "@/lib/mongodb";
import SiteSettings from "@/models/SiteSettings";

export async function GET() {
  await connectDB();

  const settings = await SiteSettings.findOne();
  return Response.json(settings);
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();


  // اگر رکوردی هست، آپدیت کن، اگر نیست، بساز
  let settings = await SiteSettings.findOne();
  if (settings) {
    await SiteSettings.updateOne({}, data);
  } else {
    settings = await SiteSettings.create(data);
  }

  return Response.json({ success: true });
}
