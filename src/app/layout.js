import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/Header";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap"
});


export const metadata = {
  title: "EMEGO TV | Home Page",
  description: "social application, web application, social web app design, social webapp website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" nighteye="disabled">
      <body
        className={`${inter.variable} antialiased`}
      >
          <Header/>
          <Toaster richColors position="top-right" />
          {children}
      </body>
    </html>
  );
}
