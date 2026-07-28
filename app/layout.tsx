import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SHAIK NAGOOR SAHEB | Portfolio",
  description: "Building intelligent systems and scalable web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Plus+Jakarta+Sans:wght@400;500&family=Space+Grotesk:wght@500;700&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Anton:wght@100..900&family=Plus+Jakarta+Sans:wght@100..900&family=Space+Grotesk:wght@100..900&display=swap" rel="stylesheet"/>
      </head>
      <body className={`bg-background text-on-background font-body-md text-body-md dot-pattern min-h-screen selection:bg-primary-container`}>
        {children}
      </body>
    </html>
  );
}
