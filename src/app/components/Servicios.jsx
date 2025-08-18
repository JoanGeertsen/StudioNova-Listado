"use client";

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
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

const Servicios = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const encabezadoRef = useFadeInOnScroll();
  const contenidoRef = useFadeInOnScroll();
  const brandingRef = useFadeInOnScroll();
  const packsRef = useFadeInOnScroll();
  const webRef = useFadeInOnScroll();
  const complementosRef = useFadeInOnScroll();
  const procesoRef = useFadeInOnScroll();
  const ayudaRef = useFadeInOnScroll();

  const toggleItem = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const services = [
    {
      title: "Esenciales",
      description: "Construye una base sólida para tu marca con los elementos clave necesarios para comenzar, de manera rápida y asequible.",
      includes: "Suite de logos, paleta de colores, tipografía y un mini panel de marca."
    },
    {
      title: "Firma",
      description: "Una identidad de marca completa con los elementos esenciales para posicionar tu negocio hacia el crecimiento y el reconocimiento.",
      includes: "Estrategia de marca, suite de logos, paleta de colores, tipografía, 3 piezas de material corporativo, 1 diseño de empaque de producto, 5 diseños de publicaciones para Instagram y guía de marca."
    },
    {
      title: "A Medida",
      description: "Diseñamos un plan de acción de acuerdo a las necesidades únicas de tu marca para asegurar una presencia potente y coherente, tanto para productos digitales como físicos.",
      includes: "El alcance se define contigo y puede abarcar: estrategia de marca, suite de logos, paleta de colores, material corporativo, diseño de packaging, plantillas para redes sociales, diseño web y cualquier otro elemento necesario para alcanzar tus objetivos."
    }
  ];

  return (
    <>
      <Head>
        <title>Nuestros Servicios | STUDIO NØVA</title>
      </Head>

      <main className="bg-[#fefaf5]">
        {/* Sección encabezado*/}
        <section ref={encabezadoRef} className="fadein-section text-center py-16 px-8">
          <h1 className="text-4xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Creamos <span className='text-acentoPrimario font-bold'>identidades distintivas</span>, que resuenan, conectan e inspiran.
          </p>
        </section>

        {/* Sección contenido principal */}
        <section ref={contenidoRef} className="fadein-section flex flex-wrap py-12 px-8 gap-8 items-center justify-center">
          <div className="flex-1 min-w-[300px] max-w-[500px]">
            <img 
              src="/img/servicios.jpg" 
              alt="Nuestros servicios" 
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          <div className="flex-1 min-w-[300px] max-w-[500px] space-y-6">
            <h2 className="text-2xl font-bold">¿Qué hacemos?</h2>
            <p className="text-lg">
              En <span className='text-acentoPrimario font-semibold'>STUDIO NØVA</span> acompañamos a marcas en su desarrollo desde la idea hasta su expresión visual. Ofrecemos servicios de branding, diseño web y packaging con una mirada estratégica, estética y funcional. Nos involucramos a fondo para que cada decisión de diseño potencie el mensaje y la personalidad de tu proyecto.
            </p>
            <p className="text-lg">
              <span className='font-bold'>Nuestro enfoque es </span> <span className='font-bold italic'>colaborativo: </span> trabajamos junto a vos para entender la esencia de tu marca y transformarla en una identidad sólida y coherente. Desde la creación del concepto hasta el asesoramiento integral en comunicación visual, creamos soluciones creativas que te ayuden a lanzar, posicionar o renovar tu producto con impacto y claridad.
            </p>
          </div>
        </section>

        {/* Frase destacada */}
        <section className="fadein-section text-center py-12 px-8">
          <h2 className="text-3xl font-bold text-gray-600">
            Transformando ideas en marcas auténticas
          </h2>
        </section>

        {/*Sección Branding */}
        <section ref={brandingRef} className="fadein-section py-8 px-8 max-w-6xl mx-auto">
          <div className="bg-[#d7d0bf] rounded-xl shadow-sm p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-acentoPrimario">Branding</h3>
              <p className="text-lg mb-4">
                Creamos marcas con propósito y personalidad
              </p>
              <p className="text-gray-700">
                Hoy, más que nunca, una marca necesita mucho más que presencia: debe tener una identidad clara, auténtica y alineada con los valores de su público. Construimos marcas que comunican con intención, combinando estrategia, estética y personalidad.
              </p>
            </div>
            <div className="flex-1">
              <img 
                src="/img/logoexpuesto.png" 
                alt="Branding" 
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </section>

      {/* Sección servicios desplegables*/}
<section ref={packsRef} className="fadein-section py-12 px-8 max-w-4xl mx-auto">
  <h3 className="text-2xl font-bold mb-8 text-center">Nuestros Packs</h3>
  
  <div className="space-y-6">
    {services.map((service, index) => (
      <div 
        key={index} 
        className="border-b border-gray-500 pb-6 last:border-b-0"
      >
        <button 
          className="w-full flex justify-between items-start text-left group"
          onClick={() => toggleItem(index)}
        >
          <h4 className="text-xl font-bold text-gray-800 group-hover:text-acentoPrimario transition-colors duration-200">
            {service.title}
          </h4>
          <span className="ml-4 text-4xl text-gray-500 group-hover:text-acentoPrimario transition-colors duration-200 font-light">
            {expandedItem === index ? '-' : '+'}
          </span>
        </button>
        <div 
          className={`overflow-hidden transition-all duration-300 ${expandedItem === index ? 'max-h-96 mt-4' : 'max-h-0'}`}
        >
          <div className="pr-8">
            <p className="text-gray-700 mb-3">{service.description}</p>
            <p className="text-sm text-gray-500">
              <span className="font-medium text-gray-600">Incluye: </span>{service.includes}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
  <div className="text-center mt-8">
    <a 
      href="/contacto" 
      className="inline-block bg-acentoPrimario text-white px-8 py-4 rounded-full text-xl font-bold max-w-[400px] mx-auto transition-colors hover:bg-white hover:text-acentoPrimario hover:outline hover:outline-2 hover:outline-acentoPrimario btn-anim"
    >
      Adquirir
    </a>
  </div>
</section>

{/*Sección Web Design */}
<section ref={webRef} className="fadein-section py-12 px-4 sm:px-8 max-w-6xl mx-auto">
  <div className="flex flex-col md:flex-row gap-6 md:gap-4 items-stretch">
    {/*Primera columna */}
    <div className="bg-[#d7d0bf] rounded-xl p-6 md:p-8 w-full md:max-w-[300px] flex flex-col">
      <h4 className="text-2xl font-bold mb-6">Experiencia Digital</h4>        
      <div className="space-y-6 flex-grow">
        <p className="text-gray-700">Diseño de interfaz de usuario</p>     
        <p className="text-gray-700">Diseño de experiencia de usuario</p>       
        <p className="text-gray-700">Prototipado</p>  
        <p className="text-gray-700">Desarrollo de webflow</p>  
        <p className="text-gray-700">Testeo multiplataforma y multinavegador</p>
      </div>
    </div>
    {/* Segunda columna */}
    <div className="flex-1">
      <div className="h-full flex">
        <img 
          src="/img/web.png" 
          alt="Diseño Web" 
          className="w-full h-full object-cover rounded-xl"
          style={{ minHeight: '100%' }}
        />
      </div>
    </div>
    {/* Tercera columna */}
    <div className="flex-1 flex flex-col justify-between mt-6 md:mt-0 md:ml-4">
      <div>
        <h4 className="text-2xl font-bold mb-4">Diseño web</h4>
        <p className="text-gray-700 mb-6">
          Creamos sitios web visualmente impactantes que combinan estética, usabilidad y rendimiento. Al comprender cómo interactúan los usuarios con tu marca en línea, desarrollamos soluciones escalables que cuentan tu historia de forma efectiva, mejoran la experiencia del usuario y generan resultados reales. Un diseño estratégico que convierte tu presencia digital en una experiencia memorable.
        </p>
      </div>
      <div className="text-center md:text-left mb-4 md:mb-0">
        <a 
          href="/contacto" 
          className="inline-block bg-acentoPrimario text-white px-6 py-3 rounded-full text-lg font-bold transition-colors hover:bg-white hover:text-acentoPrimario hover:outline hover:outline-2 hover:outline-acentoPrimario btn-anim"
        >
          Adquirir
        </a>
      </div>
    </div>
  </div>
</section>

{/* Sección Complementos */}
<section ref={complementosRef} className="fadein-section py-16 px-4 sm:px-8 max-w-6xl mx-auto">
  <div className="text-center mb-12">
    <h3 className="text-3xl font-bold mb-6">Servicios adicionales</h3>
    <p className="text-xl text-gray-700 max-w-5xl mx-auto">
      Más allá del branding y el diseño web, ofrecemos una variedad de complementos personalizables que potencian la visibilidad, coherencia e interacción de tu marca en todos los puntos de contacto, tanto digitales como físicos.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> {/* Reduje el gap a gap-4 */}
    {/* Tarjeta 1 - Digitales y Redes */}
    <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6 hover:shadow-lg transition-shadow duration-300">
      <h4 className="text-xl font-bold mb-4 text-acentoPrimario">Esenciales Digitales y para Redes Sociales</h4>
      <p className="text-gray-700 mb-4">
        Fortalecé tu presencia online con recursos visuales diseñados estratégicamente para redes sociales y otros medios digitales.
      </p>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Plantillas para redes sociales</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Portadas para destacados de Instagram</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Portadas de álbumes</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Ilustraciones de marca</span>
        </li>
      </ul>
    </div>

    {/* Tarjeta 2 */}
    <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6 hover:shadow-lg transition-shadow duration-300">
      <h4 className="text-xl font-bold mb-4 text-acentoPrimario">Material Impreso y de Marketing</h4>
      <p className="text-gray-700 mb-4">
        Asegurá la coherencia de tu marca en cada punto de contacto con el cliente mediante materiales impresos de alta calidad.
      </p>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Tarjetas personales</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Tarjetas de agradecimiento</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Flyers / Folletos</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Menús</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Stickers</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Patrón de marca</span>
        </li>
      </ul>
    </div>

    {/* Tarjeta 3 */}
    <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6 hover:shadow-lg transition-shadow duration-300">
      <h4 className="text-xl font-bold mb-4 text-acentoPrimario">Packaging y Merchandising</h4>
      <p className="text-gray-700 mb-4">
        Creá una experiencia de compra y unboxing memorable con empaques y productos personalizados.
      </p>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Etiquetas</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Tags colgantes (swing tags)</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Packaging</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Sobres y cajas para envíos</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Diseños de prendas</span>
        </li>
      </ul>
    </div>
  </div>

  <div className="text-center mt-12">
    <a 
      href="/contacto" 
      className="inline-block bg-acentoPrimario text-white px-8 py-3 rounded-full text-lg font-bold transition-colors hover:bg-white hover:text-acentoPrimario hover:outline hover:outline-2 hover:outline-acentoPrimario btn-anim"
    >
      Consultar complementos
    </a>
  </div>
</section>

{/* Sección Proceso */}
<section ref={procesoRef} className="fadein-section py-16 px-4 sm:px-8 max-w-6xl mx-auto">
  {/* Encabezado */}
  <div className="mb-12">
    <h3 className="text-3xl font-bold mb-6 text-left">Nuestro proceso</h3>
    <p className="text-xl text-gray-700 max-w-3xl">
      En Studio Nova acompañamos a las marcas desde la visión hasta la realidad mediante un proceso estructurado y colaborativo que garantiza claridad estratégica, excelencia creativa y una ejecución con impacto.
    </p>
  </div>

  {/* Pasos del proceso */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Bloque 1*/}
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h4 className="text-xl font-bold mb-3 text-acentoPrimario">1. Descubrimiento</h4>
      <p className="text-gray-600 font-medium mb-4">Sentar las bases</p>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Investigación de clientes</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Análisis de mercado</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Revisión de competidores</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Análisis de tendencias</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Identificación del público objetivo</span>
        </li>
      </ul>
    </div>

    {/* Bloque 2*/}
    <div className="bg-[#d7d0bf] rounded-xl p-6 shadow-sm border border-gray-100">
      <h4 className="text-xl font-bold mb-3 text-acentoPrimario">2. Ideación</h4>
      <p className="text-gray-600 font-medium mb-4">Definir la estrategia</p>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Posicionamiento y arquitectura de marca</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Naming y estrategia de marca</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Mapeo del recorrido del cliente</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Storytelling de marca</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Planificación post-lanzamiento</span>
        </li>
      </ul>
    </div>

    {/* Bloque 3 */}
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h4 className="text-xl font-bold mb-3 text-acentoPrimario">3. Diseño</h4>
      <p className="text-gray-600 font-medium mb-4">Dar vida a la marca</p>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Diseño de identidad visual</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Sistemas de diseño</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Diseño gráfico</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Diseño de interacción</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Diseño de packaging</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Motion design</span>
        </li>
      </ul>
    </div>

    {/* Bloque 4  */}
    <div className="bg-[#d7d0bf] rounded-xl p-6 shadow-sm border border-gray-100">
      <h4 className="text-xl font-bold mb-3 text-acentoPrimario">4. Revisión</h4>
      <p className="text-gray-600 font-medium mb-4">Refinar para generar impacto</p>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Feedback de usuarios y testing</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Mejoras iterativas de diseño</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Revisión de coherencia visual y verbal</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Ajustes en mensaje y estética</span>
        </li>
      </ul>
    </div>

    {/* Bloque 5 */}
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h4 className="text-xl font-bold mb-3 text-acentoPrimario">5. Finalización</h4>
      <p className="text-gray-600 font-medium mb-4">Perfeccionar la experiencia</p>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Documentación de marca</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Entrega de assets finales</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Prototipos interactivos</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Revisión previa al lanzamiento</span>
        </li>
      </ul>
    </div>

    {/* Bloque 6 */}
    <div className="bg-[#d7d0bf] rounded-xl p-6 shadow-sm border border-gray-100">
      <h4 className="text-xl font-bold mb-3 text-acentoPrimario">6. Lanzamiento</h4>
      <p className="text-gray-600 font-medium mb-4">Generar impacto</p>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Configuración de presencia digital</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Ejecución de estrategia de marketing</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Soporte post-lanzamiento</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>Monitoreo de rendimiento</span>
        </li>
      </ul>
    </div>
  </div>
</section>

{/* Sección como ayudamos */}
<section ref={ayudaRef} className="fadein-section py-16 px-4 sm:px-8 max-w-6xl mx-auto">
  <div className="flex flex-col md:flex-row gap-8 items-center">
    <div className="flex-1">
      <img 
        src="/img/box.png" 
        alt="Cómo ayudamos" 
        className="w-full h-auto rounded-xl shadow-sm object-cover"
      />
    </div>

    <div className="flex-1 bg-white rounded-xl p-8 shadow-sm">
      <h3 className="text-3xl font-bold mb-6 text-acentoPrimario">Cómo Ayudamos</h3>
      <div className="space-y-4 text-gray-700">
        <p>
          Invertir en diseño de marca va mucho más allá de lo estético: es una decisión estratégica en un mercado cada vez más competitivo. Una marca sólida cuenta una historia, genera conexiones emocionales y deja una impresión duradera.
        </p>
        <p>
          Con nuestra experiencia, te ayudamos a destacar, mantener coherencia y adaptarte a las tendencias que van cambiando. ¿El resultado? Una marca con mayor valor, marketing más fluido y una base sólida para crecer a largo plazo.
        </p>
        <p>
          Nuestro objetivo es crear marcas que conecten, inspiren lealtad y hagan que comunicar tu propuesta sea mucho más fácil.
        </p>
      </div>
      <div className="mt-8">
        <a 
          href="/contacto" 
          className="inline-block bg-acentoPrimario text-white px-8 py-3 rounded-full text-lg font-bold transition-colors hover:bg-white hover:text-acentoPrimario hover:outline hover:outline-2 hover:outline-acentoPrimario btn-anim"
        >
          Adquirir
        </a>
      </div>
    </div>
  </div>
</section>
      </main>
    </>
  );
};

export default Servicios;