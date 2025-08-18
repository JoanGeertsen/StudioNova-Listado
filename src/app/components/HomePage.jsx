"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import "./fadein.css";
import "./btnanim.css";

// Animación
function useFadeInOnScroll() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("animate-fadein-up");
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return ref;
}

export default function Homepage() {
  // Animacion
  const introRef = useFadeInOnScroll();
  const mensajeRef = useFadeInOnScroll();
  const trabajoRef = useFadeInOnScroll();
  const contactoRef = useFadeInOnScroll();
  const testimoniosRef = useFadeInOnScroll();
  const ctaRef = useFadeInOnScroll();

  return (
    <main className="bg-[#fefaf5]">
      {/* Sección Intro */}
      <section ref={introRef} className="fadein-section text-center px-4 py-16 max-w-[1200px] mx-auto">
        <p className="text-[#747474] text-xl font-medium text-right mb-1">
          Hecho para destacar
        </p>
        <h2 className="text-5xl text-right font-medium text-[#222] mb-8 mt-0">
          Un estudio de <span className="text-acentoPrimario font-bold">branding</span> motivado por la{" "}
          <span className="text-black font-semibold italic tracking-wide">estrategia</span> y la{" "}
          <span className="text-black font-semibold italic tracking-wide">visión</span>
        </h2>
        
        <div className="hidden md:block relative w-full max-w-[2000px] mx-auto rounded-xl overflow-hidden">
          <Image
            src="/img/temporalHorizontal.png"
            alt="Imagen de estudio y visión"
            width={2000}
            height={1000}
            className="w-full h-auto rounded-xl block mx-auto"
            priority
          />
        </div>

        <div className="block md:hidden w-full mb-4 rounded-xl overflow-hidden">
          <Image
            src="/img/temporalVertical.png"
            alt="Imagen de estudio y visión"
            width={700}
            height={1100}
            className="w-85 h-auto rounded-xl block mx-auto"
            priority
          />
        </div>
      </section>

      {/* Sección Mensaje principal */}
      <section ref={mensajeRef} className="fadein-section py-20 px-8">
        <div className="max-w-[1200px] mx-auto flex justify-between items-start gap-12 flex-wrap">
          <div className="flex-1 min-w-[50%]">
            <span className="inline-block bg-[#f5f2ec] text-acentoPrimario font-semibold text-sm px-4 py-1 rounded-full tracking-wider">
              Creatividad Estratégica
            </span>
            <h2 className="text-4xl font-bold text-[#111] mt-4">
              Elevá tu marca con diseño intencionado
            </h2>
          </div>
          <div className="flex-1 min-w-[40%] text-[#444] leading-relaxed text-base flex items-center mt-4 md:mt-8">
            <p>
              Creamos branding, packaging, diseño web y contenido que deja huella.<br />
              Demos vida a tu visión con un diseño que habla e inspira.
            </p>
          </div>
        </div>

        {/* Galería de imágenes */}
        <div className="flex justify-center items-stretch gap-6 flex-wrap mt-12">
          {/* Imágenes verticales (visible en PC) */}
          <div className="hidden md:block w-[22%] rounded-xl overflow-hidden transition-transform hover:scale-103 img-zoom">
            <Image src="/img/vertical1v3.png" alt="Imagen vertical 1" width={300} height={500} className="w-full h-full object-cover" />
          </div>
          <div className="hidden md:block w-[22%] rounded-xl overflow-hidden transition-transform hover:scale-103 img-zoom">
            <Image src="/img/vertical2.png" alt="Imagen vertical 2" width={300} height={500} className="w-full h-full object-cover" />
          </div>
          <div className="hidden md:block w-[22%] rounded-xl overflow-hidden transition-transform hover:scale-103 img-zoom">
            <Image src="/img/vertical3.png" alt="Imagen vertical 3" width={300} height={500} className="w-full h-full object-cover" />
          </div>
          <div className="hidden md:block w-[22%] rounded-xl overflow-hidden transition-transform hover:scale-103 img-zoom">
            <Image src="/img/vertical4.png" alt="Imagen vertical 4" width={300} height={500} className="w-full h-full object-cover" />
          </div>

          {/* Imágenes horizontales (Visible en cel)*/}
          <div className="block md:hidden w-full mb-4 rounded-xl overflow-hidden img-zoom">
            <Image src="/img/Horizontal1v3.png" alt="Imagen horizontal 1" width={800} height={400} className="w-full h-auto" />
          </div>
          <div className="block md:hidden w-full mb-4 rounded-xl overflow-hidden img-zoom">
            <Image src="/img/Horizontal2.png" alt="Imagen horizontal 2" width={800} height={400} className="w-full h-auto" />
          </div>
          <div className="block md:hidden w-full mb-4 rounded-xl overflow-hidden img-zoom">
            <Image src="/img/Horizontal3.png" alt="Imagen horizontal 3" width={800} height={400} className="w-full h-auto" />
          </div>
          <div className="block md:hidden w-full mb-4 rounded-xl overflow-hidden img-zoom">
            <Image src="/img/Horizontal4.png" alt="Imagen horizontal 4" width={800} height={400} className="w-full h-auto" />
          </div>
        </div>

        <div className="text-center mt-8">
          <a 
            href="/Servicios" 
            className="inline-block bg-acentoPrimario text-white px-8 py-4 rounded-full text-xl font-bold max-w-[400px] mx-auto transition-colors hover:bg-white hover:text-acentoPrimario hover:outline hover:outline-2 hover:outline-acentoPrimario mt-12 btn-anim"
          >
            Explora nuestros servicios
          </a>
        </div>
      </section>

      {/* Sección Trabajo Expuesto - Versión modificada */}
      <section ref={trabajoRef} className="fadein-section grid grid-cols-1 md:grid-cols-3 gap-4 p-8 max-w-[1200px] mx-auto">
        {/* Módulo 1 - Texto */}
        <div className="bg-[#d7d0bf] rounded-xl p-4 md:col-span-1">
          <h2 className="text-2xl font-bold mb-2">Trabajo expuesto</h2>
          <span className="bg-gray-200 text-center w-[150px] px-4 py-1 rounded-full text-sm inline-block mb-4">
            Branding design
          </span>
          <Image src="/img/logoexpuesto.png" alt="Studio Nova" width={1100} height={1100} className="w-full h-auto" />
        </div>
        
        {/* Módulo 2 - Imagen */}
        <div className="rounded-xl overflow-hidden md:col-span-1">
          <Image src="/img/modulo2.webp" alt="Imagen 1" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
        </div>
        
        {/* Módulo 3 - Imagen */}
        <div className="rounded-xl overflow-hidden md:col-span-1">
          <Image src="/img/Modulo3.webp" alt="Imagen 2" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
        </div>
        
        {/* Módulo 4 - Imagen */}
        <div className="rounded-xl overflow-hidden md:col-span-1">
          <Image src="/img/Modulo4.jpg" alt="Imagen 3" width={400} height={400} className="w-full h-full object-cover rounded-xl" />
        </div>
        
        {/* Módulo 5 - Texto destacado */}
        <div className="bg-[#d7d0bf] rounded-xl p-4 md:col-span-2 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-2">Signet</h3>
          <p className="text-lg leading-relaxed mb-4">
            El trabajo de diseño de <strong>branding para Signet</strong> se centró en crear una identidad visual que combinara simplicidad con dinamismo. El objetivo era desarrollar una marca que fuera moderna, creativa y divertida, pero mantuviera un nivel de seriedad apropiado para el producto.
          </p>
          <a 
            href="https://signetseparadores.shop" 
            className="inline-block bg-gray-200 text-center w-[150px] px-4 py-1 rounded-full text-lg transition-colors hover:text-acentoPrimario hover:outline hover:outline-acentoPrimario"
          >
            Visitar web
          </a>
        </div>
      </section>

      {/* Sección Contacto */}
      <section ref={contactoRef} className="fadein-section text-center py-16 px-8">
        <p className="text-4xl font-semibold max-w-[800px] mx-auto mb-8 leading-relaxed text-[#333]">
          Con nosotros, obtenés{" "}
          <span
            className="inline"
            style={{
              backgroundImage: "linear-gradient(to right, #ff5f2e 100%, #ff5f2e 100%)",
              backgroundRepeat: "repeat-x",
              backgroundPosition: "0 60%",
              backgroundSize: "100% 5px",
              paddingBottom: "2px",
            }}
          >
            más que solo una marca
          </span>
          , una <em>experiencia de marca completa.</em> Ideal para negocios que están listos para invertir en una <strong>presencia fuerte y memorable.</strong>
        </p>

        <div className="text-center mt-8">
          <a 
            href="/contacto" 
            className="inline-block bg-acentoPrimario text-white px-8 py-4 rounded-full text-xl font-bold max-w-[400px] mx-auto transition-colors hover:bg-white hover:text-acentoPrimario hover:outline hover:outline-2 hover:outline-acentoPrimario btn-anim"
          >
            Contactanos
          </a>
        </div>

        <div className="w-full max-w-[1200px] mx-auto mt-16 overflow-hidden rounded-3xl h-[600px]">
          <Image 
            src="/img/paquete.jpg" 
            alt="Imagen representativa del paquete" 
            width={1200} 
            height={600}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* Sección Testimonios */}
      <section ref={testimoniosRef} className="fadein-section py-16 px-8 text-center">
        <div className="max-w-[700px] mx-auto mb-12 relative px-8 py-4">
          <span className="text-acentoPrimario text-6xl block mb-4 font-serif">“</span>
          <p className="text-xl italic text-[#333] mb-4 leading-relaxed">
            Desde el primer momento entendieron lo que quería transmitir con mi marca. El proceso fue claro, ágil y lleno de creatividad. Lograron una identidad visual que se siente auténtica, moderna y que conecta con mi público.
          </p>
          <p className="font-bold text-[#555]">– Camila R., Editora del proyecto "Lecturas del Sur"</p>
        </div>

        <div className="max-w-[700px] mx-auto mb-12 relative px-8 py-4">
          <span className="text-acentoPrimario text-6xl block mb-4 font-serif">“</span>
          <p className="text-xl italic text-[#333] mb-4 leading-relaxed">
            Trabajar con el equipo fue una experiencia genial. Me ayudaron a dar forma a una marca que hoy se destaca por su estilo único. Me sorprendió lo versátil que es el diseño, cómo se adapta a distintos formatos y colores sin perder personalidad.
          </p>
          <p className="font-bold text-[#555]">– Javier T., Fundador de "Café Ilustrado"</p>
        </div>

        <div className="max-w-[700px] mx-auto mb-12 relative px-8 py-4">
          <span className="text-acentoPrimario text-6xl block mb-4 font-serif">“</span>
          <p className="text-xl italic text-[#333] mb-4 leading-relaxed">
            Lo que más valoro es cómo lograron combinar lo profesional con lo lúdico. El diseño tiene fuerza, pero también frescura. Mis clientes siempre comentan lo atractivo que se ve el branding. Fue una inversión que valió totalmente la pena.
          </p>
          <p className="font-bold text-[#555]">– Lucía M., Directora de "Proyecto Marcapáginas"</p>
        </div>
      </section>

      <section ref={ctaRef} className="fadein-section py-24 px-8 text-center">
        <p className="text-4xl font-normal text-[#333] max-w-[900px] mx-auto leading-relaxed">
          Nos encantaría saber de <strong>vos</strong>. <br />
          <span className="font-bold text-acentoPrimario mt-4 inline-block">
            <u>Escribinos</u> si querés construir algo increíble con nosotros.
          </span>
        </p>
      </section>     
    </main>
  );
}