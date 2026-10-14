// src/pages/store/Contacto.jsx
import React, { useState } from 'react';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setFormData({ nombre: '', correo: '', mensaje: '' });
    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <div style={{ maxWidth: '750px', margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a252f', marginBottom: '8px', textAlign: 'center' }}>
        Contacto
      </h1>
      <p style={{ textAlign: 'center', color: '#6c757d', marginBottom: '30px', fontSize: '15px' }}>
        ¿Tienes alguna duda o consulta? Escríbenos y te responderemos a la brevedad.
      </p>

      {enviado && (
        <div style={{
          backgroundColor: '#d4edda',
          color: '#155724',
          padding: '14px',
          borderRadius: '8px',
          textAlign: 'center',
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>
          ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
        </div>
      )}

      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '35px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        boxSizing: 'border-box'
      }}>
        <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1a252f', marginBottom: '25px', textAlign: 'center' }}>
          Envíanos un Mensaje Interno
        </h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#2d3748', marginBottom: '8px' }}>
              Nombre Completo*
            </label>
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              required
              value={formData.nombre}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #cbd5e0',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#2d3748', marginBottom: '8px' }}>
              Correo Electrónico*
            </label>
            <input
              type="email"
              name="correo"
              placeholder="correo@ejemplo.com"
              required
              value={formData.correo}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #cbd5e0',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#2d3748', marginBottom: '8px' }}>
              Mensaje*
            </label>
            <textarea
              name="mensaje"
              rows="5"
              placeholder="Escribe tu consulta aquí..."
              required
              value={formData.mensaje}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #cbd5e0',
                fontSize: '14px',
                boxSizing: 'border-box',
                resize: 'vertical'
              }}
            ></textarea>
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#0083b0',
              color: '#ffffff',
              border: 'none',
              borderRadius: '25px',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(0, 131, 176, 0.3)'
            }}
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;