import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://akash-kumar-portfolio-x1yr.onrender.com"),

  title: {
    default: "Akash Kumar | Software Developer Portfolio",
    template: "%s | Akash Kumar",
  },

  description:
    "Explore the portfolio of Akash Kumar, MCA student and aspiring software developer. Discover projects, technical skills, experience, and expertise in Java, Python, SQL, web development, and software engineering.",

  keywords: [
    "Akash Kumar",
    "Akash Kumar Portfolio",
    "Software Developer",
    "MCA Student",
    "Java Developer",
    "Python Developer",
    "Web Developer",
    "Full Stack Developer",
    "React Developer",
    "SQL Developer",
    "Ghaziabad Developer",
    "Software Engineering Projects",
  ],

  authors: [{ name: "Akash Kumar" }],
  creator: "Akash Kumar",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://akash-kumar-portfolio-x1yr.onrender.com",
    siteName: "Akash Kumar Portfolio",
    title: "Akash Kumar | Software Developer Portfolio",
    description:
      "Discover my projects, technical skills, experience, and journey in software development.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Akash Kumar | Software Developer Portfolio",
    description:
      "Explore my software development projects, skills, and professional journey.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}