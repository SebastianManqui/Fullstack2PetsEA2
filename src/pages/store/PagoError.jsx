// src/pages/store/PagoError.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function PagoError() {
  const navigate = useNavigate();

  const ordenGuardada = JSON.parse(localStorage.getItem('pets_ultima_orden') || 'null');

  const orden = ordenGuardada || {
    nroOrden: '20240705',
    cliente: {
      nombre: 'pedro',
      apellidos: 'hacker',
      correo: 'pedro.hacer20@example.com'
    },
    direccion: {
      calle: 'Los crisantemos, Edificio Norte',
      departamento: 'Depto 603',
      region: 'Región Metropolitana de Santiago',
      comuna: 'Cerrillos',
      indicaciones: 'El martes no estaremos en el depto, pero puede dejarselo con el conserje.'
    },
    items: [
      { codigo: 'P1', nombre: 'Fortnite', precio: 0, cantidad: 1, imagen: '/img/a5gato.jpg' },
      { codigo: 'P2', nombre: 'Minecraft', precio: 2695, cantidad: 4, imagen: '/img/a4gato.jpg' },
      { codigo: 'P3', nombre: 'Red Dead Redemption 2', precio: 5999, cantidad: 1, imagen: '/img/images3.jpg' },
      { codigo: 'P4', nombre: 'Among Us', precio: 499, cantidad: 1, imagen: '/img/images4.jpg' },
      { codigo: 'P5', nombre: 'The Witcher 3', precio: 3999, cantidad: 1, imagen: '/img/images6.jpg' },
      { codigo: 'P6', nombre: 'Hollow Knight', precio: 1499, cantidad: 1, imagen: '/img/a1.jpg' },
      { codigo: 'P7', nombre: 'Animal Crossing', precio: 5999, cantidad: 1, imagen: '/img/a2.jpg' }
    ],
    total: 28775
  };

  return (
    <div style={{ maxWidth: '850px', margin: '40px auto', padding: '30px', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', fontFamily: 'sans-serif' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#dc3545', margin: '0 0 5px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <span style={{ color: '#dc3545', border: '2px solid #dc3545', borderRadius: '50%', width: '22px', height: '22px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>✕</span>
          No se pudo realizar el pago. nro #{orden.nroOrden}
        </h2>
        <p style={{ fontSize: '13px', color: '#718096', margin: '0 0 15px 0' }}>Detalle de comprar</p>

        <button
          onClick={() => navigate('/checkout')}
          style={{
            backgroundColor: '#198754',
            color: '#ffffff',
            border: 'none',
            padding: '12px 28px',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '13px',
            cursor: 'pointer',
            letterSpacing: '0.5px'
          }}
        >
          VOLVER A REALIZAR EL PAGO
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', marginBottom: '20px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#4a5568', marginBottom: '5px' }}>Nombre*</label>
          <input disabled value={orden.cliente.nombre} style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #e2e8f0', backgroundColor: '#edf2f7', color: '#4a5568', boxSizing: 'border-box' }} />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#4a5568', marginBottom: '5px' }}>Apellidos*</label>
          <input disabled value={orden.cliente.apellidos} style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #e2e8f0', backgroundColor: '#edf2f7', color: '#4a5568', boxSizing: 'border-box' }} />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#4a5568', marginBottom: '5px' }}>Correo*</label>
          <input disabled value={orden.cliente.correo} style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #e2e8f0', backgroundColor: '#edf2f7', color: '#4a5568', boxSizing: 'border-box' }} />
        </div>
      </div>

      <h3 style={{ fontSize: '15px', fontWeight: 'bold', color: '#2d3748', marginBottom: '10px' }}>Dirección de entrega de los productos</h3>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', marginBottom: '15px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#4a5568', marginBottom: '5px' }}>Calle*</label>
          <input disabled value={orden.direccion.calle} style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #e2e8f0', backgroundColor: '#edf2f7', color: '#4a5568', boxSizing: 'border-box' }} />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#4a5568', marginBottom: '5px' }}>Departamento (opcional)</label>
          <input disabled value={orden.direccion.departamento} style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #e2e8f0', backgroundColor: '#edf2f7', color: '#4a5568', boxSizing: 'border-box' }} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#4a5568', marginBottom: '5px' }}>Región*</label>
          <input disabled value={orden.direccion.region} style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #e2e8f0', backgroundColor: '#edf2f7', color: '#4a5568', boxSizing: 'border-box' }} />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#4a5568', marginBottom: '5px' }}>Comuna*</label>
          <input disabled value={orden.direccion.comuna} style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #e2e8f0', backgroundColor: '#edf2f7', color: '#4a5568', boxSizing: 'border-box' }} />
        </div>
      </div>

      <div style={{ marginBottom: '25px' }}>
        <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#4a5568', marginBottom: '5px' }}>Indicaciones para la entrega (opcional)</label>
        <textarea disabled value={orden.direccion.indicaciones} rows="2" style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #e2e8f0', backgroundColor: '#edf2f7', color: '#4a5568', boxSizing: 'border-box', resize: 'none' }}></textarea>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '25px' }}>
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
          {orden.items.map((item, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #edf2f7', fontSize: '13px' }}>
              <td style={{ padding: '8px' }}>
                <div style={{ width: '35px', height: '35px', backgroundColor: '#cbd5e0', borderRadius: '4px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={item.imagen} alt={item.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
              </td>
              <td style={{ padding: '8px', fontWeight: 'bold', color: '#2d3748' }}>{item.nombre}</td>
              <td style={{ padding: '8px' }}>${item.precio}</td>
              <td style={{ padding: '8px' }}>{item.cantidad}</td>
              <td style={{ padding: '8px', fontWeight: 'bold' }}>${item.precio * item.cantidad}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', border: '1px solid #e2e8f0', padding: '15px', textAlign: 'center' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#2d3748' }}>
          Total pagado: $ {orden.total.toLocaleString()}
        </h3>
      </div>

    </div>
  );
}

export default PagoError;