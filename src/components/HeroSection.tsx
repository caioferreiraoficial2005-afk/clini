"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { User, CalendarCheck, TrendingUp, CheckCircle2, Clock, MessageCircle } from "lucide-react"

const BRAND_BLUE = "#3b82f6"
const BRAND_BLUE_HOVER = "#2563eb"
const CTA_URL = "https://wa.me/5582988224653?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Clinisor%20e%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20gratuito."

const GLASS: React.CSSProperties = {
  background: "rgba(12,12,14,0.88)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: "20px",
  boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
}

const APPOINTMENTS = [
  { time: "09:00", name: "Ana Souza",    status: "Confirmada",  color: "#22c55e" },
  { time: "10:30", name: "Pedro Lima",   status: "Pendente",    color: "#f59e0b" },
  { time: "14:00", name: "Júlia Ramos",  status: "Confirmada",  color: "#22c55e" },
]

function MiniBarChart() {
  const bars = [4, 6, 5, 8, 7, 10, 9, 13, 11, 15, 14, 17, 16, 20]
  const max = Math.max(...bars)
  const chartH = 64
  const barW = 10
  const gap = 4
  const totalW = (barW + gap) * bars.length - gap
  return (
    <svg width={totalW} height={chartH} style={{ display: "block", width: "100%" }}>
      {bars.map((v, i) => {
        const h = Math.round((v / max) * chartH)
        const isLast = i === bars.length - 1
        const isRecent = i >= bars.length - 3
        const fill = isLast ? BRAND_BLUE : isRecent ? `${BRAND_BLUE}80` : "rgba(59,130,246,0.25)"
        return (
          <rect
            key={i}
            x={i * (barW + gap)}
            y={chartH - h}
            width={barW}
            height={h}
            rx={3}
            fill={fill}
            style={{
              transformBox: "fill-box" as React.CSSProperties["transformBox"],
              transformOrigin: "bottom",
              animation: `barGrow 0.55s ease-out both ${0.9 + i * 0.04}s`,
            }}
          />
        )
      })}
    </svg>
  )
}

export function HeroSection() {
  const desktopVisualRef = useRef<HTMLDivElement>(null)
  const mobileVisualRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observe = (el: HTMLElement | null) => {
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible")
            observer.unobserve(el)
          }
        },
        { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
      )
      observer.observe(el)
      return () => observer.disconnect()
    }
    const cleanA = observe(desktopVisualRef.current)
    const cleanB = observe(mobileVisualRef.current)
    return () => { cleanA?.(); cleanB?.() }
  }, [])

  return (
    <section
      id="main-content"
      aria-label="Seção principal"
      style={{ backgroundColor: "#09090b" }}
      className="relative w-full overflow-hidden"
    >
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 text-center">
        <div style={{ paddingTop: "220px" }} />

        <h1
          className="font-bold text-white text-center"
          style={{
            fontFamily: "var(--font-geist, ui-sans-serif, system-ui, sans-serif)",
            fontSize: "clamp(2rem, 4.2vw, 4rem)",
            lineHeight: 1.1,
            maxWidth: "780px",
            letterSpacing: "-0.02em",
            animation: "fadeUp 0.8s ease-out both 0.1s",
          }}
        >
          Seu consultório no piloto automático
        </h1>

        <p
          style={{
            fontSize: "clamp(0.9rem, 1.5vw, 1.125rem)",
            color: "rgba(255,255,255,0.65)",
            maxWidth: "540px",
            marginTop: "18px",
            lineHeight: 1.65,
            animation: "fadeUp 0.8s ease-out both 0.28s",
          }}
        >
          Instalamos um assistente de IA no WhatsApp do consultório de psicólogos.
          Atende pacientes, faz agendamentos e converte leads. 24 horas por dia, 7 dias por semana.
        </p>

        <a
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center font-bold transition-colors"
          style={{
            backgroundColor: BRAND_BLUE,
            color: "#ffffff",
            borderRadius: "100vw",
            padding: "14px 32px",
            fontSize: "0.9375rem",
            marginTop: "28px",
            textDecoration: "none",
            animation: "fadeUp 0.8s ease-out both 0.46s",
          }}
          onMouseEnter={(e) => { ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = BRAND_BLUE_HOVER }}
          onMouseLeave={(e) => { ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = BRAND_BLUE }}
        >
          Agendar diagnóstico gratuito
        </a>

        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", marginTop: "10px", animation: "fadeUp 0.8s ease-out both 0.58s" }}>
          30 minutos · Gratuito · Sem compromisso
        </p>

        {/* ── HERO VISUAL (desktop) ── */}
        <div
          ref={desktopVisualRef}
          className="scroll-reveal relative mx-auto mt-14 hidden lg:block"
          style={{ width: "100%", maxWidth: "1040px", height: "860px" }}
          aria-hidden="true"
        >
          {/* Glow behind phone */}
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -52%)", width: "420px", height: "640px", borderRadius: "50%", background: `radial-gradient(ellipse, ${BRAND_BLUE}28 0%, ${BRAND_BLUE}0a 50%, transparent 72%)`, pointerEvents: "none", zIndex: 5, filter: "blur(24px)" }} />
          {/* Outer ambient glow */}
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "620px", height: "620px", borderRadius: "50%", background: `radial-gradient(circle, ${BRAND_BLUE}0c 0%, transparent 65%)`, pointerEvents: "none", zIndex: 0 }} />

          {/* ── Card 1: Agenda de hoje (LEFT, large) ── */}
          <div
            style={{
              ...GLASS,
              position: "absolute",
              top: "10%",
              left: "12%",
              zIndex: 20,
              padding: "0",
              width: "290px",
              animation: "fadeIn 0.5s ease-out 0.3s both, heroFloat1 4.5s ease-in-out 0.8s infinite",
            }}
          >
            {/* Card header */}
            <div style={{ padding: "14px 18px 12px", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <CalendarCheck size={14} color={BRAND_BLUE} strokeWidth={2} />
                <span style={{ color: "#fff", fontSize: "12px", fontWeight: 700 }}>Agenda de hoje</span>
              </div>
              <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "10px" }}>21 jun</span>
            </div>

            {/* Appointment rows */}
            <div style={{ padding: "10px 18px 14px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {APPOINTMENTS.map((apt) => (
                <div key={apt.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: apt.color, flexShrink: 0 }} />
                    <div>
                      <p style={{ color: "#fff", fontSize: "11.5px", fontWeight: 600, margin: 0, lineHeight: 1.2 }}>{apt.name}</p>
                      <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "10px", margin: 0 }}>{apt.time}</p>
                    </div>
                  </div>
                  <span style={{ backgroundColor: `${apt.color}18`, color: apt.color, fontSize: "9.5px", fontWeight: 700, borderRadius: "6px", padding: "2px 8px", whiteSpace: "nowrap" as const }}>
                    {apt.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Card footer */}
            <div style={{ padding: "10px 18px", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: "6px" }}>
              <CheckCircle2 size={11} color="#22c55e" strokeWidth={2} />
              <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "10px" }}>3 consultas · 0 sem resposta</span>
            </div>
          </div>

          {/* ── Card 2: Nova paciente notification (LEFT bottom) ── */}
          <div
            style={{
              ...GLASS,
              position: "absolute",
              bottom: "14%",
              left: "0%",
              zIndex: 20,
              padding: "12px 16px",
              width: "256px",
              animation: "fadeIn 0.5s ease-out 0.55s both, heroFloat2 3.8s ease-in-out 1.2s infinite",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "34px", height: "34px", borderRadius: "50%", backgroundColor: "rgba(34,197,94,0.13)", border: "1.5px solid rgba(34,197,94,0.35)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#22c55e" }}>
                <MessageCircle size={15} strokeWidth={2} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ color: "#fff", fontSize: "11.5px", fontWeight: 700, margin: 0, lineHeight: 1.3 }}>Nova paciente</p>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "10px", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Ana entrou em contato</p>
              </div>
              <span style={{ backgroundColor: "#22c55e", color: "#000", fontSize: "9px", fontWeight: 700, borderRadius: "100vw", padding: "2px 8px", whiteSpace: "nowrap" as const, flexShrink: 0 }}>agora</span>
            </div>
          </div>

          {/* ── Card 3: Crescimento (RIGHT bottom, large with chart) ── */}
          <div
            style={{
              ...GLASS,
              position: "absolute",
              bottom: "4%",
              right: "12%",
              zIndex: 20,
              padding: "0",
              width: "296px",
              animation: "fadeIn 0.5s ease-out 0.75s both, heroFloat3 5s ease-in-out 1.3s infinite",
            }}
          >
            {/* Header */}
            <div style={{ padding: "14px 18px 12px", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <TrendingUp size={14} color={BRAND_BLUE} strokeWidth={2} />
                <span style={{ color: "#fff", fontSize: "12px", fontWeight: 700 }}>Crescimento</span>
              </div>
              <span style={{ backgroundColor: "rgba(34,197,94,0.15)", color: "#22c55e", fontSize: "9.5px", fontWeight: 700, borderRadius: "6px", padding: "3px 8px" }}>↑ este mês</span>
            </div>

            {/* Main stat */}
            <div style={{ padding: "14px 18px 10px" }}>
              <p style={{ color: "#fff", fontSize: "32px", fontWeight: 800, margin: 0, lineHeight: 1, letterSpacing: "-0.02em" }}>+38%</p>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "10.5px", margin: "4px 0 0 0" }}>mais agendamentos que no mês anterior</p>
            </div>

            {/* Metrics row */}
            <div style={{ padding: "10px 18px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "3px" }}>
                  <User size={10} color="rgba(255,255,255,0.35)" strokeWidth={2} />
                  <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "9.5px", margin: 0, textTransform: "uppercase", letterSpacing: "0.05em" }}>Pacientes</p>
                </div>
                <p style={{ color: "#fff", fontSize: "16px", fontWeight: 700, margin: 0, lineHeight: 1 }}>34</p>
                <p style={{ color: "#22c55e", fontSize: "9.5px", margin: "2px 0 0 0" }}>↑ 11 novos</p>
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "3px" }}>
                  <TrendingUp size={10} color="rgba(255,255,255,0.35)" strokeWidth={2} />
                  <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "9.5px", margin: 0, textTransform: "uppercase", letterSpacing: "0.05em" }}>Faturamento</p>
                </div>
                <p style={{ color: "#fff", fontSize: "16px", fontWeight: 700, margin: 0, lineHeight: 1 }}>R$11.798</p>
                <p style={{ color: "#22c55e", fontSize: "9.5px", margin: "2px 0 0 0" }}>↑ 29%</p>
              </div>
            </div>

            {/* Chart */}
            <div style={{ padding: "12px 18px 14px" }}>
              <MiniBarChart />
            </div>
          </div>

          {/* ── Phone mockup image ── */}
          <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", zIndex: 10 }}>
            <Image
              src="/images/mokup_telefone.png"
              alt="Assistente de IA no WhatsApp do consultório"
              width={375}
              height={780}
              style={{ height: "780px", width: "auto", display: "block", maxWidth: "none" }}
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Mobile hero — phone + floating cards */}
        <div ref={mobileVisualRef} className="scroll-reveal lg:hidden flex flex-col items-center" style={{ width: "100%", marginTop: "2.5rem", gap: "1.25rem" }}>
          {/* Phone + overlapping cards */}
          <div style={{ position: "relative", width: "115%", maxWidth: "520px" }}>
            <Image
              src="/images/mokup_telefone.png"
              alt="Assistente Clinisor no WhatsApp"
              width={375}
              height={780}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
              unoptimized
            />
            {/* Nova paciente — top left overlay */}
            <div style={{ ...GLASS, position: "absolute", top: "6%", left: "4%", padding: "8px 10px", zIndex: 10, animation: "heroFloat1 4s ease-in-out infinite", minWidth: "140px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div style={{ width: "22px", height: "22px", borderRadius: "50%", backgroundColor: "rgba(34,197,94,0.15)", border: "1.5px solid rgba(34,197,94,0.35)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#22c55e" }}>
                  <MessageCircle size={11} strokeWidth={2} />
                </div>
                <div>
                  <p style={{ color: "#fff", fontSize: "10px", fontWeight: 700, margin: 0 }}>Nova paciente</p>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "9px", margin: 0 }}>Ana entrou em contato</p>
                </div>
              </div>
            </div>
            {/* Stats — moved up */}
            <div style={{ ...GLASS, position: "absolute", bottom: "24%", right: "4%", padding: "10px 12px", zIndex: 10, animation: "heroFloat2 3.5s ease-in-out 0.5s infinite" }}>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "8px", margin: "0 0 2px 0", textTransform: "uppercase" as const, letterSpacing: "0.05em" }}>Agendamentos</p>
              <p style={{ color: "#fff", fontSize: "20px", fontWeight: 800, margin: 0, lineHeight: 1 }}>+38%</p>
              <p style={{ color: "#22c55e", fontSize: "9px", margin: "2px 0 0 0" }}>↑ este mês</p>
            </div>
          </div>

        </div>

        <div style={{ paddingBottom: "60px" }} />
      </div>
    </section>
  )
}
