import React from 'react';
import { useParams, Link } from 'react-router-dom';

function BlogDetalle() {
  const { id } = useParams();

  return (
    <main className="container my-5" style={{ maxWidth: '800px' }}>
      <div className="card p-4 border-0 shadow-sm">
        <h1 className="fw-bold mb-3">Detalle de Noticia #{id}</h1>
        <p className="text-muted">Publicación detallada con información acerca de PETS y sus novedades.</p>
        <Link to="/blog" className="btn btn-outline-secondary mt-3 align-self-start">
          ← Volver a Blogs
        </Link>
      </div>
    </main>
  );
}

export default BlogDetalle;