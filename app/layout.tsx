import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Navbar from "./components/navbar";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.scss";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Johnny Velasco | ByUnitWare Studio",
  description: "Independent game developer and founder of ByUnitWare. Creating immersive singleplayer and co-op experiences for PC and PlayStation.",
  icons: {
    icon: "/aldrienLogo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <Navbar />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}