import mongoose from "mongoose";

const SiteSettingsSchema = new mongoose.Schema({
  siteName: {
    type: String,
    default: "لوازم آشپزخانه برلیان",
  },

  logoUrl: {
    type: String,
    default: "/logo.png",
  },
  bannerImage: { type: String, default: "" },
  bannerMobileImage: { type: String, default: "" },
  bannerText: { type: String, default: "" },
  bannerText2: { type: String, default: "" },
  CTA: { type: String, default: "مشاهده محصولات" },
  socialLinks: {
    instagram: { type: String, default: "" },
    telegram: { type: String, default: "" },
    x: { type: String, default: "" },
    whatsApp: { type: String, default: "" },
  },
});

export default mongoose.models.SiteSettings ||
  mongoose.model("SiteSettings", SiteSettingsSchema);
