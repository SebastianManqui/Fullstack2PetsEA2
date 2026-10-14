// src/pages/store/Categoria.jsx
import React, { useState } from 'react';
import { agregarAlCarrito } from '../../data/dataService';

function Categoria() {
  const categorias = [
    { id: 'cat1', nombre: 'Alimentos De Perros', img: '/img/a1.jpg' },
    { id: 'cat2', nombre: 'Juguetes', img: '/img/jugeteperro.jpg' },
    { id: 'cat3', nombre: 'Accesorios', img: '/img/cama.jpg' },
    { id: 'cat4', nombre: 'Alimento De Gatos', img: '/img/a6gato.jpg' }
  ];

  const productosPorCategoria = {
    cat1: [
      { codigo: 'C1-1', nombre: 'Fit Formula', precio: 35000, imagen: '/img/a.jpg' },
      { codigo: 'C1-2', nombre: 'Doko', precio: 18000, imagen: '/img/a1.jpg' },
      { codigo: 'C1-3', nombre: 'Dog Chow', precio: 35000, imagen: '/img/image1.jpg' },
      { codigo: 'C1-4', nombre: 'Master Dog', precio: 22000, imagen: '/img/image.jpg' },
      { codigo: 'C1-5', nombre: 'Guardian', precio: 20000, imagen: '/img/perros2.jpg' },
      { codigo: 'C1-6', nombre: 'Voller', precio: 52000, imagen: '/img/perros3.jpg' },
      { codigo: 'C1-7', nombre: 'Champions Dog', precio: 24000, imagen: '/img/perros4.jpg' },
      { codigo: 'C1-8', nombre: 'DogBuffer', precio: 42000, imagen: '/img/perros1.jpg' },

    ],
    cat2: [
    { codigo: 'C2-1', nombre: 'Pack De Pelotas', precio: 8500, imagen: '/img/pelotas1.jpg' },
    { codigo: 'C2-2', nombre: 'Juego Pelotas', precio: 10000, imagen: '/img/pelotas2.jpg' },
    { codigo: 'C2-3', nombre: 'Raton', precio: 2500, imagen: '/img/raton1.jpg' },
    { codigo: 'C2-4', nombre: 'Peluche', precio: 4500, imagen: '/img/juguetes4.jpg' }
    ],
    cat3: [
      { codigo: 'C3-1', nombre: 'Cama 1', precio: 15000, imagen: '/img/cama.jpg' },
      { codigo: 'C3-2', nombre: 'Cama 2', precio: 28000, imagen: '/img/cama2.jpg' },
      { codigo: 'C3-3', nombre: 'Cama 3', precio: 9500, imagen: '/img/cama3.jpg' },
      { codigo: 'C3-4', nombre: 'Cama 4', precio: 7000, imagen: '/img/cama4.jpg' },
      { codigo: 'C3-5', nombre: 'Pack de Collares', precio: 15000, imagen: '/img/arnes1.jpg' },
      { codigo: 'C3-6', nombre: 'Arnes Para Perro', precio: 12000, imagen: '/img/arnes2.jpg' },
      { codigo: 'C3-7', nombre: 'Pack de Collares De Gato', precio: 9500, imagen: '/img/collares1.jpg' },
      { codigo: 'C3-8', nombre: 'Capa Para Perros', precio: 7000, imagen: '/img/capa1.jpg' }
    ],
    cat4: [
      { codigo: 'C4-1', nombre: 'Nomade Adulto', precio: 22000, imagen: '/img/a3gato.jpg' },
      { codigo: 'C4-2', nombre: 'Catchow', precio: 25000, imagen: '/img/a4gato.jpg' },
      { codigo: 'C4-3', nombre: 'Bravery Cachorro', precio: 45000, imagen: '/img/a5gato.jpg' },
      { codigo: 'C4-4', nombre: 'Raza', precio: 15000, imagen: '/img/a6gato.jpg' },
      { codigo: 'C4-5', nombre: 'Gati Adulto', precio: 20000, imagen: '/img/a7gato.jpg' },
      { codigo: 'C4-6', nombre: 'Champions Cat', precio: 27000, imagen: '/img/a8gato.jpg' }
    ]
  };

  const [catSeleccionada, setCatSeleccionada] = useState('cat1');
  const [alerta, setAlerta] = useState('');
  const [imgErrores, setImgErrores] = useState({});

  const catEncontrada = categorias.find((item) => item.id === catSeleccionada);
  const nombreCategoria = catEncontrada ? catEncontrada.nombre : 'Categoría 1';
  const productosMostrados = productosPorCategoria[catSeleccionada] || [];

  const handleAgregar = (prod) => {
    if (typeof agregarAlCarrito === 'function') {
      agregarAlCarrito(prod);
    }
    setAlerta(`¡${prod.nombre} agregado al carrito!`);
    setTimeout(() => {
      setAlerta('');
    }, 2500);
  };

  const handleImgError = (key) => {
    setImgErrores((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        marginBottom: '50px'
      }}>
        {categorias.map((cat) => {
          const esActiva = catSeleccionada === cat.id;
          const hasError = imgErrores[`cat-${cat.id}`];

          return (
            <div
              key={cat.id}
              onClick={() => setCatSeleccionada(cat.id)}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                padding: '15px',
                width: '180px',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                border: esActiva ? '2px solid #0083b0' : '2px solid #e2e8f0',
                boxSizing: 'border-box'
              }}
            >
              <div style={{
                width: '100px',
                height: '100px',
                backgroundColor: '#d1d5db',
                borderRadius: '6px',
                margin: '0 auto 12px auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6b7280',
                fontSize: '13px',
                fontWeight: 'bold',
                overflow: 'hidden'
              }}>
                {!hasError ? (
                  <img
                    src={cat.img}
                    alt={cat.nombre}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={() => handleImgError(`cat-${cat.id}`)}
                  />
                ) : (
                  <span>100 x 100</span>
                )}
              </div>
              <div style={{ fontWeight: 'bold', color: '#1a252f', fontSize: '15px' }}>
                {cat.nombre}
              </div>
            </div>
          );
        })}
      </div>

      <h2 style={{
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#1a252f',
        marginBottom: '25px',
        textAlign: 'left'
      }}>
        {nombreCategoria}
      </h2>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        {productosMostrados.map((prod) => {
          const hasError = imgErrores[`prod-${prod.codigo}`];

          return (
            <div
              key={prod.codigo}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                padding: '15px',
                width: 'calc(25% - 15px)',
                minWidth: '200px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div style={{
                width: '100%',
                height: '180px',
                backgroundColor: '#d1d5db',
                borderRadius: '6px',
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6b7280',
                fontSize: '18px',
                fontWeight: 'bold',
                overflow: 'hidden'
              }}>
                {!hasError ? (
                  <img
                    src={prod.imagen}
                    alt={prod.nombre}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    onError={() => handleImgError(`prod-${prod.codigo}`)}
                  />
                ) : (
                  <span>400 x 300</span>
                )}
              </div>

              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1a252f', margin: '0 0 8px 0' }}>
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
          );
        })}
      </div>
    </div>
  );
}

export default Categoria;