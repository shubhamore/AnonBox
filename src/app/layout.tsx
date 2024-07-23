import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/custom/Navbar";

export const metadata: Metadata = {
  title: "AnonBox",
  description: "Share anonymous messages🤫",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <Navbar/>
          {children}
          <Toaster/>
          </body>
      </AuthProvider>
    </html>
  );
}
