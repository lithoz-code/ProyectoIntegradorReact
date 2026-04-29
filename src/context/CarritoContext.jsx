import { createContext, useContext, useState } from "react";

const CarritoContext = createContext(null);

export function CarritoProvider({ children }) {
  const [items, setItems] = useState([]);

  const agregarProducto = (producto) => {
    setItems((prev) => {
      const existe = prev.find((i) => i.id === producto.id);
      if (existe) {
        return prev.map((i) =>
          i.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const eliminarProducto = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const vaciarCarrito = () => setItems([]);

  const totalItems = items.reduce((acc, i) => acc + i.cantidad, 0);
  const totalPrecio = items.reduce((acc, i) => acc + i.precio * i.cantidad, 0);

  return (
    <CarritoContext.Provider
      value={{ items, agregarProducto, eliminarProducto, vaciarCarrito, totalItems, totalPrecio }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export function useCarrito() {
  return useContext(CarritoContext);
}
