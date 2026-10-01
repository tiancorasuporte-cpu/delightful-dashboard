import { createFileRoute } from "@tanstack/react-router";
import { ScreenFrame } from "../components/screen-frame";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Acesso Seguro — LexCobranca" },
      { name: "description", content: "Acesso seguro ao portal jurídico LexCobranca." },
      { property: "og:title", content: "Acesso Seguro — LexCobranca" },
      { property: "og:description", content: "Acesso seguro ao portal jurídico LexCobranca." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Login,
});

function Login() {
  return <ScreenFrame src="/screens/login.html" title="Acesso LexCobranca" />;
}