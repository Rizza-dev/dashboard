import { getSiteSettings } from "@/lib/getSiteSettings.js";
import React from "react";
import FooterComp from "./FooterComp";
export default async function Footer() {
  const settings = await getSiteSettings();
  const { logoUrl, siteName, socialLinks } = settings;
  return (
    <FooterComp logoUrl={logoUrl} siteName={siteName} socialLinks={socialLinks} />
  );
}
