// src/pages/store/Registro.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Registro() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    confirmarCorreo: '',
    password: '',
    confirmPassword: '',
    telefono: '',
    region: '',
    comuna: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre completo es obligatorio.';
    }

    if (!formData.correo.trim()) {
      newErrors.correo = 'El correo electrónico es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      newErrors.correo = 'Ingresa un correo electrónico válido.';
    }

    if (!formData.confirmarCorreo.trim()) {
      newErrors.confirmarCorreo = 'Debes confirmar tu correo.';
    } else if (formData.correo !== formData.confirmarCorreo) {
      newErrors.confirmarCorreo = 'Los correos electrónicos no coinciden.';
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres.';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Debes confirmar la contraseña.';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden.';
    }

    if (!formData.region) {
      newErrors.region = 'Selecciona tu región.';
    }

    if (!formData.comuna) {
      newErrors.comuna = 'Selecciona tu comuna.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setSubmitted(true);
      setErrors({});
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    }
  };

  return (
    <main className="container my-5" style={{ maxWidth: '600px' }}>
      <div className="card shadow-sm border-0 rounded-3 p-4">
        <div className="card-body">
          <h2 className="card-title text-center mb-4 fw-bold text-uppercase text-dark">
            Registro de Usuario
          </h2>

          {submitted && (
            <div className="alert alert-success text-center py-2" role="alert">
              ¡Registro exitoso! Redirigiendo a iniciar sesión...
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label text-uppercase fs-7 fw-semibold">
                Nombre Completo
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                placeholder="Ej: Juan Pérez"
                value={formData.nombre}
                onChange={handleChange}
              />
              {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="correo" className="form-label text-uppercase fs-7 fw-semibold">
                Correo
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                className={`form-control ${errors.correo ? 'is-invalid' : ''}`}
                placeholder="correo@ejemplo.com"
                value={formData.correo}
                onChange={handleChange}
              />
              {errors.correo && <div className="invalid-feedback">{errors.correo}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="confirmarCorreo" className="form-label text-uppercase fs-7 fw-semibold">
                Confirmar Correo
              </label>
              <input
                type="email"
                id="confirmarCorreo"
                name="confirmarCorreo"
                className={`form-control ${errors.confirmarCorreo ? 'is-invalid' : ''}`}
                placeholder="Repite tu correo"
                value={formData.confirmarCorreo}
                onChange={handleChange}
              />
              {errors.confirmarCorreo && <div className="invalid-feedback">{errors.confirmarCorreo}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label text-uppercase fs-7 fw-semibold">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label text-uppercase fs-7 fw-semibold">
                Confirmar Contraseña
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="telefono" className="form-label text-uppercase fs-7 fw-semibold">
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                className="form-control"
                placeholder="+56 9 1234 5678"
                value={formData.telefono}
                onChange={handleChange}
              />
            </div>

            <div className="row g-2 mb-3">
              <div className="col-md-6">
                <label htmlFor="region" className="form-label text-uppercase fs-7 fw-semibold">
                  Región
                </label>
                <select
                  id="region"
                  name="region"
                  className={`form-select ${errors.region ? 'is-invalid' : ''}`}
                  value={formData.region}
                  onChange={handleChange}
                >
                  <option value="">-- Seleccione la región --</option>
                  <option value="rm">Región Metropolitana de Santiago</option>
                  <option value="araucania">Región de la Araucanía</option>
                  <option value="nuble">Región de Ñuble</option>
                </select>
                {errors.region && <div className="invalid-feedback">{errors.region}</div>}
              </div>

              <div className="col-md-6">
                <label htmlFor="comuna" className="form-label text-uppercase fs-7 fw-semibold">
                  Comuna
                </label>
                <select
                  id="comuna"
                  name="comuna"
                  className={`form-select ${errors.comuna ? 'is-invalid' : ''}`}
                  value={formData.comuna}
                  onChange={handleChange}
                >
                  <option value="">-- Seleccione la comuna --</option>
                  <option value="santiago">Santiago</option>
                  <option value="linares">Linares</option>
                  <option value="concepcion">Concepción</option>
                </select>
                {errors.comuna && <div className="invalid-feedback">{errors.comuna}</div>}
              </div>
            </div>

            <button type="submit" className="btn btn-success w-100 text-uppercase fw-bold py-2 mt-3">
              Registrar
            </button>

            <p className="text-center mt-3 mb-0 text-muted small">
              ¿Ya tienes cuenta?{' '}
              <Link to="/login" className="text-success fw-bold text-decoration-none">
                Inicia sesión aquí
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Registro;