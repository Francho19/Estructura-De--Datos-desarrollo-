class TarjetaProducto extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const nombre = this.getAttribute('nombre');
    const precio = this.getAttribute('precio');
    const descripcion = this.getAttribute('descripcion');

    this.shadowRoot.innerHTML = `
      <style>
        .card { border: 1px solid #ccc; border-radius: 5px; padding: 10px; width: 200px; }
        .card h3 { margin: 0 0 10px 0; }
        .card p { margin: 5px 0; }
        .precio { font-weight: bold; color: green; }
      </style>
      <div class="card">
        <h3>${nombre}</h3>
        <p class="precio">$${precio}</p>
        <p>${descripcion}</p>
      </div>
    `;
  }
}

customElements.define('tarjeta-producto', TarjetaProducto);