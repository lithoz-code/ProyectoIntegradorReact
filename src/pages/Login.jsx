import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ usuario: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultado = login(form.usuario, form.password);
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
          <h4>Portal de Clientes B2B</h4>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="campo">
            <label htmlFor="usuario">Usuario</label>
            <input
              id="usuario"
              name="usuario"
              type="text"
              value={form.usuario}
              onChange={handleChange}
              placeholder="Ingrese su usuario"
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
              placeholder="Ingrese su contraseña"
              required
            />
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="btn-auth">Iniciar Sesión</button>
        </form>

        <p className="auth-link">
          ¿No tienes cuenta?{" "}
          <Link to="/registro">Regístrate aquí</Link>
        </p>

        <div className="auth-hint">
          <small>Usuarios de prueba: <strong>cliente1</strong> / <strong>12345</strong></small>
        </div>
      </div>
    </main>
  );
}
