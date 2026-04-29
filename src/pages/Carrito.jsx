import { Link } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";
import { formatPrecio } from "../data/productos";

export default function Carrito() {
  const { items, eliminarProducto, vaciarCarrito, totalPrecio } = useCarrito();

  if (items.length === 0) {
    return (
      <main className="main">
        <h2 className="titulo2">Tu carrito de compras</h2>
        <div className="carrito-vacio">
          <p>🛒 Tu carrito está vacío.</p>
          <Link to="/" className="btn-comprar">Ver productos</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="main">
      <h2 className="titulo2">Tu carrito de compras</h2>
      <div className="tabla-contenedor">
        <table className="table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio unitario</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>{formatPrecio(item.precio)}</td>
                <td>{item.cantidad}</td>
                <td>{formatPrecio(item.precio * item.cantidad)}</td>
                <td>
                  <button
                    className="btn-eliminar"
                    onClick={() => eliminarProducto(item.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="carrito-total">
        <p className="total-precio">
          <strong>Total: {formatPrecio(totalPrecio)}</strong>
        </p>
        <div className="carrito-acciones">
          <button className="btn-vaciar" onClick={vaciarCarrito}>
            Vaciar carrito
          </button>
          <Link to="/" className="btn-comprar">
            Seguir comprando
          </Link>
        </div>
      </div>
    </main>
  );
}
