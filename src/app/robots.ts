import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://akash-kumar-portfolio-x1yr.onrender.com/sitemap.xml",
  };
}