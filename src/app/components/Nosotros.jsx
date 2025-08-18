"use client";

import React, { useEffect, useRef } from 'react';
import "./fadein.css";
import "./btnanim.css";

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

const Nosotros = () => {
  // Refs para animación fade-in en secciones
  const encabezadoRef = useFadeInOnScroll();
  const identidadRef = useFadeInOnScroll();
  const equipoRef = useFadeInOnScroll();
  const filosofiaRef = useFadeInOnScroll();
  const escenaRef = useFadeInOnScroll();
  const contactoRef = useFadeInOnScroll();

  return (
    <main className="bg-[#fefaf5]">
      {/* Sección Encabezado */}
      <section ref={encabezadoRef} className="fadein-section text-center py-16 px-8 bg-[var(--fondo-claro)] text-black">
        <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
        <p className="text-xl max-w-[600px] mx-auto">
          Diseñamos con propósito. Creamos con personalidad. Somos <span className="text-acentoPrimario font-bold">STUDIO NØVA</span>
        </p>
      </section>

      {/* Sección Identidad */}
      <section ref={identidadRef} className="fadein-section flex flex-wrap py-12 px-8 gap-8 items-center justify-center">
        <div className="flex-1 min-w-[300px] max-w-[500px]">
          <h2 className="text-2xl mb-4 font-bold">¿Quiénes somos?</h2>
          <p className="text-lg">
            Somos un estudio multidisciplinario enfocado en identidad de marca y diseño estratégico. 
            Trabajamos con marcas que quieren diferenciarse y contar historias visuales poderosas.  
            <br /><br />
            <strong>STUDIO NØVA</strong> nació como un pequeño estudio creativo en <em>Bahía Blanca</em> en el año 2023. Con una visión clara y una fuerte pasión por el diseño, comenzamos dando nuestros primeros pasos junto a emprendedores locales. 
            Con el tiempo, fuimos creciendo, incorporando nuevos talentos al equipo y asumiendo proyectos cada vez más ambiciosos. Hoy seguimos comprometidos con la calidad, la creatividad y el deseo de construir marcas que dejen huella.
          </p>
        </div>
        <div className="flex-1 min-w-[300px] max-w-[500px]">
          <img 
            src="/img/local.jpeg" 
            alt="Local Studio NØVA" 
            className="w-full rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* Sección Equipo */}
      <section ref={equipoRef} className="fadein-section py-16 px-8 text-center">
        <h2 className="text-3xl mb-8">Conocé al equipo</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {/* Tarjeta 1 */}
          <div className="bg-white rounded-2xl p-6 w-64 text-center shadow-md flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 btn-anim">
            <img 
              src="/img/nosotros 1.jpg" 
              alt="Joan Geertsen" 
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <div>
              <h3 className="text-xl mb-1">Joan Geertsen</h3>
              <p className="text-gray-600 text-sm">Fundador del proyecto. Diseñador, desarrollador, gestor y creativo.</p>
            </div>
          </div>

          {/* Tarjeta 2*/}
          <div className="bg-white rounded-2xl p-6 w-64 text-center shadow-md flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 btn-anim">
            <img 
              src="/img/nosotros 2.jpg" 
              alt="Laura Gómez" 
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <div>
              <h3 className="text-xl mb-1">Laura Gómez</h3>
              <p className="text-gray-600 text-sm">Directora de Arte. Especialista en branding e identidad visual.</p>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-white rounded-2xl p-6 w-64 text-center shadow-md flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 btn-anim">
            <img 
              src="/img/nosotros 3.jpg" 
              alt="Tomás Ruiz" 
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <div>
              <h3 className="text-xl mb-1">Tomás Ruiz</h3>
              <p className="text-gray-600 text-sm">Desarrollador Frontend. Se encarga de transformar ideas en sitios funcionales.</p>
            </div>
          </div>

          {/*Tarjeta 4 */}
          <div className="bg-white rounded-2xl p-6 w-64 text-center shadow-md flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 btn-anim">
            <img 
              src="/img/nosotros 4.jpg" 
              alt="Camila Soto" 
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <div>
              <h3 className="text-xl mb-1">Camila Soto</h3>
              <p className="text-gray-600 text-sm">Gestora de proyectos. Organiza, planifica y hace que todo fluya.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Filosofía */}
      <section ref={filosofiaRef} className="fadein-section max-w-5xl mx-auto my-20 px-5">
        <h2 className="text-3xl mb-6 text-center font-semibold text-gray-800">Nuestra filosofía</h2>
        <p className="text-lg leading-relaxed text-gray-700 text-justify">
          En nuestro estudio creemos en una forma de trabajo que va más allá del diseño.  
          <span className="text-acentoPrimario font-bold">La creatividad</span> está en el centro de todo lo que hacemos: buscamos <em>soluciones únicas, auténticas y memorables</em> para cada proyecto.  
          Nos mueve un profundo <span className="text-acentoPrimario font-bold">compromiso</span> con cada marca que confía en nosotros, acompañándolas desde la estrategia hasta los últimos detalles de ejecución.  
          Trabajamos desde una cultura de <span className="text-acentoPrimario font-bold">colaboración</span>, en la que cada integrante del equipo aporta su perspectiva para construir algo más grande juntos.  
          Y por último, nos guía una <strong>pasión por el diseño bien hecho</strong>, ese que no solo se ve bien, sino que también comunica con claridad y emoción.
        </p>
      </section>

      {/* Sección Detrás de escena */}
      <section ref={escenaRef} className="fadein-section max-w-6xl mx-auto my-24 px-5">
        <h2 className="text-3xl mb-6 text-center font-semibold text-gray-800">Detrás de escena</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[200px]">
          <img 
            src="/img/bs1.jpg" 
            alt="Trabajando" 
            className="w-full h-full object-cover rounded-2xl shadow-md md:col-span-2"
          />
          <img 
            src="/img/bs2.jpg" 
            alt="Imprimiendo pruebas" 
            className="w-full h-full object-cover rounded-2xl shadow-md md:row-span-2"
          />
          <img 
            src="/img/bs3.jpg" 
            alt="Cafecito en la ofi" 
            className="w-full h-full object-cover rounded-2xl shadow-md md:row-span-2"
          />
          <img 
            src="/img/bs4.jpg" 
            alt="Equipamiento de trabajo" 
            className="w-full h-full object-cover rounded-2xl shadow-md md:col-span-2"
          />
          <img 
            src="/img/bs5.jpg" 
            alt="Impresora" 
            className="w-full h-full object-cover rounded-2xl shadow-md md:col-span-2"
          />
          <img 
            src="/img/bs6.jpg" 
            alt="Un poco de nuestra ofi" 
            className="w-full h-full object-cover rounded-2xl shadow-md md:row-span-2"
          />
        </div>
      </section>

      <section ref={contactoRef} className="fadein-section py-16 px-8 text-center bg-[var(--fondo-claro)]">
        <h2 className="text-3xl mb-6">¿Querés trabajar con nosotros?</h2>
        <div className="mt-8">
          <a 
            href="/contacto" 
            className="block text-center bg-acentoPrimario text-white px-8 py-4 mx-auto mt-8 max-w-md rounded-full text-xl font-bold transition-colors duration-300 hover:bg-white hover:outline hover:outline-2 hover:outline-acentoPrimario hover:text-acentoPrimario hover:shadow-lg btn-anim"
          >
            Contactanos
          </a>
        </div>
      </section>
    </main>
  );
};

export default Nosotros;