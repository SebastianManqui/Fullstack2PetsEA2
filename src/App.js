// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes globales
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Páginas existentes
import Home from './pages/store/Home';
import Productos from './pages/store/Productos';
import DetalleProducto from './pages/store/DetalleProducto';
import Login from './pages/store/Login';
import Registro from './pages/store/Registro';
import Ubicacion from './pages/store/Ubicacion';
import Nosotros from './pages/store/Nosotros';
import Contacto from './pages/store/Contacto';
import Blog from './pages/store/Blog';

// Vistas ajustadas con las rutas del carrito y checkout
import Categorias from './pages/store/Categoria';
import CategoriaDetalle from './pages/store/CategoriaDetalles';
import Ofertas from './pages/store/Ofertas';
import Carrito from './pages/store/Carrito';
import Checkout from './pages/store/Checkout';
import PagoCorrecto from './pages/store/PagoCorrecto';
import PagoError from './pages/store/PagoError';
import BlogDetalle from './pages/store/BlogDetalle';

import './App.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />

        <main className="flex-grow-1">
          <Routes>
            {/* Rutas principales */}
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/producto/:codigo" element={<DetalleProducto />} />
            <Route path="/detalle-producto" element={<DetalleProducto />} />
            
            {/* Usuarios */}
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />

            {/* Información e historia */}
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/historia" element={<Nosotros />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetalle />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/ubicacion" element={<Ubicacion />} />

            {/* Categorías y Ofertas */}
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/categoria/:id" element={<CategoriaDetalle />} />
            <Route path="/ofertas" element={<Ofertas />} />

            {/* Proceso de Compra (Figura 5 y 6) */}
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/comprar" element={<Carrito />} />
            <Route path="/pago-correcto" element={<PagoCorrecto />} />
            <Route path="/pago-error" element={<PagoError />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;