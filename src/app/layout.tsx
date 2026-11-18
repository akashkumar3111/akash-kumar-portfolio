import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akash Kumar | Software Developer",
  description: "Portfolio of Akash Kumar — software developer building thoughtful, scalable digital experiences.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
