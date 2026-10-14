// src/pages/store/Comprar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Comprar() {
  const navigate = useNavigate();
  const [metodoEntrega, setMetodoEntrega] = useState('domicilio');
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    comuna: '',
    telefono: ''
  });

  const subtotal = 25000;
  const costoEnvio = metodoEntrega === 'domicilio' ? 3990 : 0;
  const total = subtotal + costoEnvio;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePagarExito = (e) => {
    e.preventDefault();
    navigate('/pago-correcto');
  };

  const handlePagarError = () => {
    navigate('/pago-error');
  };

  return (
    <main className="container my-5" style={{ maxWidth: '900px' }}>
      <h2 className="fw-bold mb-4 text-center">Proceso de Pago / Checkout</h2>

      <div className="row g-4">
        {/* Formulario de Dirección y Envío */}
        <div className="col-12 col-md-7">
          <div className="card border-0 shadow-sm p-4">
            <h3 className="h5 fw-bold mb-3 border-bottom pb-2">1. Dirección de Envío</h3>

            <form onSubmit={handlePagarExito}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Nombre Completo</label>
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  placeholder="Ej: Juan Pérez"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Dirección</label>
                <input
                  type="text"
                  name="direccion"
                  className="form-control"
                  placeholder="Calle, Número, Depto"
                  value={formData.direccion}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="row g-2 mb-3">
                <div className="col-6">
                  <label className="form-label fw-semibold">Comuna / Ciudad</label>
                  <input
                    type="text"
                    name="comuna"
                    className="form-control"
                    placeholder="Ej: Santiago"
                    value={formData.comuna}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-6">
                  <label className="form-label fw-semibold">Teléfono</label>
                  <input
                    type="tel"
                    name="telefono"
                    className="form-control"
                    placeholder="+56 9 1234 5678"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <h3 className="h5 fw-bold mt-4 mb-3 border-bottom pb-2">2. Opciones de Entrega</h3>

              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="entrega"
                  id="domicilio"
                  checked={metodoEntrega === 'domicilio'}
                  onChange={() => setMetodoEntrega('domicilio')}
                />
                <label className="form-check-label" htmlFor="domicilio">
                  Envío a Domicilio (+$3.990 CLP)
                </label>
              </div>

              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="entrega"
                  id="retiro"
                  checked={metodoEntrega === 'retiro'}
                  onChange={() => setMetodoEntrega('retiro')}
                />
                <label className="form-check-label" htmlFor="retiro">
                  Retiro en Tienda (Gratis)
                </label>
              </div>

              <button type="submit" className="btn btn-success w-100 fw-bold py-2 fs-5">
                Pagar Exitosamente (${total.toLocaleString()} CLP)
              </button>
            </form>
          </div>
        </div>

        <div className="col-12 col-md-5">
          <div className="card border-0 shadow-sm p-4 bg-light">
            <h3 className="h5 fw-bold mb-3 border-bottom pb-2">Resumen de Compra</h3>

            <div className="d-flex justify-content-between mb-2">
              <span>Productos (1)</span>
              <span>${subtotal.toLocaleString()} CLP</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span>Envío</span>
              <span>{costoEnvio > 0 ? `$${costoEnvio.toLocaleString()} CLP` : 'Gratis'}</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold fs-5 text-dark mb-4">
              <span>Total</span>
              <span>${total.toLocaleString()} CLP</span>
            </div>

            <p className="text-muted small text-center mb-3">
              Prueba de simulación de errores en pasarela:
            </p>

            <button
              type="button"
              className="btn btn-outline-danger w-100 btn-sm"
              onClick={handlePagarError}
            >
              Simular Fallo en Pago
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Comprar;