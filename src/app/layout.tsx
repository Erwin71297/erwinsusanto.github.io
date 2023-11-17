import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./component/navigation";

export const metadata: Metadata = {
  title: "CV Erwin Susanto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={"${inter.className} text-slate-100 container mx-auto p-2"}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
``