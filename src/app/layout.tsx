import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "@/components/ui/toaster"

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
          {children}
          <Toaster/>
          </body>
      </AuthProvider>
    </html>
  );
}
