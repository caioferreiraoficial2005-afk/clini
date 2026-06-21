import React from "react"

const BRAND_BLUE = "#3b82f6"
const BRAND_BLUE_HOVER = "#2563eb"
const CTA_URL = "https://wa.me/5582988224653?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Clinisor%20e%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20gratuito."

const GLASS: React.CSSProperties = {
  background: "rgba(12,12,14,0.82)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: "2rem",
  boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
}

export function CtaSection() {
  return (
    <div
      style={{
        paddingInline: "clamp(1rem, 3vw, 3rem)",
        marginTop: "clamp(4rem, 8vw, 8rem)",
        paddingBottom: "clamp(4rem, 8vw, 8rem)",
        backgroundColor: "#09090b",
      }}
    >
      <div
        style={{
          ...GLASS,
          marginInline: "auto",
          maxWidth: "800px",
          padding: "4rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: `1px solid ${BRAND_BLUE}30`,
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.75rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            maxWidth: "600px",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          Agende um diagnóstico gratuito
        </h2>

        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "1rem",
            textAlign: "center",
            marginTop: "16px",
            lineHeight: 1.6,
            maxWidth: "460px",
          }}
        >
          30 minutos para entender o seu consultório e mostrar como o agente funcionaria no seu caso. Sem compromisso.
        </p>

        <a
          href={CTA_URL}
          style={{
            display: "inline-block",
            marginTop: "32px",
            backgroundColor: BRAND_BLUE,
            color: "#ffffff",
            borderRadius: "100vw",
            padding: "16px 40px",
            fontWeight: 700,
            fontSize: "1.0625rem",
            textDecoration: "none",
            transition: "background-color 0.2s ease",
            lineHeight: 1,
          }}
          className="cta-button"
        >
          Falar com a Clinisor
        </a>

        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", marginTop: "14px" }}>
          Gratuito · Sem compromisso · Resposta em até 4 horas úteis
        </p>
      </div>

      <style>{`
        .cta-button:hover {
          background-color: ${BRAND_BLUE_HOVER} !important;
        }
      `}</style>
    </div>
  )
}
