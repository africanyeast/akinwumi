import { Inter } from "next/font/google";

// Self-hosted so every device gets the same typeface. The variable goes on
// <html> so the theme's :root variables can see it.
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
