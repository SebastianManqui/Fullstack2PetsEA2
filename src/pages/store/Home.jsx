// src/pages/store/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProductos, agregarAlCarrito } from '../../data/dataService';

function Home() {
  const [destacados, setDestacados] = useState([]);
  const [alerta, setAlerta] = useState('');

  useEffect(() => {
    if (typeof getProductos === 'function') {
      const prods = getProductos();
      setDestacados(prods.slice(0, 4));
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
    <div style={{ maxWidth: '1100px', margin: '30px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      
      {alerta && (
        <div style={{
          backgroundColor: '#d4edda',
          color: '#155724',
          padding: '12px',
          borderRadius: '6px',
          textAlign: 'center',
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>
          {alerta}
        </div>
      )}

      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '30px 20px',
        textAlign: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        marginBottom: '40px'
      }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a252f', marginBottom: '10px' }}>
          Bienvenidos a PETS
        </h1>
        <p style={{ fontSize: '15px', color: '#6c757d', maxWidth: '600px', margin: '0 auto 20px auto' }}>
          Página web dedicada a la venta de productos e insumos de alta calidad para tus mascotas.
        </p>
        
        <Link
          to="/productos"
          style={{
            display: 'inline-block',
            backgroundColor: '#0083b0',
            color: '#ffffff',
            padding: '10px 24px',
            borderRadius: '20px',
            fontWeight: 'bold',
            textDecoration: 'none'
          }}
        >
          Ver Catálogo
        </Link>

        <div style={{
          width: '100%',
          height: '280px',
          borderRadius: '10px',
          overflow: 'hidden',
          marginTop: '25px',
          backgroundColor: '#e2e8f0'
        }}>
          <img
            src="/img/a1.jpg"
            alt="Banner PETS"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              e.target.src = '/img/a1 (1).jpg';
            }}
          />
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a252f', margin: 0 }}>
            Productos Destacados
          </h2>
          <Link to="/productos" style={{ color: '#0083b0', fontWeight: 'bold', textDecoration: 'none' }}>
            Ver todos →
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '20px'
        }}>
          {destacados.map((prod) => (
            <div
              key={prod.codigo}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                padding: '15px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxSizing: 'border-box'
              }}
            >
              <div style={{
                width: '100%',
                height: '180px',
                backgroundColor: '#f8f9fa',
                borderRadius: '6px',
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                padding: '8px'
              }}>
                <img
                  src={prod.imagen}
                  alt={prod.nombre}
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 'bold', color: '#1a252f', margin: '0 0 6px 0' }}>
                  {prod.nombre}
                </h3>
                <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#2b6cb0', margin: '0 0 12px 0' }}>
                  ${prod.precio.toLocaleString()} CLP
                </p>
                <button
                  onClick={() => handleAgregar(prod)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    backgroundColor: '#28a745',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Home;