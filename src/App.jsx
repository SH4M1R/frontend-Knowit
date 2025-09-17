import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Menu from "./pages/Menu";
import Ventas from "./pages/Ventas";

function App() {
  return (
    <div style={{ display: "flex" }}>{}
      <Sidebar />

      {}
      <main style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/ventas" element={<Ventas />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;