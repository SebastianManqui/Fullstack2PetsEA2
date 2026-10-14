// src/pages/store/Ofertas.jsx
import React, { useState } from 'react';
import { agregarAlCarrito } from '../../data/dataService';

function Ofertas() {
  const [alerta, setAlerta] = useState('');

  const productosOferta = [
    {
      codigo: 'OF01',
      nombre: 'Fit Formula Perro Adulto',
      descripcion: 'Saco 10 kg - Nutrición completa y balanceada.',
      precioOriginal: 30000,
      precio: 25000,
      descuento: '17% OFF',
      imagen: '/img/a.jpg'
    },
    {
      codigo: 'OF02',
      nombre: 'Doko Carne y Verduras',
      descripcion: 'Saco 15 kg - Gran sabor y digestibilidad.',
      precioOriginal: 22000,
      precio: 18000,
      descuento: '18% OFF',
      imagen: '/img/a1.jpg'
    },
    {
      codigo: 'OF03',
      nombre: 'CatChow Gato Adulto',
      descripcion: 'Saco 15 kg - Salud urinaria reforzada.',
      precioOriginal: 32000,
      precio: 25000,
      descuento: '22% OFF',
      imagen: '/img/a4gato.jpg'
    },
    {
      codigo: 'OF04',
      nombre: 'Pack Pelotas Interactivas',
      descripcion: 'Juguete resistente para perros de todo tamaño.',
      precioOriginal: 12000,
      precio: 8500,
      descuento: '29% OFF',
      imagen: '/img/jugeteperro.jpg'
    }
  ];

  const handleAgregar = (prod) => {
    if (typeof agregarAlCarrito === 'function') {
      agregarAlCarrito(prod);
      setAlerta(`¡${prod.nombre} agregado al carrito!`);
      setTimeout(() => setAlerta(''), 2500);
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '30px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      
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

      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '30px 20px',
        textAlign: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
        marginBottom: '35px',
        borderLeft: '6px solid #e53e3e'
      }}>
        <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#1a252f', margin: '0 0 8px 0' }}>
          OFERTAS DEL MES PETS 🐾
        </h1>
        <p style={{ fontSize: '15px', color: '#6c757d', margin: 0 }}>
          Descuentos exclusivos en alimentos seleccionados y accesorios. ¡Aprovecha antes de que se agoten!
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '25px'
      }}>
        {productosOferta.map((prod) => (
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
              boxSizing: 'border-box',
              position: 'relative'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              backgroundColor: '#e53e3e',
              color: '#ffffff',
              fontWeight: 'bold',
              fontSize: '12px',
              padding: '5px 10px',
              borderRadius: '20px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.15)'
            }}>
              {prod.descuento}
            </div>

            <div style={{
              width: '100%',
              height: '190px',
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
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1a252f', margin: '0 0 6px 0' }}>
                  {prod.nombre}
                </h3>
                <p style={{ fontSize: '13px', color: '#6c757d', margin: '0 0 12px 0' }}>
                  {prod.descripcion}
                </p>
              </div>

              <div>
                <div style={{ marginBottom: '12px' }}>
                  <span style={{ fontSize: '13px', color: '#a0aec0', textDecoration: 'line-through', marginRight: '8px' }}>
                    ${prod.precioOriginal.toLocaleString()}
                  </span>
                  <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#e53e3e' }}>
                    ${prod.precio.toLocaleString()} CLP
                  </span>
                </div>

                <button
                  onClick={() => handleAgregar(prod)}
                  style={{
                    width: '100%',
                    padding: '11px',
                    backgroundColor: '#28a745',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ofertas;