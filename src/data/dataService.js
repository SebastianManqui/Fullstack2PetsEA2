// src/data/dataService.js

export const productosIniciales = [
  // ALIMENTOS PERROS
  { codigo: 'PROD01', nombre: 'Dog Chow', descripcion: 'Saco de 15 kg.', precio: 24000, stock: 15, stockCritico: 3, categoria: 'Perros', imagen: '/img/image1.jpg' },
  { codigo: 'PROD02', nombre: 'Master Dog', descripcion: 'Saco de 15 kg.', precio: 32000, stock: 12, stockCritico: 2, categoria: 'Perros', imagen: '/img/image.jpg' },
  { codigo: 'PROD03', nombre: 'Nomade', descripcion: 'Saco de 3 kg.', precio: 34500, stock: 10, stockCritico: 2, categoria: 'Perros', imagen: '/img/a3gato.jpg' },
  { codigo: 'PROD04', nombre: 'Fit Formula', descripcion: 'Saco de 10 kg.', precio: 25000, stock: 8, stockCritico: 2, categoria: 'Perros', imagen: '/img/a.jpg' },
  { codigo: 'PROD05', nombre: 'Doko', descripcion: 'Saco de 15 kg.', precio: 37000, stock: 14, stockCritico: 3, categoria: 'Perros', imagen: '/img/a1.jpg' },

  // ALIMENTOS GATOS
  { codigo: 'PROD06', nombre: 'CatChow Gato', descripcion: 'Saco de 15 kg.', precio: 31000, stock: 10, stockCritico: 2, categoria: 'Gatos', imagen: '/img/a4gato.jpg' },
  { codigo: 'PROD07', nombre: 'Bravery', descripcion: 'Saco de 7 kg.', precio: 42000, stock: 8, stockCritico: 2, categoria: 'Gatos', imagen: '/img/a5gato.jpg' },
  { codigo: 'PROD08', nombre: 'Raza', descripcion: 'Saco de 10 kg.', precio: 21000, stock: 12, stockCritico: 3, categoria: 'Gatos', imagen: '/img/a6gato.jpg' },
  { codigo: 'PROD09', nombre: 'Gati', descripcion: 'Saco de 15 kg.', precio: 23000, stock: 15, stockCritico: 3, categoria: 'Gatos', imagen: '/img/a7gato.jpg' },
  { codigo: 'PROD10', nombre: 'Champions Cat', descripcion: 'Saco de 10 kg.', precio: 26000, stock: 9, stockCritico: 2, categoria: 'Gatos', imagen: '/img/a8gato.jpg' },

  // ACCESORIOS
  { codigo: 'PROD11', nombre: 'Juguete Pelota Perro', descripcion: 'Juguete interactivo resistente.', precio: 8500, stock: 20, stockCritico: 5, categoria: 'Accesorios', imagen: '/img/jugeteperro.jpg' },
  { codigo: 'PROD12', nombre: 'Cama para Mascota', descripcion: 'Cama acolchada confortable.', precio: 19990, stock: 5, stockCritico: 1, categoria: 'Accesorios', imagen: '/img/cama.jpg' }
];

// Forzar la actualización del catálogo local con las imágenes corregidas
export const getProductos = () => {
  localStorage.setItem('pets_productos', JSON.stringify(productosIniciales));
  return productosIniciales;
};

// Obtener elementos del carrito
export const obtenerCarrito = () => {
  return JSON.parse(localStorage.getItem('pets_carrito') || '[]');
};

// Agregar un producto al carrito
export const agregarAlCarrito = (producto) => {
  const carrito = obtenerCarrito();
  const existe = carrito.find((item) => item.codigo === producto.codigo);

  if (existe) {
    existe.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  localStorage.setItem('pets_carrito', JSON.stringify(carrito));
};

// Eliminar o disminuir cantidad de un producto
export const eliminarDelCarrito = (codigo) => {
  const carrito = obtenerCarrito();
  const item = carrito.find((i) => i.codigo === codigo);

  if (item && item.cantidad > 1) {
    item.cantidad -= 1;
    localStorage.setItem('pets_carrito', JSON.stringify(carrito));
  } else {
    const nuevoCarrito = carrito.filter((i) => i.codigo !== codigo);
    localStorage.setItem('pets_carrito', JSON.stringify(nuevoCarrito));
  }
};

// Vaciar todo el carrito
export const vaciarCarrito = () => {
  localStorage.setItem('pets_carrito', JSON.stringify([]));
};

// Obtener el monto total acumulado del carrito
export const obtenerTotalCarrito = () => {
  const carrito = obtenerCarrito();
  return carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
};