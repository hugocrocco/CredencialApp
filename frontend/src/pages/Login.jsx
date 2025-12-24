import { Link } from "react-router-dom";

export default function Login() {
  const styles = {
    page: { minHeight: "100vh", background: "#1F2A14", padding: 20, fontFamily: "system-ui" },
    container: { maxWidth: 360, margin: "0 auto" },
    card: { borderRadius: 24, padding: 16, background: "#556B2F", color: "white", boxShadow: "0 20px 40px rgba(0,0,0,0.40)" },
    title: { margin: 0, fontSize: 18, fontWeight: 900 },
    sub: { marginTop: 8, fontSize: 13, opacity: 0.9, lineHeight: 1.3 },
    actions: { display: "grid", gap: 10, marginTop: 12 },
    btnAlt: { display: "block", textAlign: "center", padding: 12, borderRadius: 12, fontWeight: 900, textDecoration: "none", background: "rgba(31,42,20,0.35)", color: "white", border: "1px solid rgba(255,255,255,0.18)" },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>Iniciar sesión</h2>
          <div style={styles.sub}>
            Por ahora esta pantalla es de acceso rápido. Luego la conectamos al backend para login real.
          </div>

          <div style={styles.actions}>
            <Link to="/card" style={styles.btnAlt}>Ir a mi credencial</Link>
            <Link to="/register" style={styles.btnAlt}>Crear cuenta</Link>
            <Link to="/" style={styles.btnAlt}>Volver a inicio</Link>
          </div>
        </div>
      </div>
    </div>
  );
}