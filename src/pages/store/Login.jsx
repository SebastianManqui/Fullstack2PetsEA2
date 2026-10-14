// src/pages/store/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!correo.trim() || !password.trim()) {
      setError('Por favor ingresa tu correo y contraseña.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(correo)) {
      setError('Ingresa un correo electrónico válido.');
      return;
    }

    setError('');

    if (correo.toLowerCase().includes('admin')) {
      navigate('/admin');
    } else {
      navigate('/');
    }
  };

  return (
    <main className="container my-5" style={{ maxWidth: '480px' }}>
      <div className="card shadow-sm border-0 rounded-3 p-4">
        <div className="card-body">
          <h2 className="card-title text-center mb-4 fw-bold text-uppercase text-dark">
            Iniciar Sesión
          </h2>

          {error && (
            <div className="alert alert-danger py-2 text-center small" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="loginCorreo" className="form-label text-uppercase fs-7 fw-semibold">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="loginCorreo"
                className="form-control"
                placeholder="correo@ejemplo.com"
                value={correo}
                onChange={(e) => {
                  setCorreo(e.target.value);
                  if (error) setError('');
                }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="loginPass" className="form-label text-uppercase fs-7 fw-semibold">
                Contraseña
              </label>
              <input
                type="password"
                id="loginPass"
                className="form-control"
                placeholder="••••••••"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError('');
                }}
              />
            </div>

            <button type="submit" className="btn btn-success w-100 text-uppercase fw-bold py-2 mt-3">
              Ingresar
            </button>

            <p className="text-center mt-4 mb-0 text-muted small">
              ¿No tienes cuenta?{' '}
              <Link to="/registro" className="text-success fw-bold text-decoration-none">
                Regístrate aquí
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;