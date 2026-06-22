"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MenuIcon, XIcon } from "@/components/icons"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Preços", href: "#precos" },
  { label: "FAQ", href: "#faq" },
] as const

const BRAND_BLUE = "#3b82f6"
const BRAND_BLUE_HOVER = "#2563eb"
const CTA_URL = "https://wa.me/5582988224653?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Clinisor%20e%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20gratuito."

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:outline-none focus:ring-2 focus:ring-white"
        style={{ backgroundColor: "#09090b" }}
      >
        Pular para o conteúdo principal
      </a>

      <header
        className="fixed inset-x-0 top-0 z-50 flex h-[7rem] items-start md:bg-[#09090b]"
        style={{ overflow: "visible", paddingTop: "36px" }}
      >
        <div className="mx-auto w-full max-w-screen-xl px-4">
          {/* Desktop pill nav */}
          <nav
            className="hidden md:flex items-center justify-between gap-6 mx-auto px-5"
            style={{
              maxWidth: "58rem",
              borderRadius: "2.5rem",
              border: "1px solid rgba(255,255,255,0.12)",
              backgroundColor: "rgba(9,9,11,0.95)",
              padding: "13px 28px",
            }}
            aria-label="Navegação principal"
          >
            <Link href="/" aria-label="Clinisor — página inicial" className="shrink-0 flex items-center" style={{ overflow: "visible" }}>
              <Image
                src="/images/Logo.png"
                alt="Clinisor"
                width={200}
                height={60}
                style={{ height: "114px", width: "auto", marginTop: "-20px", marginBottom: "-26px" }}
                priority
              />
            </Link>

            <ul className="flex items-center gap-6 list-none m-0 p-0">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white font-normal transition-opacity hover:opacity-70"
                    style={{ fontSize: "0.9375rem" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={CTA_URL}
                className="inline-flex items-center justify-center text-sm font-bold transition-colors"
                style={{
                  backgroundColor: BRAND_BLUE,
                  color: "#ffffff",
                  borderRadius: "100vw",
                  padding: "8px 20px",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = BRAND_BLUE_HOVER
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = BRAND_BLUE
                }}
              >
                Diagnóstico gratuito
              </a>
            </div>
          </nav>

          {/* Mobile nav bar */}
          <div className="flex md:hidden items-center justify-center w-full px-3">
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              width: "100%", maxWidth: "480px",
              borderRadius: "2rem",
              border: "1px solid rgba(255,255,255,0.12)",
              backgroundColor: "rgba(9,9,11,0.95)",
              padding: "8px 20px",
              overflow: "visible",
            }}>
              <Link href="/" aria-label="Clinisor — página inicial" className="flex items-center" style={{ overflow: "visible" }}>
                <Image
                  src="/images/Logo.png"
                  alt="Clinisor"
                  width={180}
                  height={54}
                  style={{ height: "80px", width: "auto", marginTop: "-12px", marginBottom: "-18px" }}
                  priority
                />
              </Link>

              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                className="inline-flex items-center justify-center text-white rounded-md"
                style={{ padding: "6px" }}
                aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <XIcon className="size-7" /> : <MenuIcon className="size-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className={cn(
            "absolute inset-x-0 top-[7rem] md:hidden transition-all duration-200",
            mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          style={{
            backgroundColor: "#09090b",
            borderBottom: "1px solid rgba(255,255,255,0.10)",
          }}
          aria-hidden={!mobileOpen}
        >
          <nav className="flex flex-col gap-0 px-6 py-4" aria-label="Menu mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white text-base font-normal py-3 border-b transition-opacity hover:opacity-70"
                style={{ borderColor: "rgba(255,255,255,0.10)" }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <a
                href={CTA_URL}
                className="inline-flex items-center justify-center text-sm font-bold w-full"
                style={{
                  backgroundColor: BRAND_BLUE,
                  color: "#ffffff",
                  borderRadius: "100vw",
                  padding: "12px 20px",
                  textDecoration: "none",
                }}
              >
                Diagnóstico gratuito
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
