// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { obtenerCarrito } from '../data/dataService';

function Navbar() {
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const actualizarContador = () => {
      const carrito = obtenerCarrito ? obtenerCarrito() : [];
      const cuenta = carrito.reduce((sum, item) => sum + item.cantidad, 0);
      setTotalItems(cuenta);
    };

    actualizarContador();
    const interval = setInterval(actualizarContador, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '15px 30px', fontFamily: 'sans-serif', position: 'sticky', top: 0, zIndex: 1000 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
        
        <Link to="/" style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a252f', textDecoration: 'none' }}>
          PETS
        </Link>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link to="/" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>Home</Link>
          <Link to="/productos" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>Productos</Link>
          <Link to="/categorias" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>Categorías</Link>
          <Link to="/ofertas" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>Ofertas</Link>
          <Link to="/nosotros" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>Nosotros</Link>
          <Link to="/blog" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>Blogs</Link>
          <Link to="/contacto" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>Contacto</Link>
          <Link to="/ubicacion" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>Ubicaciones</Link>
        </div>

        <Link
          to="/carrito"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#28a745',
            color: '#ffffff',
            padding: '10px 18px',
            borderRadius: '20px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '14px',
            boxShadow: '0 2px 6px rgba(40, 167, 69, 0.3)'
          }}
        >
          🛒 Carrito / Comprar {totalItems > 0 && `(${totalItems})`}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;