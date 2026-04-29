import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const usuariosDB = [
  { usuario: "cliente1", password: "12345", nombre: "Carlos Pérez" },
  { usuario: "cliente2", password: "abcde", nombre: "María Gómez" },
  { usuario: "admin", password: "admin123", nombre: "Administrador" },
];

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(() => {
    try {
      const guardado = localStorage.getItem("solfecon_usuario");
      return guardado ? JSON.parse(guardado) : null;
    } catch {
      return null;
    }
  });

  const login = (nombreUsuario, password) => {
    const encontrado = usuariosDB.find(
      (u) => u.usuario === nombreUsuario && u.password === password
    );
    if (encontrado) {
      const datos = { usuario: encontrado.usuario, nombre: encontrado.nombre };
      setUsuario(datos);
      localStorage.setItem("solfecon_usuario", JSON.stringify(datos));
      return { exito: true };
    }
    return { exito: false, error: "Usuario o contraseña incorrectos" };
  };

  const registro = (nombreUsuario, password, nombre) => {
    const existe = usuariosDB.find((u) => u.usuario === nombreUsuario);
    if (existe) return { exito: false, error: "El usuario ya existe" };
    const nuevo = { usuario: nombreUsuario, password, nombre };
    usuariosDB.push(nuevo);
    const datos = { usuario: nuevo.usuario, nombre: nuevo.nombre };
    setUsuario(datos);
    localStorage.setItem("solfecon_usuario", JSON.stringify(datos));
    return { exito: true };
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("solfecon_usuario");
  };

  return (
    <AuthContext.Provider value={{ usuario, login, registro, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
