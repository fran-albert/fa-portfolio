import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Francisco Albert",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        type="image/png"
        sizes="16x16"
        rel="icon"
        href="https://img.icons8.com/?size=100&id=fnGjD6W9jCBt&format=png&color=000000"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
