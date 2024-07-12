import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ui/theme-povider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mock.io",
  description: "Mock.io, The interview simulator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
