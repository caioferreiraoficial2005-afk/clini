import Image from "next/image"
import React from "react"

const BRAND_BLUE = "#3b82f6"
const CTA_URL = "https://wa.me/5582988224653?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Clinisor%20e%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20gratuito."

const STEPS = [
  { number: "1", title: "Diagnóstico gratuito", description: "30 min para entender seu consultório, seu paciente e o que o agente precisa saber." },
  { number: "2", title: "Onboarding personalizado", description: "Tom de voz, fluxo de atendimento e informações do seu consultório." },
  { number: "3", title: "Configuração e testes", description: "Você aprova as respostas antes de ir ao ar." },
  { number: "4", title: "No ar em até 7 dias", description: "WhatsApp funcionando 24h, com suporte e ajustes mensais incluídos." },
]

const GLASS: React.CSSProperties = {
  background: "rgba(12,12,14,0.82)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: "20px",
  boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
}

export function ConnectSection() {
  return (
    <section
      id="como-funciona"
      style={{
        backgroundColor: "#09090b",
        paddingTop: "clamp(4rem, 8vw, 8rem)",
        paddingBottom: "clamp(4rem, 8vw, 8rem)",
      }}
    >
      <div style={{ maxWidth: "90rem", marginInline: "auto", paddingInline: "clamp(1rem, 3vw, 3rem)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            gap: "clamp(3rem, 6vw, 6rem)",
            alignItems: "center",
          }}
        >
          {/* Left: text */}
          <div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, margin: "0 0 1.25rem 0" }}>
              Instalamos tudo.<br />Você só atende.
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.65, margin: "0 0 2.5rem 0", maxWidth: "400px" }}>
              Do diagnóstico ao WhatsApp funcionando em até 7 dias. Sem você precisar entender nada de tecnologia.
            </p>

            {/* Compact step list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
              {STEPS.map((step, i) => (
                <div key={step.number} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ width: "26px", height: "26px", borderRadius: "50%", backgroundColor: `${BRAND_BLUE}18`, border: `1px solid ${BRAND_BLUE}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: BRAND_BLUE, fontWeight: 700, fontSize: "12px" }}>{step.number}</span>
                  <div>
                    <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.9375rem", margin: "0 0 2px 0" }}>{step.title}</p>
                    <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.875rem", margin: 0, lineHeight: 1.55 }}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={CTA_URL}
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                backgroundColor: "#fff", color: "#09090b",
                borderRadius: "100vw", padding: "12px 28px",
                fontSize: "0.9375rem", fontWeight: 700, textDecoration: "none",
              }}
            >
              Quero começar
            </a>
          </div>

          {/* Right: image + glass card */}
          <div style={{ position: "relative" }}>
            {/* Image — square, very rounded */}
            <div className="section-image-right" style={{ borderRadius: "2.25rem", overflow: "hidden", aspectRatio: "1/1", position: "relative", maxWidth: "480px", marginInline: "auto" }}>
              <Image
                src="/images/como_funciona.jpg"
                alt="Psicóloga em atendimento enquanto Clinisor agenda outra consulta"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Glass card — WhatsApp panel */}
            <div
              className="glass-float glass-float-bl connect-float-card"
              style={{
                ...GLASS,
                position: "absolute",
                bottom: "-5%",
                left: "-8%",
                padding: "16px 18px",
                minWidth: "260px",
                maxWidth: "280px",
                animation: "heroFloat2 4.5s ease-in-out infinite",
                zIndex: 10,
              }}
            >
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "12px", paddingBottom: "10px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: `${BRAND_BLUE}18`, border: `1px solid ${BRAND_BLUE}40`, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", flexShrink: 0 }}>
                  <Image src="/images/Logo_icone.png" alt="Clinisor" width={22} height={22} style={{ objectFit: "contain" }} />
                </div>
                <div>
                  <p style={{ color: "#fff", fontSize: "11px", fontWeight: 700, margin: 0 }}>Clinisor</p>
                  <p style={{ color: "#22c55e", fontSize: "10px", margin: 0 }}>● online agora</p>
                </div>
              </div>
              {/* Chat */}
              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "10px 10px 10px 2px", padding: "7px 10px" }}>
                  <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "10.5px", margin: 0, lineHeight: 1.45 }}>Oi! Tenho horário terça às 14h ou quinta às 10h. Qual prefere?</p>
                </div>
                <div style={{ background: `linear-gradient(135deg, ${BRAND_BLUE}, #2563eb)`, borderRadius: "10px 10px 2px 10px", padding: "7px 10px", alignSelf: "flex-end" }}>
                  <p style={{ color: "#fff", fontSize: "10.5px", margin: 0 }}>Quinta às 10h! 😊</p>
                </div>
                <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "10px 10px 10px 2px", padding: "7px 10px" }}>
                  <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "10.5px", margin: 0 }}>Perfeito! Consulta agendada ✓</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
