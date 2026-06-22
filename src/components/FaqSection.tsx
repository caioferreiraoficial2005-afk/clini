"use client"

import { useState } from "react"

interface FaqItem {
  question: string
  answer: string
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Como funciona exatamente?",
    answer:
      "Instalamos um assistente de IA no WhatsApp do seu consultório. Quando um paciente manda mensagem, o agente responde automaticamente, apresentando seus serviços, tirando dúvidas, quebrando objeções e realizando o agendamento. Você recebe uma notificação quando um lead quente é identificado.",
  },
  {
    question: "Em quanto tempo começa a funcionar?",
    answer:
      "Em até 24 horas após o fechamento. O processo é: diagnóstico gratuito → contrato → onboarding de 1 hora → configuração → testes → você aprova → entrega. Rápido, sem burocracia.",
  },
  {
    question: "O agente pode fazer besteira e afastar um paciente?",
    answer:
      "Não. Antes de ir ao ar, você aprova todas as respostas do agente. Além disso, o agente é treinado com o tom de voz e as informações do seu consultório. Ele soa como uma extensão sua, não um bot genérico. Se quiser entrar na conversa pessoalmente, basta um comando para pausá-lo.",
  },
  {
    question: "Preciso ter algum conhecimento de tecnologia?",
    answer:
      "Nenhum. Nossa equipe cuida de tudo: instalação, configuração, conexão com seu WhatsApp e manutenção. Você só precisa responder às perguntas do onboarding e aprovar as respostas antes de irmos ao ar.",
  },
  {
    question: "Meu número de WhatsApp continua sendo o mesmo?",
    answer:
      "Sim. Conectamos o agente ao seu número atual. O paciente continua conversando pelo mesmo número que você já usa. A diferença é que agora ele recebe respostas imediatas, a qualquer hora.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer:
      "Sim, sem fidelidade e sem multa. Basta avisar com 30 dias de antecedência e o serviço é encerrado. Simples assim.",
  },
  {
    question: "Quanto custa?",
    answer:
      "R$ 347 por mês, sem taxa de setup. A mensalidade começa a partir da instalação. Aceitamos Pix ou cartão de crédito.",
  },
]

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.2s ease",
        flexShrink: 0,
      }}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function AccordionItem({ item, index }: { item: FaqItem; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "20px 0",
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          fontSize: "1.0625rem",
          fontWeight: 600,
          color: "white",
          cursor: "pointer",
          background: "none",
          border: "none",
          padding: 0,
          textAlign: "left",
          gap: "1rem",
        }}
      >
        <span>{item.question}</span>
        <ChevronIcon open={open} />
      </button>

      <div
        id={`faq-answer-${index}`}
        style={{
          overflow: "hidden",
          maxHeight: open ? "500px" : "0",
          transition: "max-height 0.3s ease",
        }}
      >
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "0.9375rem",
            paddingTop: "12px",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          {item.answer}
        </p>
      </div>
    </div>
  )
}

export function FaqSection() {
  return (
    <section
      id="faq"
      style={{
        backgroundColor: "#09090b",
        padding: "clamp(4rem, 8vw, 8rem) 0",
      }}
    >
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          paddingInline: "clamp(1rem, 3vw, 3rem)",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.75rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            margin: 0,
          }}
        >
          Dúvidas? A gente responde
        </h2>

        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            marginTop: "12px",
            fontSize: "1rem",
            lineHeight: 1.5,
          }}
        >
          As perguntas mais comuns sobre a Clinisor
        </p>

        <div style={{ marginTop: "3rem" }}>
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
