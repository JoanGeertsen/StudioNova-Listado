import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Studio NØVA",
  description: "Descripción de tu sitio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        {children}  {/* Esto renderizará el contenido de la página actual */}
        <Footer />
      </body>
    </html>
  );
}