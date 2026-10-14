// src/pages/store/Nosotros.jsx
import React from 'react';

function Nosotros() {
  return (
    <div style={{ maxWidth: '1000px', margin: '30px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      
      <div style={{ backgroundColor: '#f6e0b5', padding: '12px 20px', borderRadius: '6px', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1a252f', margin: 0 }}>Nuestra Historia</h2>
      </div>

      <div style={{ backgroundColor: '#ffffff', padding: '35px 30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', textAlign: 'center' }}>
        
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a252f', marginBottom: '15px' }}>El Comienzo</h3>
        
        <p style={{ color: '#718096', fontSize: '14px', lineHeight: '1.6', marginBottom: '15px' }}>
          Todo comenzó en el año 2018, cuando los jóvenes emprendedores y amantes de los animales notaron una falta de opciones verdaderamente saludables y personalizadas para la nutrición y el cuidado de las mascotas en su ciudad.
        </p>
        
        <p style={{ color: '#718096', fontSize: '14px', lineHeight: '1.6', marginBottom: '25px' }}>
          Cansados de encontrar solo productos comerciales genéricos, decidieron renunciar a sus empleos corporativos para unirse y dar vida a un proyecto con propósito.
        </p>

        <div style={{ borderRadius: '8px', overflow: 'hidden', marginBottom: '25px', maxHeight: '280px', width: '100%' }}>
          <img
            src="/img/linares.jpg"
            alt="Comienzo de PETS"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => { e.target.src = '/img/descarga.jpg'; }}
          />
        </div>

        <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a252f', marginBottom: '15px' }}>El Crecimiento</h3>
        
        <p style={{ color: '#718096', fontSize: '14px', lineHeight: '1.6', marginBottom: '15px' }}>
          Lo que inició en un pequeño local atendido únicamente por ellos dos, enfocado inicialmente en la venta de galletas artesanales y accesorios hechos a mano, evolucionó rápidamente gracias a la recomendación de la comunidad local.
        </p>
        
        <p style={{ color: '#718096', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
          Para 2021, el negocio amplió sus horizontes incorporando servicios de medicina preventiva, estética animal con enfoque libre de estrés y una línea completa de alimentos naturales certificados.
        </p>

      </div>
    </div>
  );
}

export default Nosotros;