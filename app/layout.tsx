import type { Metadata } from "next";
import "./globals.css"; 
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "NiweNewen",
  description: "Desconecta en la naturaleza. ¡Te esperan relajantes estadías en domo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="relative overflow-hidden">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
