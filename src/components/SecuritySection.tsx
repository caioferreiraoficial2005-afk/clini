import { Sliders, Zap, Headphones, Unlock } from "lucide-react"

const BRAND_BLUE = "#3b82f6"

const DIFF_CARDS = [
  {
    Icon: Sliders,
    title: "Personalizado para você",
    description: "Tom de voz, especialidade, valores e fluxo de atendimento. Seu agente soa como uma extensão do seu consultório, não um bot genérico.",
  },
  {
    Icon: Zap,
    title: "No ar em até 24 horas",
    description: "Instalamos, configuramos, testamos e colocamos no ar. Você aprova as respostas antes de qualquer paciente receber.",
  },
  {
    Icon: Headphones,
    title: "Suporte e ajustes contínuos",
    description: "Até 3 ajustes por mês incluídos. Suporte via WhatsApp de segunda a sexta, das 9h às 18h. Prazo de resposta: até 4 horas úteis.",
  },
  {
    Icon: Unlock,
    title: "Sem fidelidade",
    description: "Cancele quando quiser com 30 dias de aviso. Sem multa, sem burocracia. Você fica porque quer.",
  },
]

export function SecuritySection() {
  return (
    <section
      id="diferenciais"
      style={{ backgroundColor: "#09090b", padding: "clamp(4rem, 8vw, 8rem) 0" }}
    >
      <div style={{ maxWidth: "90rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, color: "#ffffff", margin: 0, lineHeight: 1.15 }}>
            Tudo incluso. Zero burocracia.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.125rem", marginTop: "1rem", marginBottom: 0 }}>
            Serviço completo: instalamos, configuramos e mantemos o agente funcionando.
          </p>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}
          className="diff-grid"
        >
          {DIFF_CARDS.map(({ Icon, title, description }) => (
            <div
              key={title}
              style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "1rem", padding: "1.75rem" }}
            >
              <div
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  background: `${BRAND_BLUE}12`, border: `1px solid ${BRAND_BLUE}30`,
                  borderRadius: "0.75rem", padding: "10px", marginBottom: "16px",
                  width: "46px", height: "46px", color: BRAND_BLUE,
                }}
              >
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <h3 style={{ fontWeight: 600, fontSize: "1.0625rem", color: "#ffffff", margin: 0 }}>{title}</h3>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9375rem", marginTop: "8px", marginBottom: 0, lineHeight: 1.6 }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { .diff-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
