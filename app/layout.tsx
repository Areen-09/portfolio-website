import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { NavBar } from "@/components/nav-bar";
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ["latin"] });

const navItems = [
  {
    name: "Home",
    url: "#home",
  },
  {
    name: "About",
    url: "#about",
  },
  {
    name: "Projects",
    url: "#projects",
  },
  {
    name: "Skills",
    url: "#skills",
  },
  {
    name: "Achievements",
    url: "#achievements",
  },
  {
    name: "Contact",
    url: "#contact",
  },
];

export const metadata: Metadata = {
  title: "Areen Agrawal | Portfolio",
  description: "Pre-final year B.Tech ECE Student at VIT, Vellore",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <NavBar items={navItems} />
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}