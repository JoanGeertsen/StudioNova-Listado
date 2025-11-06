"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  //Estados iniciales
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [imgError, setImgError] = useState(false);
  
 
  const pathname = usePathname();

  
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

 
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  if (!isMounted) {
    return <div style={{ backgroundColor: '#fefaf5', height: '64px' }}></div>;
  }

  const navItems = [
    { href: "/", text: "Inicio" },
    { href: "/Nosotros", text: "Nosotros" },
    { href: "/Servicios", text: "Servicios" },
    { href: "/contacto", text: "Contacto" },
    { href: "/admin", text: "Admin" }
  ];

  return (
    <header className="flex items-center justify-between p-4 relative" style={{ backgroundColor: '#fefaf5' }}>
     
      <Link href="/" className="flex items-center gap-3 z-50">
        {imgError ? (
          <div className="w-[58px] h-[58px] bg-gray-200 flex items-center justify-center">
            <span className="text-xs">LOGO</span>
          </div>
        ) : (
          <Image 
            src="/img/logo.png" 
            alt="Logo Studio NØVA" 
            width={58} 
            height={58}
            priority
            onError={() => setImgError(true)}
          />
        )}
        <h1 className="text-xl m-0">STUDIO NØVA</h1>
      </Link>

      {/* Botón hamburguesa*/}
      <button
        aria-label="Abrir menú"
        className="text-2xl md:hidden bg-none border-none cursor-pointer text-black z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      
      <nav 
        className={`fixed top-0 left-0 w-full h-full flex items-center justify-center
          transition-all duration-300 ease-in-out
          ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 md:opacity-100'}
          md:static md:w-auto md:h-auto md:transform-none md:translate-x-0
          z-40 bg-[#fefaf5] md:bg-transparent`}
      >
        <ul className="flex flex-col items-center gap-8 md:flex-row md:gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-black text-xl md:text-base transition-colors
                  hover:text-acentoPrimario relative
                  ${pathname === item.href ? 'text-acentoPrimario font-bold' : ''}`}
              >
                {item.text}
                {pathname === item.href && (
                  <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-acentoPrimario"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
