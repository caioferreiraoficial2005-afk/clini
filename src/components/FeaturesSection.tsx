import Image from "next/image"
import { Zap, User, Bell, BarChart2 } from "lucide-react"

const BRAND_BLUE = "#3b82f6"
const CTA_URL = "https://wa.me/5582988224653?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Clinisor%20e%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20gratuito."

const GLASS: React.CSSProperties = {
  background: "rgba(12,12,14,0.82)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: "20px",
  boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
}

export function FeaturesSection() {
  return (
    <section
      id="recursos"
      style={{ backgroundColor: "#09090b", paddingTop: "clamp(4rem, 8vw, 8rem)", paddingBottom: "clamp(4rem, 8vw, 8rem)" }}
    >
      <div style={{ maxWidth: "90rem", marginInline: "auto", paddingInline: "clamp(1rem, 3vw, 3rem)" }}>

        {/* ── Modo Paciente: imagem esquerda, texto direita ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            gap: "clamp(3rem, 6vw, 6rem)",
            alignItems: "center",
            marginBottom: "clamp(6rem, 10vw, 10rem)",
          }}
        >
          {/* Image left */}
          <div style={{ position: "relative" }}>
            {/* Blue glow behind image */}
            <div style={{ position: "absolute", inset: "-14%", background: "radial-gradient(ellipse at center, rgba(59,130,246,0.22) 0%, rgba(59,130,246,0.07) 50%, transparent 72%)", filter: "blur(52px)", borderRadius: "50%", pointerEvents: "none" }} />
            <div className="section-image-left" style={{ borderRadius: "2.25rem", overflow: "hidden", aspectRatio: "1/1", position: "relative", maxWidth: "480px", marginInline: "auto" }}>
              <Image
                src="/images/modo_paciente.jpg"
                alt="Paciente sendo atendida pelo Clinisor"
                fill
                style={{ objectFit: "cover", objectPosition: "center 70%" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Glass card — chat */}
            <div
              className="glass-float glass-float-br paciente-respondido"
              style={{
                ...GLASS,
                position: "absolute",
                bottom: "-6%",
                right: "-6%",
                padding: "18px 20px",
                minWidth: "300px",
                maxWidth: "320px",
                animation: "heroFloat1 4s ease-in-out infinite",
                zIndex: 10,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <Zap size={13} color={BRAND_BLUE} strokeWidth={2} />
                <p style={{ color: BRAND_BLUE, fontSize: "11px", fontWeight: 700, margin: 0 }}>Respondido em 8 segundos</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                <div style={{ background: `linear-gradient(135deg, ${BRAND_BLUE}, #2563eb)`, borderRadius: "10px 10px 2px 10px", padding: "8px 11px", alignSelf: "flex-end" }}>
                  <p style={{ color: "#fff", fontSize: "11px", margin: 0, lineHeight: 1.4 }}>Olá! Vocês atendem plano de saúde?</p>
                </div>
                <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: "10px 10px 10px 2px", padding: "8px 11px" }}>
                  <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "11px", margin: 0, lineHeight: 1.4 }}>Atendemos de forma particular. Posso verificar os horários disponíveis?</p>
                </div>
                <div style={{ alignSelf: "flex-end" }}>
                  <span style={{ backgroundColor: "rgba(34,197,94,0.18)", color: "#22c55e", fontSize: "10px", fontWeight: 700, borderRadius: "100vw", padding: "3px 10px" }}>Consulta agendada</span>
                </div>
              </div>
            </div>

            {/* Badge top-left */}
            <div
              className="glass-float glass-float-tl"
              style={{
                ...GLASS,
                position: "absolute",
                top: "6%",
                left: "-4%",
                padding: "10px 14px",
                animation: "heroFloat2 3.5s ease-in-out infinite 1s",
                zIndex: 10,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "50%", backgroundColor: "rgba(34,197,94,0.13)", border: "1.5px solid rgba(34,197,94,0.35)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#22c55e" }}>
                  <User size={13} strokeWidth={2} />
                </div>
                <div>
                  <p style={{ color: "#fff", fontSize: "11px", fontWeight: 700, margin: 0 }}>Nova paciente</p>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "10px", margin: 0 }}>Quer agendar consulta</p>
                </div>
                <span style={{ backgroundColor: "#22c55e", color: "#000", fontSize: "9px", fontWeight: 700, borderRadius: "100vw", padding: "2px 7px", whiteSpace: "nowrap" }}>agora</span>
              </div>
            </div>
          </div>

          {/* Text right */}
          <div className="mobile-text-first">
            <span style={{ display: "inline-block", backgroundColor: `${BRAND_BLUE}18`, color: BRAND_BLUE, fontSize: "12px", fontWeight: 700, borderRadius: "100vw", padding: "4px 14px", letterSpacing: "0.05em", textTransform: "uppercase" as const, marginBottom: "1.25rem" }}>
              Modo Paciente
            </span>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, margin: "0 0 1.25rem 0" }}>
              Atende enquanto você está em sessão
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.0625rem", lineHeight: 1.7, margin: "0 0 0.875rem 0" }}>
              O agente responde em até 30 segundos, qualifica o paciente e agenda a consulta completa. Valor, modalidade, disponibilidade: tudo resolvido sem você precisar tocar no telefone.
            </p>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9375rem", lineHeight: 1.65, margin: "0 0 2rem 0" }}>
              Nenhuma mensagem fica sem resposta, nem nos fins de semana.
            </p>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center font-bold"
              style={{ backgroundColor: "#fff", color: "#09090b", borderRadius: "100vw", padding: "12px 28px", fontSize: "0.9375rem", textDecoration: "none" }}
            >
              Quero começar
            </a>
          </div>

          {/* Mobile CTA Modo Paciente */}
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden inline-flex items-center justify-center font-bold"
            style={{ gridColumn: "1 / -1", justifySelf: "center", backgroundColor: "#fff", color: "#09090b", borderRadius: "100vw", padding: "10px 28px", fontSize: "0.875rem", textDecoration: "none", marginTop: "1.5rem" }}
          >
            Quero atender 24h por dia
          </a>
        </div>

        {/* ── Modo Psicólogo: texto esquerda, imagem direita ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            gap: "clamp(3rem, 6vw, 6rem)",
            alignItems: "center",
          }}
        >
          {/* Text left */}
          <div>
            <span style={{ display: "inline-block", backgroundColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.65)", fontSize: "12px", fontWeight: 700, borderRadius: "100vw", padding: "4px 14px", letterSpacing: "0.05em", textTransform: "uppercase" as const, marginBottom: "1.25rem" }}>
              Modo Psicólogo
            </span>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, margin: "0 0 1.25rem 0" }}>
              Você no controle, sem precisar estar disponível
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.0625rem", lineHeight: 1.7, margin: "0 0 0.875rem 0" }}>
              Receba um alerta quando um lead quente aparecer. Veja a agenda do dia e os novos contatos direto pelo WhatsApp que você já usa.
            </p>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9375rem", lineHeight: 1.65, margin: "0 0 2rem 0" }}>
              Nenhum sistema novo para aprender. Nenhuma tela extra para abrir.
            </p>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center font-bold"
              style={{ backgroundColor: "#fff", color: "#09090b", borderRadius: "100vw", padding: "12px 28px", fontSize: "0.9375rem", textDecoration: "none" }}
            >
              Quero começar
            </a>
          </div>

          {/* Image right */}
          <div style={{ position: "relative" }}>
            {/* Blue glow behind image */}
            <div style={{ position: "absolute", inset: "-14%", background: "radial-gradient(ellipse at center, rgba(59,130,246,0.22) 0%, rgba(59,130,246,0.07) 50%, transparent 72%)", filter: "blur(52px)", borderRadius: "50%", pointerEvents: "none" }} />
            <div className="section-image-right" style={{ borderRadius: "2.25rem", overflow: "hidden", aspectRatio: "1/1", position: "relative", maxWidth: "480px", marginInline: "auto" }}>
              <Image
                src="/images/modo_psicologo.jpg"
                alt="Psicóloga verificando notificações do Clinisor"
                fill
                style={{ objectFit: "cover", objectPosition: "center 35%" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Glass card — lead panel */}
            <div
              className="glass-float glass-float-bl psicologo-novos-contatos"
              style={{
                ...GLASS,
                position: "absolute",
                bottom: "-6%",
                left: "-8%",
                padding: "18px 20px",
                minWidth: "295px",
                maxWidth: "315px",
                animation: "heroFloat3 5s ease-in-out infinite 0.8s",
                zIndex: 10,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px", paddingBottom: "10px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <BarChart2 size={13} color="rgba(255,255,255,0.4)" strokeWidth={2} />
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>Novos contatos hoje</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { name: "Ana Souza",    status: "quer agendar",      badge: "quente", color: "#ef4444" },
                  { name: "Pedro Lima",   status: "perguntou o valor", badge: "novo",   color: BRAND_BLUE },
                  { name: "Júlia Ramos",  status: "consulta agendada", badge: null,     color: "" },
                ].map((item) => (
                  <div key={item.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ width: "28px", height: "28px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "rgba(255,255,255,0.4)" }}>
                        <User size={13} strokeWidth={1.75} />
                      </div>
                      <div>
                        <p style={{ color: "#fff", fontSize: "11px", fontWeight: 700, margin: 0 }}>{item.name}</p>
                        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "10px", margin: 0 }}>{item.status}</p>
                      </div>
                    </div>
                    {item.badge && (
                      <span style={{ backgroundColor: `${item.color}20`, color: item.color, fontSize: "9px", fontWeight: 700, borderRadius: "100vw", padding: "2px 8px", whiteSpace: "nowrap" as const }}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bell badge top-right */}
            <div
              className="glass-float glass-float-tr"
              style={{
                ...GLASS,
                position: "absolute",
                top: "6%",
                right: "-4%",
                padding: "10px 14px",
                animation: "heroFloat1 4s ease-in-out infinite 1.5s",
                zIndex: 10,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "50%", backgroundColor: `${BRAND_BLUE}18`, border: `1.5px solid ${BRAND_BLUE}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: BRAND_BLUE }}>
                  <Bell size={13} strokeWidth={2} />
                </div>
                <div>
                  <p style={{ color: "#fff", fontSize: "11px", fontWeight: 700, margin: 0 }}>Lead quente</p>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "10px", margin: 0 }}>Ana quer agendar hoje</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile CTA Modo Psicólogo */}
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden inline-flex items-center justify-center font-bold"
            style={{ gridColumn: "1 / -1", justifySelf: "center", backgroundColor: "#fff", color: "#09090b", borderRadius: "100vw", padding: "10px 28px", fontSize: "0.875rem", textDecoration: "none", marginTop: "1.5rem" }}
          >
            Começar gratuitamente
          </a>
        </div>

      </div>
    </section>
  )
}
