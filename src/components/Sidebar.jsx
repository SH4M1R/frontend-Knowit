import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside
      className="d-flex flex-column p-3 text-white"
      style={{
        width: "220px",
        background: "linear-gradient(180deg, #8B0000, #A93226)",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        overflowY: "auto"
      }}
    >
      <h2 className="fs-5 fw-bold text-center mb-4">🍴 Restaurante Lautaro´S</h2>

      <nav className="nav flex-column gap-3">
        <Link to="/dashboard" className="nav-link text-white fw-semibold">
          Dashboard
        </Link>
        <Link to="/menu" className="nav-link text-white fw-semibold">
          Menú
        </Link>
        <Link to="/ventas" className="nav-link text-white fw-semibold">
          Ventas
        </Link>
      </nav>

      <div className="mt-auto">
        <Link to="/login" className="nav-link text-warning fw-bold">
          Cerrar Sesión
        </Link>
      </div>
    </aside>
  );
}