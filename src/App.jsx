import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Menu from "./pages/Menu";
import Ventas from "./pages/Ventas";

function App() {
  const location = useLocation();
  const hideSidebar = location.pathname === "/login"; // 👉 condición

  return (
    <div>
      {!hideSidebar && <Sidebar />}

      <main style={{ marginLeft: hideSidebar ? "0" : "220px", padding: "20px" }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/ventas" element={<Ventas />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;