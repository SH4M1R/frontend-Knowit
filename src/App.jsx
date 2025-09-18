import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Ventas from "./pages/Ventas";

// Home simple para probar navegación
function Home() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Inicio</h1>
      <p>Esta es la página de inicio de tu app.</p>
      <Link to="/ventas" style={{ textDecoration: "underline" }}>
        Ir a Ventas
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ventas" element={<Ventas />} />
      </Routes>
    </BrowserRouter>
  );
}
