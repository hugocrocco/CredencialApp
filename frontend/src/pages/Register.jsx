import { useState } from "react";
import { Link } from "react-router-dom";

export default function Card() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={{ ...styles.card, transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>
          {/* FRONT SIDE */}
          <div style={{ ...styles.side, ...styles.front }}>
            <CardPreview />
            <div style={styles.footer}>
              <button
                type="button"
                onClick={() => setFlipped(true)}
                style={styles.linkButton}
              >
                Ver Beneficios
              </button>
              <span style={styles.dot}>•</span>
              <Link to="/" style={styles.link}>
                Ir al inicio
              </Link>
            </div>
          </div>

          {/* BACK SIDE */}
          <div style={{ ...styles.side, ...styles.back }}>
            <Benefits />
            <div style={styles.footer}>
              <button type="button" onClick={() => setFlipped(false)} style={styles.linkButton}>
                Volver a la credencial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardPreview() {
  return <div style={styles.cardPreview}>Credencial Front</div>;
}

function Benefits() {
  return <div style={styles.benefits}>Beneficios y detalles</div>;
}

const styles = {
  page: { minHeight: "100vh", background: "#1F2A14", padding: 20, fontFamily: "system-ui" },
  container: { maxWidth: 360, margin: "0 auto", perspective: 1000 },
  card: {
    width: 320,
    height: 480,
    borderRadius: 24,
    boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
    transformStyle: "preserve-3d",
    transition: "transform 0.6s",
    position: "relative",
  },
  side: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 24,
    backfaceVisibility: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 20,
    boxSizing: "border-box",
  },
  front: {
    background: "linear-gradient(180deg, #556B2F 0%, #3E4F22 100%)",
    color: "white",
  },
  back: {
    background: "white",
    color: "#1F2A14",
    transform: "rotateY(180deg)",
  },
  cardPreview: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  benefits: {
    flex: 1,
    fontSize: 18,
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingTop: 10,
  },
  link: {
    color: "#A3D07C",
    fontWeight: 900,
    textDecoration: "none",
    cursor: "pointer",
  },
  linkButton: {
    background: "none",
    border: "none",
    color: "#A3D07C",
    fontWeight: 900,
    cursor: "pointer",
    padding: 0,
    fontSize: "inherit",
  },
  dot: {
    color: "#A3D07C",
  },
};