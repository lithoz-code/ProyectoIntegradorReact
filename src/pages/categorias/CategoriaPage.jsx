import { useParams, Navigate } from "react-router-dom";
import { productos, categorias } from "../../data/productos";
import ProductoCard from "../../components/ProductoCard";

export default function CategoriaPage() {
  const { id } = useParams();

  const lista = productos[id];
  const categoria = categorias.find((c) => c.id === id);

  if (!lista || !categoria) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="main">
      <h2 className="titulo2">{categoria.nombre}</h2>
      <div className="productos-grid">
        {lista.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </div>
    </main>
  );
}
