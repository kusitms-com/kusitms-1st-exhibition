import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KUSITMS 1st Exhibition",
  description: "큐시즘 1회 전시회 - Engage Energy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
