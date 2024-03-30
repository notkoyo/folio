import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "@/styles/globals.css";

import { cn } from "@/lib/utils";
import Nav from "@/components/nav";
import Cursor from "@/components/ui/cursor";

const rubik = Rubik({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Kaiden Riley",
  description: "Full-stack developer, designer, and creator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-[#d9d9d9] font-sans antialiased", rubik.variable)}>
        <Nav />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
