import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ToDo-List",
  description: "Learning Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">{children}</body>
    </html>
  );
}
