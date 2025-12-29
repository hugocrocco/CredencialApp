import { Link } from "react-router-dom";
import PageFlipShell from "../components/PageFlipShell";

export default function Home() {
  const styles = {
    page: {
      minHeight: "100vh",
      background: "#1F2A14",
      padding: 20,
      fontFamily: "system-ui",
    },
    container: {
      maxWidth: 960,
      margin: "0 auto",
    },
    card: {
      borderRadius: 24,
      padding: 16,
      background: "#556B2F",
      color: "white",
      boxShadow: "0 20px 40px rgba(0,0,0,0.40)",
    },
    header: { textAlign: "center", marginBottom: 14 },
    brandRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      marginBottom: 6,
    },
    logoWrap: {
      width: 128,
      height: 128,
      borderRadius: 14,
      background: "rgba(255,255,255,0.14)",
      border: "1px solid rgba(255,255,255,0.18)",
      display: "grid",
      placeItems: "center",
      overflow: "hidden",
      flex: "0 0 auto",
    },
    logo: {
      width: 120,
      height: 120,
      objectFit: "contain",
      filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.25))",
    },
    org: { fontSize: 20, fontWeight: 900, letterSpacing: 0.2 },
    sub: { marginTop: 4, fontSize: 13, opacity: 0.9 },
    actions: { display: "grid", gap: 10, marginTop: 12 },
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
    hint: {
      marginTop: 12,
      fontSize: 12,
      opacity: 0.9,
      textAlign: "center",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <PageFlipShell>
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
                Crear cuenta
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
        </PageFlipShell>
      </div>
    </div>
  );
}