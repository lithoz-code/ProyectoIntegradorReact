# 🔧 Ferretería SOLFECON — React App

Proyecto integrador convertido de HTML/JS a **React con Vite**.

---

## 📁 Estructura del proyecto

```
solfecon-react/
├── public/
│   └── img/           ← Copia aquí todas las imágenes del proyecto original
├── src/
│   ├── context/
│   │   ├── AuthContext.jsx      ← Context de autenticación (login/registro)
│   │   └── CarritoContext.jsx   ← Context del carrito de compras
│   ├── components/
│   │   ├── Navbar.jsx           ← Barra de navegación con dropdowns
│   │   ├── Footer.jsx           ← Pie de página
│   │   ├── ProductoCard.jsx     ← Tarjeta reutilizable de producto
│   │   └── RutaProtegida.jsx    ← HOC para páginas protegidas
│   ├── data/
│   │   └── productos.js         ← Todos los datos (productos, categorías, promos)
│   ├── pages/
│   │   ├── Home.jsx             ← Página principal con carrusel y tabla
│   │   ├── Login.jsx            ← Formulario de inicio de sesión
│   │   ├── Registro.jsx         ← Formulario de registro de usuarios
│   │   ├── Carrito.jsx          ← Carrito de compras (página protegida)
│   │   ├── categorias/
│   │   │   └── CategoriaPage.jsx  ← Página dinámica de categoría (/categoria/:id)
│   │   └── promociones/
│   │       └── PromocionPage.jsx  ← Página dinámica de promoción (/promocion/:id)
│   ├── App.jsx                  ← Rutas principales con React Router
│   ├── main.jsx                 ← Punto de entrada
│   └── index.css                ← Estilos globales
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Instalación y ejecución

### 1. Abrir en VS Code
Abre la carpeta `solfecon-react` en Visual Studio Code.

### 2. Instalar dependencias
```bash
npm install
```

### 3. Copiar imágenes
Copia la carpeta `img/` del proyecto HTML original a `public/img/` dentro de este proyecto.

```
solfecon-react/
└── public/
    └── img/
        ├── log.webp
        ├── 1.jpg
        ├── 2.jpg
        └── ...
```

### 4. Ejecutar en desarrollo
```bash
npm run dev
```

Abre http://localhost:5173 en tu navegador.

---

## ✅ Requisitos del proyecto integrador cumplidos

| Requisito | Implementación |
|-----------|---------------|
| **React modularizado** | Componentes (`Navbar`, `Footer`, `ProductoCard`, `RutaProtegida`) + Páginas separadas |
| **Props** | `ProductoCard` recibe `producto` y `descuento` como props |
| **Context** | `AuthContext` (usuario) y `CarritoContext` (carrito) compartidos globalmente |
| **Navegación dinámica** | React Router v6 con rutas `/categoria/:id` y `/promocion/:id` |
| **Subpáginas** | 12 categorías + 4 promociones como subrutas dinámicas |
| **Login** | Página `/login` con validación de credenciales |
| **Registro** | Página `/registro` con validación de campos |
| **Páginas protegidas** | `/carrito` requiere sesión iniciada (redirige a `/login`) |

---

## 👤 Usuarios de prueba

| Usuario | Contraseña | Nombre |
|---------|-----------|--------|
| `cliente1` | `12345` | Carlos Pérez |
| `cliente2` | `abcde` | María Gómez |
| `admin` | `admin123` | Administrador |

---

## 🛣️ Rutas de la aplicación

| Ruta | Página | Acceso |
|------|--------|--------|
| `/` | Home (Nosotros + Carrusel + Promociones) | Público |
| `/login` | Inicio de sesión | Público |
| `/registro` | Crear cuenta | Público |
| `/carrito` | Carrito de compras | **Requiere login** |
| `/categoria/pinturas` | Pinturas y accesorios | Público |
| `/categoria/construccion` | Construcción | Público |
| `/categoria/plomeria` | Plomería y gas | Público |
| `/categoria/electricos` | Eléctricos | Público |
| `/categoria/agropecuario` | Agropecuario | Público |
| `/categoria/herramientas` | Herramientas | Público |
| `/categoria/seguridad` | Seguridad Industrial | Público |
| `/categoria/limpieza` | Limpieza y accesorios | Público |
| `/categoria/adhesivos` | Adhesivos y empaques | Público |
| `/categoria/tornilleria` | Tornillería | Público |
| `/categoria/abrasivos` | Abrasivos y químicos | Público |
| `/categoria/herrajes` | Herrajes y cerrajería | Público |
| `/promocion/navidad` | Navidad - 30% OFF | Público |
| `/promocion/saldos` | Saldos - 50% OFF | Público |
| `/promocion/seguridad` | Seguridad - 10% OFF | Público |
| `/promocion/sin_promocion` | Sin promoción | Público |
