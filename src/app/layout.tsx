import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alxn Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` font-sans antialiased bg-primary text-white`}>
        {children}
      </body>
    </html>
  );
}
