import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/Header";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: '400'
});


export const metadata = {
  title: "EMEGO TV | Home Page",
  description: "social application, web application, social web app design, social webapp website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" nighteye="disabled">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
