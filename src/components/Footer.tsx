import Link from "next/link"
import Image from "next/image"
import { InstagramIcon, WhatsAppIcon } from "@/components/icons"

const SOCIAL_LINKS = [
  { href: "https://instagram.com/clinisor",        label: "Instagram",       Icon: InstagramIcon },
  { href: "https://wa.me/5582988224653",            label: "WhatsApp",         Icon: WhatsAppIcon  },
] as const

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#09090b",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "3rem 0 1.5rem",
      }}
    >
      <div style={{ maxWidth: "90rem", margin: "0 auto", paddingInline: "clamp(1rem, 3vw, 3rem)" }}>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "space-between", alignItems: "flex-start" }}>

          {/* Left column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "block", alignSelf: "flex-start", overflow: "visible" }}>
              <Image
                src="/images/Logo.png"
                alt="Clinisor"
                width={300}
                height={90}
                style={{ height: "100px", width: "auto", display: "block", marginTop: "-18px", marginBottom: "-18px" }}
              />
            </div>

            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9375rem", margin: 0, lineHeight: 1.5, maxWidth: "260px" }}>
              IA para psicólogos e clínicas.<br />Seu consultório atendendo 24h por dia.
            </p>

            <a href="mailto:clinisor.contato@gmail.com" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", textDecoration: "none" }} className="footer-email-link">
              clinisor.contato@gmail.com
            </a>

            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  style={{ color: "rgba(255,255,255,0.5)", display: "inline-flex", transition: "color 0.2s ease" }}
                  className="footer-social-link"
                >
                  <Icon width={22} height={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Navegação
            </span>
            {[
              { label: "Como funciona", href: "#como-funciona" },
              { label: "Preços",        href: "#precos"        },
              { label: "FAQ",           href: "#faq"           },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9rem", textDecoration: "none", transition: "color 0.2s ease" }}
                className="footer-bottom-link"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.5rem", marginTop: "2.5rem", display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8125rem" }}>
            © 2025 Clinisor. Todos os direitos reservados.
          </span>
        </div>
      </div>

      <style>{`
        .footer-social-link:hover { color: white !important; }
        .footer-email-link:hover  { color: rgba(255,255,255,0.8) !important; }
        .footer-bottom-link:hover { color: rgba(255,255,255,0.7) !important; }
      `}</style>
    </footer>
  )
}
