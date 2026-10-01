import { createFileRoute } from "@tanstack/react-router";
import { ScreenFrame } from "../components/screen-frame";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Painel de Cobranças — LexCobranca" },
      { name: "description", content: "Painel jurídico de cobranças, honorários e automações Waha." },
      { property: "og:title", content: "Painel de Cobranças — LexCobranca" },
      { property: "og:description", content: "Painel jurídico de cobranças, honorários e automações Waha." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <ScreenFrame src="/screens/dashboard.html" title="Painel de Cobranças LexCobranca" />;
}
