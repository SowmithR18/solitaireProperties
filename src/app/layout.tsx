import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavBar } from "./components/nav/NavBar";
import { Footer } from "./components/nav/Footer";

const nexa = localFont({
  src: [
    {
      path: "../../public/Fonts/nexa/Nexa Thin.otf",
      style: "normal",
      weight: "100",
    },
    {
      path: "../../public/Fonts/nexa/Nexa Light.otf",
      style: "normal",
      weight: "200",
    },
    {
      path: "../../public/Fonts/nexa/Nexa Regular.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../public/Fonts/nexa/Nexa Bold.otf",
      style: "normal",
      weight: "500",
    },
    {
      path: "../../public/Fonts/nexa/Nexa XBold.otf",
      style: "normal",
      weight: "600",
    },
  ],
  display: "swap",
  variable: "--font-nexa",
});

// const nexa = localFont({
//   src: "../../public/Fonts/nexa/Nexa Regular.otf",
//   display: "swap",
//   variable: "--font-nexa",
//   style: "normal",
// });

export const metadata: Metadata = {
  title: "Solitaire Property Management",
  description: "Generated by Solitaire Property Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nexa.variable} antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
