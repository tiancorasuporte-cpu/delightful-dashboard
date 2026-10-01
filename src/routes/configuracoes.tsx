import { createFileRoute } from "@tanstack/react-router";
import { ScreenFrame } from "../components/screen-frame";

export const Route = createFileRoute("/configuracoes")({
  head: () => ({
    meta: [
      { title: "Configurações — LexCobranca" },
      { name: "description", content: "Configurações da integração Waha e da régua de cobranças jurídicas." },
      { property: "og:title", content: "Configurações — LexCobranca" },
      { property: "og:description", content: "Configurações da integração Waha e da régua de cobranças jurídicas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Configuracoes,
});

function Configuracoes() {
  return <ScreenFrame src="/screens/configuracoes.html" title="Configurações LexCobranca" />;
}