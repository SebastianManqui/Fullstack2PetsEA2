// src/pages/store/Blog.jsx
import React from 'react';

function Blog() {
  const noticias = [
    {
      id: 1,
      titulo: 'NUESTROS AVANCES Y PRÓXIMAS MARCAS',
      subtitulo: 'Nuevas líneas de alimento en PETS',
      fecha: '10 de Octubre, 2026',
      contenido: 'En PETS seguimos evolucionando para ofrecer la mejor experiencia de compra. Hemos mejorado nuestro sistema de inventarios en tiempo real y optimizado la logística de envíos para garantizar entregas en menos de 24 horas en la Región Metropolitana.',
      secciones: [
        {
          encabezado: 'Próximas incorporaciones en el catálogo:',
          puntos: [
            'Acana & Orijen: Alimentos de alta proteína natural y recetas holísticas.',
            'Royal Canin Veterinary Diet: Líneas médicas para cuidados digestivos, renales y de peso.',
            'Hill\'s Prescription Diet: Nutrición avanzada formulada por veterinarios.',
            'Taste of the Wild: Fórmulas sin granos para perros y gatos de todas las edades.'
          ]
        }
      ]
    },
    {
      id: 2,
      titulo: 'PRÓXIMAS APERTURAS Y EXPANSIÓN REGIONAL',
      subtitulo: 'Nuevas sucursales en Chile',
      fecha: '05 de Octubre, 2026',
      contenido: '¡Nuestro plan de expansión en regiones ya está en marcha! Estamos trabajando en la apertura de nuevos puntos de venta presenciales para estar más cerca de nuestros clientes a lo largo de todo el país.',
      secciones: [
        {
          encabezado: 'Nuevas sucursales confirmadas para este año:',
          puntos: [
            'La Serena: Av. Balmaceda',
            'Viña del Mar: Sector Poniente / Av. Libertad'
          ]
        }
      ]
    }
  ];

  return (
    <div style={{ maxWidth: '1100px', margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      
      <h1 style={{
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#1a252f',
        marginBottom: '30px',
        textAlign: 'left'
      }}>
        Noticias y Novedades PETS
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
        gap: '25px',
        alignItems: 'stretch'
      }}>
        {noticias.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '28px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxSizing: 'border-box',
              borderTop: '4px solid #0083b0'
            }}
          >
            <div>
              <span style={{ fontSize: '12px', color: '#6c757d', fontWeight: 'bold' }}>
                {item.fecha}
              </span>
              
              <h2 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#1a252f',
                margin: '10px 0 12px 0',
                lineHeight: '1.3'
              }}>
                {item.titulo}
              </h2>

              <p style={{
                fontSize: '14px',
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                {item.contenido}
              </p>

              {item.secciones && item.secciones.map((sec, idx) => (
                <div key={idx} style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '8px', marginTop: '15px' }}>
                  <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#2b6cb0', margin: '0 0 10px 0' }}>
                    {sec.encabezado}
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#4a5568', lineHeight: '1.6' }}>
                    {sec.puntos.map((punto, pIdx) => (
                      <li key={pIdx} style={{ marginBottom: '6px' }}>
                        {punto}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;