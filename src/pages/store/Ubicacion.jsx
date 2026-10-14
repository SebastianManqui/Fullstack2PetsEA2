// src/pages/store/Ubicacion.jsx
import React from 'react';

function Ubicacion() {
  const sucursales = [
    {
      id: 1,
      direccion: "Av. Las Condes 1183",
      comuna: "Las Condes, Santiago",
      imagen: "/img/images2.jpg"
    },
    {
      id: 2,
      direccion: "Libertador Bernardo O'Higgins 2233",
      comuna: "Santiago Centro",
      imagen: "/img/images3.jpg"
    },
    {
      id: 3,
      direccion: "Gerónimo de Alderete 1211",
      comuna: "Vitacura, Santiago",
      imagen: "/img/images4.jpg"
    },
    {
      id: 4,
      direccion: "Avenida El Bosque 422",
      comuna: "Linares",
      imagen: "/img/linares.jpg"
    },
    {
      id: 5,
      direccion: "Freire 1062, Local 4",
      comuna: "Concepción",
      imagen: "/img/descarga (6).jpg"
    }
  ];

  return (
    <main className="container my-5">
      <h1 className="text-center fw-bold mb-4 text-dark text-uppercase">
        Ubicaciones de las Sucursales
      </h1>

      <section className="row g-4 justify-content-center">
        {sucursales.map((sucursal) => (
          <article className="col-12 col-md-6 col-lg-4" key={sucursal.id}>
            <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
              <img
                src={sucursal.imagen}
                alt={`Sucursal ${sucursal.direccion}`}
                className="card-img-top"
                style={{ height: '220px', objectFit: 'cover' }}
              />
              <div className="card-body text-center d-flex flex-column justify-content-center p-3">
                <h3 className="card-title h5 fw-bold text-dark mb-1">
                  {sucursal.direccion}
                </h3>
                <p className="text-muted small mb-0">{sucursal.comuna}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="alert alert-light text-center mt-5 shadow-sm rounded-3 border">
        <p className="mb-0 fs-6 text-secondary">
          <strong>Alimento seco (Comida o granos):</strong> Disponible para retiro en todas nuestras sucursales.
        </p>
      </section>
    </main>
  );
}

export default Ubicacion;