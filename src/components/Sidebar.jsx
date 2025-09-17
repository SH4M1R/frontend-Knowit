import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <h2 style={styles.title}>Restaurante Lautaro´S</h2>
      <nav style={styles.nav}>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/productos" style={styles.link}>Productos</Link>
        <Link to="/ventas" style={styles.link}>Ventas</Link>
        <div style={styles.bottomLink}>
          <Link to="/login" style={styles.link}>Cerrar Sesión</Link>
        </div>
      </nav>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: "200px",
    minHeight: "100vh",
    height: "auto",
    background: "black",
    color: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  title: {
    fontSize: "18px",
    marginBottom: "20px"
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    height: "100%",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px"
  },
  bottomLink: {
    marginTop: "auto"
  }
};