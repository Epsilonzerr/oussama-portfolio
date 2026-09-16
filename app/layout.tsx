import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oussama Moustarzik | Software & AI Engineer",
  description:
    "Portfolio of Oussama Moustarzik — Software & AI Engineer building intelligent systems, scalable APIs and AI-powered products.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
