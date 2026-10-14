// src/pages/store/Carrito.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  obtenerCarrito,
  agregarAlCarrito,
  eliminarDelCarrito,
  vaciarCarrito,
  obtenerTotalCarrito,
  getProductos
} from '../../data/dataService';

function Carrito() {
  const navigate = useNavigate();
  const [itemsCarrito, setItemsCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [productosDisponibles, setProductosDisponibles] = useState([]);

  const recargarCarrito = () => {
    setItemsCarrito(obtenerCarrito());
    setTotal(obtenerTotalCarrito());
  };

  useEffect(() => {
    recargarCarrito();
    if (typeof getProductos === 'function') {
      setProductosDisponibles(getProductos().slice(0, 8));
    }
  }, []);

  const handleAgregar = (prod) => {
    agregarAlCarrito(prod);
    recargarCarrito();
  };

  const handleEliminar = (codigo) => {
    eliminarDelCarrito(codigo);
    recargarCarrito();
  };

  const handleVaciar = () => {
    vaciarCarrito();
    recargarCarrito();
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '30px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'start' }}>
        
        <div>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '20px', color: '#1a252f' }}>Lista de productos</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '15px' }}>
            {productosDisponibles.map((prod) => (
              <div key={prod.codigo} style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ height: '100px', backgroundColor: '#f8f9fa', borderRadius: '6px', marginBottom: '10px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={prod.imagen} alt={prod.nombre} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} onError={(e) => { e.target.src = '/img/a.jpg'; }} />
                </div>
                <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#2d3748', marginBottom: '4px' }}>{prod.nombre}</div>
                <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#2b6cb0', marginBottom: '8px' }}>${prod.precio.toLocaleString()}</div>
                <button onClick={() => handleAgregar(prod)} style={{ backgroundColor: '#1a202c', color: '#ffffff', border: 'none', borderRadius: '4px', padding: '6px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}>
                  Añadir
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '20px', color: '#1a252f' }}>Carrito de Compras</h2>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#ffffff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <thead>
              <tr style={{ backgroundColor: '#f7fafc', borderBottom: '1px solid #e2e8f0', textAlign: 'left', fontSize: '13px', color: '#4a5568' }}>
                <th style={{ padding: '10px' }}>Imagen</th>
                <th style={{ padding: '10px' }}>Nombre</th>
                <th style={{ padding: '10px' }}>Precio</th>
                <th style={{ padding: '10px' }}>Cantidad</th>
                <th style={{ padding: '10px' }}>Subtotal</th>
                <th style={{ padding: '10px' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {itemsCarrito.length === 0 ? (
                <tr>
                  <td colSpan="6" style={{ padding: '30px', textAlign: 'center', color: '#a0aec0', fontSize: '14px' }}>
                    Tu carrito está vacío. ¡Añade productos desde el catálogo!
                  </td>
                </tr>
              ) : (
                itemsCarrito.map((item) => (
                  <tr key={item.codigo} style={{ borderBottom: '1px solid #edf2f7', fontSize: '13px' }}>
                    <td style={{ padding: '10px' }}>
                      <div style={{ width: '35px', height: '35px', backgroundColor: '#f8f9fa', borderRadius: '4px', overflow: 'hidden' }}>
                        <img src={item.imagen} alt={item.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.src = '/img/a.jpg'; }} />
                      </div>
                    </td>
                    <td style={{ padding: '10px', fontWeight: 'bold' }}>{item.nombre}</td>
                    <td style={{ padding: '10px' }}>${item.precio.toLocaleString()}</td>
                    <td style={{ padding: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <button onClick={() => handleEliminar(item.codigo)} style={{ padding: '2px 6px', border: '1px solid #cbd5e0', background: '#fff', borderRadius: '3px', cursor: 'pointer' }}>-</button>
                        <span>{item.cantidad}</span>
                        <button onClick={() => handleAgregar(item)} style={{ padding: '2px 6px', border: '1px solid #cbd5e0', background: '#fff', borderRadius: '3px', cursor: 'pointer' }}>+</button>
                      </div>
                    </td>
                    <td style={{ padding: '10px', fontWeight: 'bold' }}>${(item.precio * item.cantidad).toLocaleString()}</td>
                    <td style={{ padding: '10px' }}>
                      <button onClick={() => handleEliminar(item.codigo)} style={{ backgroundColor: '#e53e3e', color: '#fff', border: 'none', padding: '5px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <div style={{ marginTop: '20px', textAlign: 'right' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px' }}>
              Total ${total.toLocaleString()}
            </h3>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button onClick={handleVaciar} style={{ backgroundColor: '#718096', color: '#ffffff', border: 'none', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
                Limpiar
              </button>
              <button
                onClick={() => {
                  if (itemsCarrito.length === 0) {
                    alert('Debes agregar al menos un producto al carrito para comprar.');
                  } else {
                    navigate('/checkout');
                  }
                }}
                style={{ backgroundColor: '#28a745', color: '#ffffff', border: 'none', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                Comprar ahora
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Carrito;