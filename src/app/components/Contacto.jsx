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

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const encabezadoRef = useFadeInOnScroll();
  const principalRef = useFadeInOnScroll();
  const ubicacionRef = useFadeInOnScroll();
  const ctaRef = useFadeInOnScroll();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    console.log('Formulario enviado:', formData);

    // 🔹 Guardar en localStorage
    const mensajes = JSON.parse(localStorage.getItem("mensajesContacto")) || [];
    mensajes.push(formData);
    localStorage.setItem("mensajesContacto", JSON.stringify(mensajes));
    
    // Simular espera
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitMessage('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: ''
    });
  } catch (error) {
    setSubmitMessage('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <>
      <Head>
        <title>Contacto | STUDIO NØVA</title>
      </Head>

      <main className="bg-[#fefaf5]">
        {/* Encabezado */}
        <section ref={encabezadoRef} className="fadein-section text-center py-16 px-8">
          <h1 className="text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-xl max-w-2xl mx-auto">
            ¿Listo para transformar tu marca? <span className='text-acentoPrimario font-bold'>Hablemos</span> sobre tu proyecto.
          </p>
        </section>

        {/*Contenido principal */}
        <section ref={principalRef} className="fadein-section flex flex-wrap py-12 px-8 gap-8 items-center justify-center max-w-6xl mx-auto">
          <div className="flex-1 min-w-[300px]">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Contáctanos</h2>
              <p className="text-lg">
                Completa el formulario y nos pondremos en contacto contigo a la brevedad. También puedes escribirnos directamente a nuestro email o contactarnos por redes sociales.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-acentoPrimario">Email</h3>
                  <p>hola@studionova.com</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-acentoPrimario">Redes Sociales</h3>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="hover:text-acentoPrimario transition-colors">Instagram</a>
                    <a href="#" className="hover:text-acentoPrimario transition-colors">Behance</a>
                    <a href="#" className="hover:text-acentoPrimario transition-colors">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-[300px] bg-white rounded-xl shadow-sm p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-acentoPrimario focus:border-acentoPrimario outline-none transition"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-acentoPrimario focus:border-acentoPrimario outline-none transition"
                />
              </div>
              
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-acentoPrimario focus:border-acentoPrimario outline-none transition"
                />
              </div>
              
              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">
                  Asunto *
                </label>
                <select
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-acentoPrimario focus:border-acentoPrimario outline-none transition"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="Branding">Branding</option>
                  <option value="Diseño Web">Diseño Web</option>
                  <option value="Packaging">Packaging</option>
                  <option value="Consulta General">Consulta General</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-acentoPrimario focus:border-acentoPrimario outline-none transition"
                ></textarea>
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-acentoPrimario text-white px-6 py-3 rounded-full text-lg font-bold transition-colors btn-anim ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-white hover:text-acentoPrimario hover:outline hover:outline-2 hover:outline-acentoPrimario'}`}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </div>
              
              {submitMessage && (
                <div className={`mt-4 p-3 rounded-lg text-center ${submitMessage.includes('Gracias') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </section>

        {/*Ubicación */}
        <section ref={ubicacionRef} className="fadein-section py-16 px-8 max-w-6xl mx-auto">
          <div className="bg-[#d7d0bf] rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6 text-acentoPrimario">Nuestro Estudio</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4">Ubicación</h3>
                <p className="mb-4">Av. Siempreviva 742, Bahía Blanca, Argentina</p>
                <p>Lunes a Viernes de 9:00 a 18:00 hs</p>
              </div>
              <div className="flex-1">
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                  <img 
                    src="/img/Mapa.png" 
                    alt="Mapa de ubicación" 
                    className="object-cover w-full h-full" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={ctaRef} className="fadein-section text-center py-16 px-8 bg-acentoPrimario text-white">
          <h2 className="text-3xl font-bold mb-6">¿Listo para comenzar tu proyecto?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Agenda una consulta gratuita para discutir tus necesidades y cómo podemos ayudarte.
          </p>
          <a 
            href="#" 
            className="inline-block bg-white text-acentoPrimario px-8 py-3 rounded-full text-lg font-bold transition-colors btn-anim hover:bg-transparent hover:text-white hover:outline hover:outline-2 hover:outline-white"
          >
            Agendar Llamada
          </a>
        </section>
      </main>
    </>
  );
};

export default Contacto;