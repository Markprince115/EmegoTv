import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/Header";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "../../context/AuthContext";

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
    <ClerkProvider>
    <html lang="en" nighteye="disabled">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <AuthProvider>
          <Header/>
          <Toaster richColors position="top-right" />
          {children}
        </AuthProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
