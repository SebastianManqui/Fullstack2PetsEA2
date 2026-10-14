// src/pages/store/Productos.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProductos, agregarAlCarrito } from '../../data/dataService';

function Productos() {
  const [productos, setProductos] = useState([]);
  const [alerta, setAlerta] = useState('');

  useEffect(() => {
    if (typeof getProductos === 'function') {
      setProductos(getProductos());
    }
  }, []);

  const handleAgregar = (prod) => {
    if (typeof agregarAlCarrito === 'function') {
      agregarAlCarrito(prod);
      setAlerta(`¡${prod.nombre} agregado al carrito!`);
      setTimeout(() => setAlerta(''), 2500);
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '30px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      
      {/* ALERTA DE AGREGADO */}
      {alerta && (
        <div style={{
          backgroundColor: '#d4edda',
          color: '#155724',
          padding: '12px',
          borderRadius: '8px',
          textAlign: 'center',
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>
          {alerta}
        </div>
      )}

      <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1a252f', marginBottom: '25px', textAlign: 'left' }}>
        Productos y Servicios
      </h1>

      {/* GRILLA ESTRUCTURADA DE PRODUCTOS */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: '25px'
      }}>
        {productos.map((prod) => (
          <div
            key={prod.codigo}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxSizing: 'border-box'
            }}
          >
            {/* CONTENEDOR DE IMAGEN CON FALLBACK AUTOMÁTICO */}
            <div style={{
              width: '100%',
              height: '200px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              padding: '10px'
            }}>
              <img
                src={prod.imagen}
                alt={prod.nombre}
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                onError={(e) => {
                  if (e.target.src.endsWith('.png')) {
                    e.target.src = e.target.src.replace('.png', '.jpg');
                  } else {
                    e.target.src = '/img/a.jpg';
                  }
                }}
              />
            </div>

            <div style={{ textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1a252f', margin: '0 0 8px 0' }}>
                  {prod.nombre}
                </h2>
                <p style={{ fontSize: '13px', color: '#6c757d', margin: '0 0 15px 0', minHeight: '38px', lineHeight: '1.4' }}>
                  {prod.descripcion}
                </p>
              </div>

              <div>
                <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#2b6cb0', margin: '0 0 15px 0' }}>
                  ${prod.precio.toLocaleString()} CLP
                </p>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Link
                    to={`/producto/${prod.codigo}`}
                    style={{
                      flex: '1',
                      padding: '10px 5px',
                      border: '1px solid #0083b0',
                      color: '#0083b0',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      fontSize: '13px',
                      textDecoration: 'none',
                      textAlign: 'center'
                    }}
                  >
                    Detalles
                  </Link>

                  <button
                    onClick={() => handleAgregar(prod)}
                    style={{
                      flex: '1.5',
                      padding: '10px 5px',
                      backgroundColor: '#0083b0',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      fontSize: '13px',
                      cursor: 'pointer'
                    }}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;