import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Weirdest Marketing Campaigns That Actually Worked",
  description: "Explore the strangest, most unconventional marketing strategies that led to massive success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
