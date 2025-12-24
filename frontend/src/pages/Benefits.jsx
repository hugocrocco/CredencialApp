import { useState } from "react";
import { Link } from "react-router-dom";
import { benefitsDb } from "../services/benefitsDb";

export default function Card() {
  const [flipped, setFlipped] = useState(false);

  // Beneficios (mismo origen que /benefits)
  const benefits = Array.isArray(benefitsDb) ? benefitsDb.slice(0, 8) : [];

  return (
    <div style={styles.cardContainer}>
      {!flipped ? (
        <div style={styles.front}>
          {/* Front side content */}
          <button type="button" onClick={() => setFlipped(true)} style={styles.flipBtn}>
            Ver beneficios
          </button>
        </div>
      ) : (
        <div style={styles.back}>
          {/* BACK side */}
          <div style={styles.benefitList}>
            {benefits.length === 0 ? (
              <div style={styles.empty}>
                No hay beneficios cargados todavía.
                <div style={{ fontSize: 12, opacity: 0.75, marginTop: 6 }}>
                  (benefitsDb no es un array o viene vacío)
                </div>
              </div>
            ) : (
              benefits.map((b, i) => (
                <div key={b.id ?? i} style={styles.benefitItem}>
                  <div style={styles.benefitTitle}>• {b.title ?? b.name ?? "Beneficio"}</div>
                  <div style={styles.benefitDesc}>{b.description ?? b.desc ?? ""}</div>
                </div>
              ))
            )}
          </div>

          <div style={styles.backFooter}>
            <button
              type="button"
              onClick={() => setFlipped(false)}
              style={styles.backBtn}
            >
              Volver a la credencial
            </button>
            <span style={styles.dot}>•</span>
            <Link to="/admin" style={styles.link}>
              Admin
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  cardContainer: {
    // styles for card container
  },
  front: {
    // styles for front side
  },
  back: {
    // styles for back side
  },
  flipBtn: {
    // styles for flip button
  },
  benefitList: {
    // styles for benefit list
  },
  empty: {
    // styles for empty message
  },
  benefitItem: {
    // styles for benefit item
  },
  benefitTitle: {
    // styles for benefit title
  },
  benefitDesc: {
    // styles for benefit description
  },
  backFooter: {
    // styles for back footer
  },
  backBtn: {
    // styles for back button
  },
  dot: {
    // styles for dot separator
  },
  link: {
    // styles for link
  },
};