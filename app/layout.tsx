import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css"; 
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Niwe Newen | Domos y Terapias en la Naturaleza",
  description: "Desconecta del estrés en Niwe Newen. Estadías en domo, terapias alternativas, bosque nativo y bienestar en San Pedro de Melipilla.",
  keywords: "domo, glamping, san pedro de melipilla, terapias, bosque nativo, flores de bach, relajación, turismo chile",
  openGraph: {
    title: "Niwe Newen | Domos y Terapias en la Naturaleza",
    description: "Desconecta del estrés en Niwe Newen. Estadías en domo, terapias alternativas y bienestar.",
    url: "https://niwenewen.cl",
    type: "website",
    locale: "es_CL",
    siteName: "Niwe Newen"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased text-[#002315] bg-[#FAF9F6]">
        <Navbar/>
        <main className="relative overflow-hidden min-h-screen">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
