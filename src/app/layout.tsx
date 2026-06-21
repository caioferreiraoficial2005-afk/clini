import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clinisor.com.br"),
  title: "Clinisor — Seu consultório no piloto automático",
  description: "Instalamos um assistente de IA no WhatsApp do seu consultório. Ele atende pacientes, faz agendamentos e converte leads — 24 horas por dia, 7 dias por semana.",
  openGraph: {
    title: "Clinisor — Seu consultório no piloto automático",
    description: "Instalamos um assistente de IA no WhatsApp do seu consultório. Ele atende pacientes, faz agendamentos e converte leads — 24 horas por dia, 7 dias por semana.",
    images: [{ url: "/seo/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinisor — Seu consultório no piloto automático",
    description: "Instalamos um assistente de IA no WhatsApp do seu consultório. Ele atende pacientes, faz agendamentos e converte leads — 24 horas por dia, 7 dias por semana.",
  },
  icons: {
    icon: "/seo/favicon.png",
    apple: "/seo/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
