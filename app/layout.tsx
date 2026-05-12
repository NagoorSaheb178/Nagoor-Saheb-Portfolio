import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shaik Nagoor Saheb | Full Stack & AI Developer",
  description: "Building intelligent systems and scalable web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0a0a0a] text-slate-200 antialiased selection:bg-blue-500/30 selection:text-blue-200`}>
        {children}
      </body>
    </html>
  );
}
