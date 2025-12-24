import { useState } from "react";
import { mockDb } from "../services/mockDb";
import { Link } from "react-router-dom";

export default function Admin() {
  const [, forceUpdate] = useState(0);

  function toggleStatus(code) {
    mockDb[code].status = mockDb[code].status === "VALID" ? "REVOKED" : "VALID";
    forceUpdate((n) => n + 1);
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* MISMA TARJETA AZUL / MISMA FORMA */}
        <div style={styles.blueCard}>
          <div style={styles.header}>
            <div style={styles.brandRow}>
              <img src="/VMC.PNG" alt="VMC" style={styles.logo} />
              <div>
                <div style={styles.org}>Valparaíso Moto Club</div>
                <div style={styles.orgSub}>VMC</div>
              </div>
            </div>
            <div style={styles.subtitle}>Panel Administrativo</div>
          </div>

          <div style={styles.list}>
            {Object.entries(mockDb).map(([code, data]) => {
              const isValid = data.status === "VALID";
              return (
                <div key={code} style={styles.item}>
                  <div>
                    <div style={styles.name}>{data.name}</div>
                    <div style={styles.code}>{code}</div>

                    <span
                      style={{
                        ...styles.badge,
                        background: isValid
                          ? "rgba(220,252,231,0.95)"
                          : "rgba(254,226,226,0.95)",
                        color: isValid ? "#14532D" : "#7F1D1D",
                      }}
                    >
                      {data.status}
                    </span>
                  </div>

                  <button style={styles.button} onClick={() => toggleStatus(code)}>
                    Cambiar
                  </button>
                </div>
              );
            })}
          </div>

          <div style={styles.footer}>
            <Link to="/" style={styles.link}>
              Volver a credencial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  // MISMO MARCO QUE CARD
  page: {
    minHeight: "100vh",
    background: "#1F2A14" ,
    padding: 20,
    fontFamily: "system-ui",
  },
  container: {
    maxWidth: 420,
    margin: "0 auto",
  },

  // MISMA FORMA QUE LA CREDENCIAL
  blueCard: {
    borderRadius: 24,
    padding: 16,
    background: "#556B2F",
    color: "white",
    boxShadow: "0 20px 40px rgba(0,0,0,0.40)",
  },

  header: { textAlign: "center" },
  brandRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginBottom: 6,
  },
  logo: {
    width: 44,
    height: 44,
    objectFit: "contain",
    filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.25))",
  },
  org: { fontSize: 20, fontWeight: 900, letterSpacing: 0.2 },
  orgSub: { marginTop: 2, fontSize: 12, opacity: 0.9, fontWeight: 900, letterSpacing: 1 },
  subtitle: { marginTop: 4, fontSize: 14, opacity: 0.9 },

  list: { marginTop: 16, display: "flex", flexDirection: "column", gap: 12 },

  item: {
    background: "rgba(255,255,255,0.95)",
    color: "#0F172A",
    borderRadius: 14,
    padding: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  name: { fontWeight: 900, fontSize: 16 },
  code: { fontSize: 13, opacity: 0.7, marginTop: 2 },

  badge: {
    display: "inline-block",
    marginTop: 8,
    padding: "4px 10px",
    borderRadius: 999,
    fontWeight: 900,
    fontSize: 12,
  },

  button: {
    padding: "8px 12px",
    borderRadius: 10,
    border: "none",
    background: "#3E4F22",
    color: "white",
    fontWeight: 900,
    cursor: "pointer",
  },

  footer: { textAlign: "center", marginTop: 12 },
  link: { color: "white", fontWeight: 800, textDecoration: "none", opacity: 0.9 },
};