// src/pages/store/Checkout.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { obtenerCarrito, obtenerTotalCarrito, vaciarCarrito } from '../../data/dataService';

function Checkout() {
  const navigate = useNavigate();
  const itemsCarrito = obtenerCarrito();
  const total = obtenerTotalCarrito();

  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    calle: '',
    departamento: '',
    region: 'Región Metropolitana de Santiago',
    comuna: 'Cerrillos',
    indicaciones: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const ordenGuardada = {
      nroOrden: Math.floor(10000000 + Math.random() * 90000000).toString(),
      codigoOrden: 'ORDER' + Math.floor(10000 + Math.random() * 90000),
      cliente: {
        nombre: formData.nombre,
        apellidos: formData.apellidos,
        correo: formData.correo
      },
      direccion: {
        calle: formData.calle,
        departamento: formData.departamento,
        region: formData.region,
        comuna: formData.comuna,
        indicaciones: formData.indicaciones
      },
      items: itemsCarrito,
      total: total
    };

    localStorage.setItem('pets_ultima_orden', JSON.stringify(ordenGuardada));
    vaciarCarrito();

    navigate('/pago-correcto');
  };

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '30px', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', fontFamily: 'sans-serif' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', margin: 0, color: '#1a252f' }}>Carrito de compra</h2>
          <span style={{ fontSize: '13px', color: '#718096' }}>Completa la siguiente información</span>
        </div>
        <div style={{ backgroundColor: '#007bff', color: '#ffffff', padding: '8px 16px', borderRadius: '6px', fontWeight: 'bold', fontSize: '15px' }}>
          Total a pagar: ${total.toLocaleString()}
        </div>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '30px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #e2e8f0', textAlign: 'left', fontSize: '13px', color: '#718096' }}>
            <th style={{ padding: '8px' }}>Imagen</th>
            <th style={{ padding: '8px' }}>Nombre</th>
            <th style={{ padding: '8px' }}>Precio</th>
            <th style={{ padding: '8px' }}>Cantidad</th>
            <th style={{ padding: '8px' }}>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {itemsCarrito.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ padding: '15px', textAlign: 'center', color: '#a0aec0' }}>No hay productos en el carrito</td>
            </tr>
          ) : (
            itemsCarrito.map((item) => (
              <tr key={item.codigo} style={{ borderBottom: '1px solid #edf2f7', fontSize: '13px' }}>
                <td style={{ padding: '8px' }}>
                  <div style={{ width: '35px', height: '35px', backgroundColor: '#f8f9fa', borderRadius: '4px', overflow: 'hidden' }}>
                    <img src={item.imagen} alt={item.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.src = '/img/a.jpg'; }} />
                  </div>
                </td>
                <td style={{ padding: '8px', fontWeight: 'bold' }}>{item.nombre}</td>
                <td style={{ padding: '8px' }}>${item.precio.toLocaleString()}</td>
                <td style={{ padding: '8px' }}>{item.cantidad}</td>
                <td style={{ padding: '8px', fontWeight: 'bold' }}>${(item.precio * item.cantidad).toLocaleString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <form onSubmit={handleSubmit}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#2d3748', marginBottom: '5px' }}>Información del cliente</h3>
        <p style={{ fontSize: '12px', color: '#a0aec0', marginBottom: '15px' }}>Completa la siguiente información</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#4a5568', marginBottom: '5px' }}>Nombre*</label>
            <input required type="text" name="nombre" placeholder="Ej: Pedro" value={formData.nombre} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e0', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#4a5568', marginBottom: '5px' }}>Apellidos*</label>
            <input required type="text" name="apellidos" placeholder="Ej: Pérez" value={formData.apellidos} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e0', boxSizing: 'border-box' }} />
          </div>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#4a5568', marginBottom: '5px' }}>Correo*</label>
          <input required type="email" name="correo" placeholder="correo@ejemplo.com" value={formData.correo} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e0', boxSizing: 'border-box' }} />
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#2d3748', marginBottom: '5px' }}>Dirección de entrega de los productos</h3>
        <p style={{ fontSize: '12px', color: '#a0aec0', marginBottom: '15px' }}>Ingrese dirección de forma detallada</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#4a5568', marginBottom: '5px' }}>Calle*</label>
            <input required type="text" name="calle" placeholder="Ej: Av. Los Crisantemos 123" value={formData.calle} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e0', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#4a5568', marginBottom: '5px' }}>Departamento (opcional)</label>
            <input type="text" name="departamento" placeholder="Ej: Depto 603" value={formData.departamento} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e0', boxSizing: 'border-box' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#4a5568', marginBottom: '5px' }}>Región*</label>
            <select name="region" value={formData.region} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e0', boxSizing: 'border-box' }}>
              <option value="Región Metropolitana de Santiago">Región Metropolitana de Santiago</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#4a5568', marginBottom: '5px' }}>Comuna*</label>
            <select name="comuna" value={formData.comuna} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e0', boxSizing: 'border-box' }}>
              <option value="Cerrillos">Cerrillos</option>
              <option value="Santiago">Santiago</option>
              <option value="Providencia">Providencia</option>
              <option value="Maipú">Maipú</option>
            </select>
          </div>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#4a5568', marginBottom: '5px' }}>Indicaciones para la entrega (opcional)</label>
          <textarea name="indicaciones" rows="3" placeholder="Ej: Entre calles, dejar con el conserje..." value={formData.indicaciones} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e0', boxSizing: 'border-box' }}></textarea>
        </div>

        <div style={{ textAlign: 'right' }}>
          <button type="submit" style={{ backgroundColor: '#28a745', color: '#ffffff', border: 'none', padding: '12px 25px', borderRadius: '6px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>
            Pagar ahora ${total.toLocaleString()}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;