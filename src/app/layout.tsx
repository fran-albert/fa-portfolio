import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: "Francisco Albert | Full Stack Developer & Systems Engineer",
  description: "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building innovative and scalable web applications.",
  keywords: ["Francisco Albert", "Full Stack Developer", "React", "Next.js", "TypeScript", "Web Developer", "Systems Engineer"],
  authors: [{ name: "Francisco Albert" }],
  openGraph: {
    title: "Francisco Albert | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, and modern web technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          type="image/png"
          sizes="16x16"
          rel="icon"
          href="https://img.icons8.com/?size=100&id=fnGjD6W9jCBt&format=png&color=000000"
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
