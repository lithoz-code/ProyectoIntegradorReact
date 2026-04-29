import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CarritoProvider } from "./context/CarritoContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RutaProtegida from "./components/RutaProtegida";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Carrito from "./pages/Carrito";
import CategoriaPage from "./pages/categorias/CategoriaPage";
import PromocionPage from "./pages/promociones/PromocionPage";

export default function App() {
  return (
    <AuthProvider>
      <CarritoProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* Páginas públicas */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />

            {/* Categorías de productos — rutas dinámicas */}
            <Route path="/categoria/:id" element={<CategoriaPage />} />

            {/* Promociones — rutas dinámicas */}
            <Route path="/promocion/:id" element={<PromocionPage />} />

            {/* Carrito — página protegida */}
            <Route
              path="/carrito"
              element={
                <RutaProtegida>
                  <Carrito />
                </RutaProtegida>
              }
            />

            {/* 404 */}
            <Route
              path="*"
              element={
                <main className="main">
                  <h2 className="titulo2">Página no encontrada</h2>
                  <p style={{ textAlign: "center" }}>
                    <a href="/" style={{ color: "#d32f2f" }}>Volver al inicio</a>
                  </p>
                </main>
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CarritoProvider>
    </AuthProvider>
  );
}
