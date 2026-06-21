"use client"

const BRAND_BLUE = "#3b82f6"
const BRAND_BLUE_HOVER = "#2563eb"
const DARK_BG = "#09090b"
const CTA_URL = "https://wa.me/5582988224653?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Clinisor%20e%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20gratuito."

const GLASS: React.CSSProperties = {
  background: "rgba(12,12,14,0.82)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: `1px solid ${BRAND_BLUE}`,
  borderRadius: "1.5rem",
  boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
}

const FEATURES = [
  "Atendimento 24h/7 no WhatsApp",
  "Resposta em menos de 30 segundos",
  "Agendamento automático da primeira consulta",
  "Quebra de objeções personalizada",
  "Modo psicólogo: controle pelo WhatsApp",
  "Alertas de lead quente",
  "Configuração e setup incluídos",
  "Até 3 ajustes por mês",
  "Suporte via WhatsApp (seg–sex, 9h–18h)",
  "Sem fidelidade: cancele com 30 dias de aviso",
]

function FeatureItem({ text }: { text: string }) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "0.625rem",
        marginBottom: "0.75rem",
        listStyle: "none",
        padding: 0,
      }}
    >
      <span
        style={{
          color: BRAND_BLUE,
          fontWeight: 700,
          fontSize: "1rem",
          lineHeight: 1.4,
          flexShrink: 0,
          marginTop: "1px",
        }}
        aria-hidden="true"
      >
        ✓
      </span>
      <span style={{ color: "#ffffff", fontSize: "0.9375rem", lineHeight: 1.5 }}>
        {text}
      </span>
    </li>
  )
}

export function PricingSection() {
  return (
    <section
      id="precos"
      style={{
        backgroundColor: DARK_BG,
        padding: "clamp(4rem, 8vw, 8rem) 0",
      }}
    >
      <div
        style={{
          maxWidth: "90rem",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Um plano. Tudo incluso.
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            marginTop: "12px",
            marginBottom: "3rem",
            fontSize: "1.0625rem",
            lineHeight: 1.5,
          }}
        >
          Sem taxa de setup. Sem fidelidade. A mensalidade começa a partir da instalação.
        </p>

        {/* Plan card */}
        <div
          style={{
            ...GLASS,
            maxWidth: "480px",
            marginInline: "auto",
            padding: "2.5rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Name + Badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff" }}>
              Clinisor
            </span>
            <span
              style={{
                backgroundColor: BRAND_BLUE,
                color: "#ffffff",
                fontSize: "12px",
                fontWeight: 700,
                borderRadius: "100vw",
                padding: "4px 12px",
                lineHeight: 1.4,
              }}
            >
              Mais popular
            </span>
          </div>

          {/* Price */}
          <div style={{ marginBottom: "0.25rem" }}>
            <span style={{ fontSize: "3rem", fontWeight: 700, color: "#ffffff", lineHeight: 1.1 }}>
              R$ 347
            </span>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem" }}>/mês</span>
          </div>

          <p
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "0.8125rem",
              margin: "0 0 0.5rem 0",
            }}
          >
            Setup gratuito · Pix ou cartão de crédito
          </p>

          {/* Description */}
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.9375rem",
              lineHeight: 1.5,
              margin: "0 0 1.75rem 0",
            }}
          >
            Seu consultório atendendo 24h por dia, sem você precisar responder uma mensagem sequer.
          </p>

          {/* Features */}
          <ul style={{ margin: "0 0 2rem 0", padding: 0, flex: 1 }}>
            {FEATURES.map((feature) => (
              <FeatureItem key={feature} text={feature} />
            ))}
          </ul>

          {/* CTA */}
          <a
            href={CTA_URL}
            style={{
              display: "block",
              width: "100%",
              textAlign: "center",
              borderRadius: "100vw",
              padding: "14px 24px",
              fontSize: "1rem",
              fontWeight: 700,
              textDecoration: "none",
              transition: "background-color 0.15s ease",
              boxSizing: "border-box",
              backgroundColor: BRAND_BLUE,
              color: "#ffffff",
              border: "none",
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = BRAND_BLUE_HOVER
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = BRAND_BLUE
            }}
          >
            Quero agendar um diagnóstico gratuito
          </a>
        </div>

        {/* Comparison note */}
        <p
          style={{
            textAlign: "center",
            color: "rgba(255,255,255,0.35)",
            fontSize: "0.875rem",
            marginTop: "2rem",
            lineHeight: 1.6,
          }}
        >
          Uma secretária CLT custa R$ 1.800/mês e trabalha 8h por dia, 5 dias por semana.<br />
          O agente da Clinisor custa R$ 347/mês e trabalha 24h por dia, 7 dias por semana.
        </p>
      </div>
    </section>
  )
}
