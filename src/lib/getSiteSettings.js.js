import SiteSettings from "@/models/SiteSettings";
import { connectDB } from "./mongodb";

let cachedSettings = null;
export async function getSiteSettings() {
  if (cachedSettings) return cachedSettings;
  await connectDB();
  const settings = await SiteSettings.findOne().lean();
  if (!settings) {
    const defaultSettings = await SiteSettings.create({});
    cachedSettings = JSON.parse(JSON.stringify(defaultSettings));
  } else {
    cachedSettings = JSON.parse(JSON.stringify(settings));
  }

  return cachedSettings;
}
