import React from 'react';
import { useParams } from 'react-router-dom';

function CategoriaDetalle() {
  const { id } = useParams();

  return (
    <main className="container my-5 text-center">
      <h1 className="fw-bold text-uppercase">Categoría: {id}</h1>
      <p className="text-muted">Aquí se desplegarán los productos filtrados por la categoría "{id}".</p>
    </main>
  );
}

export default CategoriaDetalle;