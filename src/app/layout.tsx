import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import HeaderMain from "../components/HeaderMain";
import HeaderTop from "../components/HeaderTop";
import "./globals.css";
import { Providers } from "./Providers/page";

const inter = Unbounded({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "MetaPlanet",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <HeaderTop /> */}
        <HeaderMain />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
