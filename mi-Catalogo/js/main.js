document.addEventListener('DOMContentLoaded', () => {
  const productos = [
    { nombre: 'Camiseta', precio: 20, descripcion: 'Camiseta de algodón 100%' },
    { nombre: 'Pantalón', precio: 35, descripcion: 'Pantalón vaquero cómodo' },
    { nombre: 'Zapatos', precio: 50, descripcion: 'Zapatos deportivos' }
  ];

  const catalogo = document.getElementById('catalog');

  productos.forEach(prod => {
    const tarjeta = document.createElement('tarjeta-producto');
    tarjeta.setAttribute('nombre', prod.nombre);
    tarjeta.setAttribute('precio', prod.precio);
    tarjeta.setAttribute('descripcion', prod.descripcion);
    catalogo.appendChild(tarjeta);
  });
});