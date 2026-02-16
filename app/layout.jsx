import {Outfit, Cormorant_Garamond } from "next/font/google";
import ErrorBoundary from "@/components/ErrorBoundary";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cormorantSerif = Cormorant_Garamond({
  variable: "--font-cormorant-serif",
  subsets: ["latin"],
});



export const metadata = {
  title: "Portfolio",
  description: "Welcome to Kirtan's Portfolio!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${cormorantSerif.variable} antialiased`}
      >
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  );
}
