import { Footer, Header } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Indie creator  | muho.dev",
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
        <Header />
        <main style={{ minHeight: "calc(100vh - 10rem)" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}