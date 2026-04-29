import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Registro() {
  const { registro } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ nombre: "", usuario: "", password: "", confirmar: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmar) {
      setError("Las contraseñas no coinciden");
      return;
    }
    if (form.password.length < 4) {
      setError("La contraseña debe tener al menos 4 caracteres");
      return;
    }
    const resultado = registro(form.usuario, form.password, form.nombre);
    if (resultado.exito) {
      navigate("/");
    } else {
      setError(resultado.error);
    }
  };

  return (
    <main className="auth-container">
      <div className="auth-card">
        <div className="auth-logo">
          <img src="img/log.webp" alt="Solfecon" width="110" onError={(e) => { e.target.style.display="none"; }} />
          <h4>Crear cuenta</h4>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="campo">
            <label htmlFor="nombre">Nombre completo</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
          </div>
          <div className="campo">
            <label htmlFor="usuario">Usuario</label>
            <input
              id="usuario"
              name="usuario"
              type="text"
              value={form.usuario}
              onChange={handleChange}
              placeholder="Elige un usuario"
              required
            />
          </div>
          <div className="campo">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Mínimo 4 caracteres"
              required
            />
          </div>
          <div className="campo">
            <label htmlFor="confirmar">Confirmar contraseña</label>
            <input
              id="confirmar"
              name="confirmar"
              type="password"
              value={form.confirmar}
              onChange={handleChange}
              placeholder="Repite tu contraseña"
              required
            />
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="btn-auth">Registrarse</button>
        </form>

        <p className="auth-link">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login">Inicia sesión aquí</Link>
        </p>
      </div>
    </main>
  );
}
