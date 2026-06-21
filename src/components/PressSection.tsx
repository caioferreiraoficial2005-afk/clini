import React from "react"

const BRAND_BLUE = "#3b82f6"
const RED = "#ef4444"
const DARK_BG = "#09090b"

const GLASS_RED: React.CSSProperties = {
  background: "rgba(12,12,14,0.82)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: `1px solid ${RED}40`,
  borderRadius: "1.5rem",
  boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
}

const GLASS_BLUE: React.CSSProperties = {
  background: "rgba(12,12,14,0.82)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: `1px solid ${BRAND_BLUE}`,
  borderRadius: "1.5rem",
  boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
}

const ROWS = [
  { label: "Custo mensal",            secretary: "R$ 1.800+",                clinisor: "R$ 347"                    },
  { label: "Horário de atendimento",  secretary: "8h/dia · 5 dias/semana",    clinisor: "24h/dia · 7 dias/semana"   },
  { label: "Tempo de resposta",       secretary: "Minutos ou horas",          clinisor: "Menos de 30 segundos"      },
  { label: "Férias e ausências",      secretary: "Sim",                       clinisor: "Nunca"                     },
  { label: "Setup",                   secretary: "Semanas de processo CLT",   clinisor: "Gratuito · em até 7 dias"  },
  { label: "Cancelamento",            secretary: "Multa + aviso prévio",      clinisor: "30 dias de aviso · sem multa" },
]

export function PressSection() {
  return (
    <section
      style={{
        backgroundColor: DARK_BG,
        padding: "clamp(3rem, 6vw, 6rem) 0",
      }}
    >
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          paddingInline: "clamp(1rem, 3vw, 3rem)",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            margin: "0 0 0.75rem 0",
            lineHeight: 1.15,
          }}
        >
          Clinisor vs Secretária CLT
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.5)",
            textAlign: "center",
            fontSize: "1rem",
            lineHeight: 1.5,
            marginBottom: "3rem",
          }}
        >
          Tudo que uma secretária faz, por menos de 20% do custo.
        </p>

        {/* Two cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.25rem",
            alignItems: "start",
          }}
          className="press-grid"
        >
          {/* ── Secretária CLT card (red) ── */}
          <div style={{ ...GLASS_RED, padding: "2rem" }}>
            {/* Name */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <span style={{ fontSize: "1.125rem", fontWeight: 700, color: "#ffffff" }}>Secretária CLT</span>
            </div>

            {/* Price */}
            <div style={{ marginBottom: "1.75rem" }}>
              <span style={{ fontSize: "2.5rem", fontWeight: 700, color: RED, lineHeight: 1.1 }}>R$ 1.800+</span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9375rem" }}>/mês</span>
            </div>

            {/* Rows */}
            <ul style={{ margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {ROWS.map((row) => (
                <li key={row.label} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", listStyle: "none" }}>
                  <span style={{ color: RED, fontWeight: 700, fontSize: "1rem", flexShrink: 0, lineHeight: 1.4 }}>✗</span>
                  <div>
                    <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "11px", display: "block", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1px" }}>{row.label}</span>
                    <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", lineHeight: 1.4 }}>{row.secretary}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Clinisor card (blue, highlighted) ── */}
          <div style={{ ...GLASS_BLUE, padding: "2rem" }}>
            {/* Name + badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <span style={{ fontSize: "1.125rem", fontWeight: 700, color: "#ffffff" }}>Clinisor</span>
              <span style={{ backgroundColor: BRAND_BLUE, color: "#fff", fontSize: "11px", fontWeight: 700, borderRadius: "100vw", padding: "3px 10px" }}>
                Melhor escolha
              </span>
            </div>

            {/* Price */}
            <div style={{ marginBottom: "1.75rem" }}>
              <span style={{ fontSize: "2.5rem", fontWeight: 700, color: "#ffffff", lineHeight: 1.1 }}>R$ 347</span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9375rem" }}>/mês</span>
            </div>

            {/* Rows */}
            <ul style={{ margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {ROWS.map((row) => (
                <li key={row.label} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", listStyle: "none" }}>
                  <span style={{ color: BRAND_BLUE, fontWeight: 700, fontSize: "1rem", flexShrink: 0, lineHeight: 1.4 }}>✓</span>
                  <div>
                    <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "11px", display: "block", textTransform: "uppercase" as const, letterSpacing: "0.05em", marginBottom: "1px" }}>{row.label}</span>
                    <span style={{ color: "#ffffff", fontSize: "0.9rem", fontWeight: 600, lineHeight: 1.4 }}>{row.clinisor}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quote */}
        <div
          style={{
            marginTop: "2rem",
            background: "rgba(12,12,14,0.82)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: `1px solid ${BRAND_BLUE}30`,
            borderRadius: "1rem",
            padding: "1.5rem 2rem",
            textAlign: "center",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem", lineHeight: 1.65, margin: 0 }}>
            &ldquo;O psicólogo não perde pacientes por falta de competência.
            Perde porque não consegue responder todo mundo na hora certa.
            A Clinisor resolve isso.&rdquo;
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .press-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
