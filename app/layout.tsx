import "@radix-ui/themes/styles.css";
// import "./theme-config.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import { Card, Container, Theme } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme accentColor="purple">
          <Container>
            <Card>
              <Navbar />
            </Card>

            <main className="p-4">{children}</main>
          </Container>
        </Theme>
      </body>
    </html>
  );
}
