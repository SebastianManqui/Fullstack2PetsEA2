// src/pages/store/DetalleProducto.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductos, agregarAlCarrito } from '../../data/dataService';

function DetalleProducto() {
  const { codigo } = useParams();
  const navigate = useNavigate();

  const [producto, setProducto] = useState(null);
  const [imagenPrincipal, setImagenPrincipal] = useState('');
  const [cantidad, setCantidad] = useState(1);
  const [alerta, setAlerta] = useState('');

  const relacionados = [
    { codigo: 'PROD01', nombre: 'Dog Chow', imagen: '/img/image1.png' },
    { codigo: 'DEST02', nombre: 'Juguete Mordedor', imagen: '/img/jugeteperro.jpg' },
    { codigo: 'DEST03', nombre: 'Cama Acolchada', imagen: '/img/cama.jpg' },
    { codigo: 'PROD04', nombre: 'Fit Formula', imagen: '/img/a.jpg' }
  ];

  useEffect(() => {
    const lista = getProductos();
    const encontrado = lista.find((p) => p.codigo === codigo) || lista[0];

    if (encontrado) {
      setProducto(encontrado);
      setImagenPrincipal(encontrado.imagen);
    }
  }, [codigo]);

  if (!producto) {
    return (
      <div className="container my-5 text-center">
        <h2>Cargando detalle del producto...</h2>
      </div>
    );
  }

  const galeria = [
    producto.imagen,
    '/img/image.png',
    '/img/image1.png'
  ];

  const handleAgregarAlCarrito = () => {
    for (let i = 0; i < cantidad; i++) {
      agregarAlCarrito(producto);
    }

    setAlerta(`¡Se agregaron ${cantidad} unidad(es) de ${producto.nombre} al carrito!`);
    setTimeout(() => {
      setAlerta('');
    }, 3000);
  };

  return (
    <main className="container my-5" style={{ maxWidth: '1100px' }}>
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/productos" className="text-decoration-none">Alimentos</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {producto.nombre}
          </li>
        </ol>
      </nav>

      {alerta && (
        <div className="alert alert-success alert-dismissible fade show text-center" role="alert">
          {alerta}
          <button type="button" className="btn-close" onClick={() => setAlerta('')}></button>
        </div>
      )}

      <section className="row g-4 mb-5">
        <div className="col-12 col-md-6">
          <div className="card border-0 shadow-sm p-3 mb-3 text-center rounded-3 bg-white">
            <img
              src={imagenPrincipal}
              alt={producto.nombre}
              className="img-fluid"
              style={{ maxHeight: '380px', objectFit: 'contain' }}
            />
          </div>

          <div className="d-flex gap-2 justify-content-center">
            {galeria.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Miniatura ${idx + 1}`}
                className={`img-thumbnail cursor-pointer ${
                  imagenPrincipal === img ? 'border-primary border-2' : ''
                }`}
                style={{ width: '80px', height: '80px', objectFit: 'cover', cursor: 'pointer' }}
                onClick={() => setImagenPrincipal(img)}
              />
            ))}
          </div>
        </div>

        <div className="col-12 col-md-6 d-flex flex-column justify-content-between">
          <div>
            <h1 className="fw-bold text-dark display-6 mb-2">{producto.nombre}</h1>
            <p className="fs-3 fw-bold text-success mb-3">
              ${producto.precio ? producto.precio.toLocaleString() : '24.000'} CLP
            </p>

            <hr />

            <p className="text-secondary leading-relaxed my-3 fs-6">
              {producto.descripcion ||
                'Alimento seco balanceado formulado con proteínas de carne y cereales seleccionados. Aporta la energía diaria necesaria para mantener huesos fuertes, pelaje brillante y una excelente digestión para tu mascota.'}
            </p>

            <hr />

            <div className="d-flex align-items-center gap-3 my-4">
              <label htmlFor="cantidad" className="fw-bold mb-0">
                Cantidad:
              </label>
              <select
                id="cantidad"
                className="form-select w-auto"
                value={cantidad}
                onChange={(e) => setCantidad(Number(e.target.value))}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <button
              className="btn btn-success btn-lg w-100 fw-bold py-3 text-uppercase"
              onClick={handleAgregarAlCarrito}
            >
              🛒 Añadir al carrito
            </button>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <h3 className="fw-bold mb-4 text-dark">Productos Relacionados</h3>
        <div className="row g-3">
          {relacionados.map((rel) => (
            <div className="col-6 col-sm-4 col-md-3" key={rel.codigo}>
              <div
                className="card h-100 border-0 shadow-sm text-center p-2 cursor-pointer"
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(`/producto/${rel.codigo}`)}
              >
                <img
                  src={rel.imagen}
                  alt={rel.nombre}
                  className="card-img-top mx-auto"
                  style={{ height: '140px', objectFit: 'contain' }}
                />
                <div className="card-body p-2">
                  <p className="fw-semibold text-dark small mb-0">{rel.nombre}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default DetalleProducto;