import { Link } from "react-router-dom";

export default function Login() {
  const styles = {
    page: {
      minHeight: "100vh",
      background: "#1F2A14",
      padding: 20,
      fontFamily: "system-ui",
    },
    container: {
      maxWidth: 420,
      margin: "0 auto",
    },

    // MISMA TARJETA BASE QUE CardPreview.jsx
    card: {
      borderRadius: 24,
      padding: 16,
      background: "#556B2F",
      color: "white",
      boxShadow: "0 20px 40px rgba(0,0,0,0.40)",
      boxSizing: "border-box",
    },

    header: { marginBottom: 10 },
    brandRow: { display: "flex", alignItems: "center", gap: 10 },

    // MISMO WRAP / LOGO QUE CardPreview.jsx
    logoWrap: {
      width: 128,
      height: 128,
      borderRadius: 14,
      background: "rgba(0,0,0,0.22)",
      border: "1px solid rgba(255,255,255,0.18)",
      display: "grid",
      placeItems: "center",
      overflow: "hidden",
      flex: "0 0 auto",
    },
    logo: { width: 120, height: 120, objectFit: "contain" },

    org: { fontSize: 18, fontWeight: 900, letterSpacing: 0.4 },
    orgSub: {
      fontSize: 11,
      textTransform: "uppercase",
      opacity: 0.9,
      letterSpacing: 1.2,
    },

    title: { marginTop: 10, marginBottom: 0, fontSize: 18, fontWeight: 900 },
    sub: { marginTop: 8, fontSize: 13, opacity: 0.9, lineHeight: 1.3 },

    actions: { display: "grid", gap: 10, marginTop: 14 },

    btn: {
      display: "block",
      textAlign: "center",
      padding: 12,
      borderRadius: 12,
      fontWeight: 900,
      textDecoration: "none",
      background: "#3E4F22",
      color: "white",
    },
    btnAlt: {
      display: "block",
      textAlign: "center",
      padding: 12,
      borderRadius: 12,
      fontWeight: 900,
      textDecoration: "none",
      background: "rgba(31,42,20,0.35)",
      color: "white",
      border: "1px solid rgba(255,255,255,0.18)",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.header}>
            <div style={styles.brandRow}>
              <div style={styles.logoWrap}>
                <img src="/VMC.PNG" alt="VMC" style={styles.logo} />
              </div>
              <div>
                <div style={styles.org}>Valparaíso Moto Club</div>
                <div style={styles.orgSub}>VMC</div>
              </div>
            </div>
          </div>

          <h2 style={styles.title}>Iniciar sesión</h2>
          <div style={styles.sub}>
            Por ahora esta pantalla es de acceso rápido. Luego la conectamos al backend para login real.
          </div>

          <div style={styles.actions}>
            <Link to="/card" style={styles.btn}>
              Ir a mi credencial
            </Link>
            <Link to="/register" style={styles.btnAlt}>
              Crear cuenta
            </Link>
            <Link to="/" style={styles.btnAlt}>
              Volver a inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}