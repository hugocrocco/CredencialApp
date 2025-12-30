<file name=frontend/src/pages/Home.jsx>
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="card">
      <div className="card-content">
        <h1>Bienvenido</h1>

        <div className="actions">
          <Link to="/login" className="btn">
            Iniciar sesión
          </Link>
          <Link to="/register" className="btn">
            Crear cuenta
          </Link>
          <Link to="/contact" className="btn">
            Contacto
          </Link>
        </div>

        <p className="hint">
          Tip: crea tu cuenta o inicia sesión para ver tu credencial.
        </p>
      </div>
    </div>
  );
}
</file>

<file name=frontend/src/App.jsx>
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Card from "./pages/Card";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";

function RequireMember({ children }) {
  const hasMember = !!localStorage.getItem("member");
  return hasMember ? children : <Navigate to="/login" replace />;
}

function RequireAdmin({ children }) {
  const role = localStorage.getItem("role");
  const isAdmin = role === "ADMIN" || localStorage.getItem("isAdmin") === "true";
  return isAdmin ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/card" element={<RequireMember><Card /></RequireMember>} />
        <Route path="/admin" element={<RequireAdmin><Admin /></RequireAdmin>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
</file>