import { useCarrito } from "../context/CarritoContext";
import { formatPrecio } from "../data/productos";

export default function ProductoCard({ producto, descuento = 0 }) {
  const { agregarProducto } = useCarrito();

  const precioFinal = descuento > 0
    ? producto.precio * (1 - descuento / 100)
    : producto.precio;

  return (
    <div className="producto-card">
      <div className="producto-img-wrap">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="producto-img"
          onError={(e) => { e.target.src = "https://placehold.co/300x200?text=Producto"; }}
        />
        {descuento > 0 && <span className="badge-descuento">-{descuento}%</span>}
      </div>
      <div className="producto-body">
        <h5 className="producto-nombre">{producto.nombre}</h5>
        {descuento > 0 && (
          <p className="precio-original">{formatPrecio(producto.precio)}</p>
        )}
        <p className="precio-final">
          {formatPrecio(precioFinal)}
          <small> c/IVA</small>
        </p>
        <div className="producto-acciones">
          <a href={producto.link} target="_blank" rel="noreferrer" className="btn-comprar">
            Comprar
          </a>
          <button
            className="btn-agregar"
            onClick={() => agregarProducto({ ...producto, precio: precioFinal })}
          >
            + Carrito
          </button>
        </div>
      </div>
    </div>
  );
}
