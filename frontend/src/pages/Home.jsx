import { Link } from "react-router-dom";

export default function Home() {
  const styles = {
    page: {
      minHeight: "100vh",
      background: "#1F2A14",
      padding: 20,
      fontFamily: "system-ui",
    },
    container: { maxWidth: 360, margin: "0 auto" },
    card: {
      borderRadius: 28,
      padding: 18,
      background: "linear-gradient(180deg, #556B2F 0%, #3E4F22 100%)",
      color: "white",
      boxShadow: "0 20px 40px rgba(0,0,0,0.45)",
    },
    header: { textAlign: "center", marginBottom: 16 },
    brandRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      marginBottom: 6,
    },
    logoWrap: {
      width: 46,
      height: 46,
      borderRadius: 16,
      background: "rgba(0,0,0,0.25)",
      border: "1px solid rgba(255,255,255,0.25)",
      display: "grid",
      placeItems: "center",
      overflow: "hidden",
    },
    logo: {
      width: 34,
      height: 34,
      objectFit: "contain",
    },
    org: { fontSize: 20, fontWeight: 900, letterSpacing: 0.3 },
    sub: { marginTop: 4, fontSize: 13, opacity: 0.9 },
    actions: { display: "grid", gap: 12, marginTop: 14 },
    btn: {
      display: "block",
      textAlign: "center",
      padding: 14,
      borderRadius: 14,
      fontWeight: 900,
      textDecoration: "none",
      background: "#3E4F22",
      color: "white",
    },
    btnAlt: {
      display: "block",
      textAlign: "center",
      padding: 14,
      borderRadius: 14,
      fontWeight: 900,
      textDecoration: "none",
      background: "rgba(0,0,0,0.25)",
      color: "white",
      border: "1px solid rgba(255,255,255,0.25)",
    },
    hint: { marginTop: 14, fontSize: 12, opacity: 0.9, textAlign: "center" },
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
                <div style={styles.sub}>VMC</div>
              </div>
            </div>
            <div style={styles.sub}>Inicio</div>
          </div>

          <div style={styles.actions}>
            <Link to="/login" style={styles.btn}>
              Iniciar sesión
            </Link>
            <Link to="/register" style={styles.btnAlt}>
              Ingresar usuario / Crear cuenta
            </Link>
            <Link to="/admin" style={styles.btnAlt}>
              Administración
            </Link>
            <Link to="/card" style={styles.btnAlt}>
              Mi credencial
            </Link>
          </div>

          <div style={styles.hint}>
            Tip: si ya te registraste, entra a “Mi credencial”.
          </div>
        </div>
      </div>
    </div>
  );
}