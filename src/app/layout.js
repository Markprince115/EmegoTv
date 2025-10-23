import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/Header";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "EMEGO TV | Home Page",
  description: "social application, web application, social web app design, social webapp website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" nighteye="disabled">
      <body
        className={`${poppins.variable} font-poppins antialiased`}
      >
          <Header/>
          <Toaster richColors position="top-right" />
          {children}
      </body>
    </html>
  );
}
