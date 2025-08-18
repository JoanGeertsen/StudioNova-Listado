"use client";
import React, { useEffect, useState } from "react";

const Admin = () => {
  const [mensajes, setMensajes] = useState([]);
  const [filtro, setFiltro] = useState(""); // nuevo estado para el filtro

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("mensajesContacto")) || [];
    setMensajes(datos);
  }, []);

  // Aplicar filtro
  const mensajesFiltrados =
    filtro === "" ? mensajes : mensajes.filter((msg) => msg.asunto === filtro);

  const filtrosDisponibles = [
    "Branding",
    "Diseño Web",
    "Packaging",
    "Consulta General",
    "Otro",
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Formularios recibidos</h2>

      {/* Botones de filtro */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setFiltro("")}
          className={`px-4 py-2 rounded ${
            filtro === "" ? "bg-acentoPrimario text-white" : "bg-gray-200"
          }`}
        >
          Todos
        </button>
        {filtrosDisponibles.map((tipo) => (
          <button
            key={tipo}
            onClick={() => setFiltro(tipo)}
            className={`px-4 py-2 rounded ${
              filtro === tipo ? "bg-acentoPrimario text-white" : "bg-gray-200"
            }`}
          >
            {tipo}
          </button>
        ))}
      </div>

      {/* Lista de mensajes */}
      {mensajesFiltrados.length === 0 ? (
        <p>No hay mensajes recibidos.</p>
      ) : (
        <ul className="space-y-4">
          {mensajesFiltrados.map((msg, idx) => (
            <li key={idx} className="border rounded-lg p-4 bg-white shadow">
              <p>
                <strong>Nombre:</strong> {msg.nombre}
              </p>
              <p>
                <strong>Email:</strong> {msg.email}
              </p>
              <p>
                <strong>Teléfono:</strong> {msg.telefono}
              </p>
              <p>
                <strong>Asunto:</strong> {msg.asunto}
              </p>
              <p>
                <strong>Mensaje:</strong> {msg.mensaje}
              </p>
            </li>
          ))}
        </ul>
      )}

      {/* Botón para borrar todo */}
      <button
        onClick={() => {
          localStorage.removeItem("mensajesContacto");
          setMensajes([]);
        }}
        className="bg-red-500 text-white px-4 py-2 rounded mt-10"
      >
        Borrar todos los mensajes
      </button>
    </div>
  );
};

export default Admin;
