import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phần mềm học môn khoa học tự nhiên THCS",
  description: "Phần mềm học môn khoa học tự nhiên THCS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

