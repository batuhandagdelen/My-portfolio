import { Syne, Outfit } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "Batuhan Dağdelen",
  description:
    "Personal portfolio of Batuhan Dağdelen — Frontend Developer crafting modern, high-performance web experiences.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
};

export default RootLayout;
