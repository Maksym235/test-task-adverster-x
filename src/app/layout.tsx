import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const geistSans = Manrope({
  variable: "--font-man",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Users list",
  description: "test task for positon frontend developer in AdversterX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistSans.variable}>{children}</body>
    </html>
  );
}
