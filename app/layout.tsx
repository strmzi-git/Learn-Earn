import "./globals.css";
import { Varela } from "next/font/google";

const varela = Varela({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Full-stack challenges",
  description: "Learn full-stack web dev by building your own projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={varela.className}>{children}</body>
    </html>
  );
}
