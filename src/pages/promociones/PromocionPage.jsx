import { useParams, Navigate } from "react-router-dom";
import { promociones, productosPromocion, todosLosProductos } from "../../data/productos";
import ProductoCard from "../../components/ProductoCard";

export default function PromocionPage() {
  const { id } = useParams();

  const promo = promociones.find((p) => p.id === id);
  const idsPromo = productosPromocion[id];

  if (!promo || !idsPromo) {
    return <Navigate to="/" replace />;
  }

  const listaProductos = idsPromo
    .map((pid) => todosLosProductos.find((p) => p.id === pid))
    .filter(Boolean);

  return (
    <main className="main">
      <div className="promo-header">
        <h2 className="titulo2">
          {promo.nombre}
          {promo.descuento > 0 && (
            <span className="promo-badge"> — {promo.descuento}% OFF</span>
          )}
        </h2>
        <p className="promo-fechas">
          Vigente del <strong>{promo.fechaInicio}</strong> al <strong>{promo.fechaFin}</strong>
        </p>
      </div>
      <div className="productos-grid">
        {listaProductos.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} descuento={promo.descuento} />
        ))}
      </div>
    </main>
  );
}
