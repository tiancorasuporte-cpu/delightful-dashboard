import { createFileRoute } from "@tanstack/react-router";
import { ScreenFrame } from "../components/screen-frame";

export const Route = createFileRoute("/usuarios")({
  head: () => ({
    meta: [
      { title: "Gestão de Usuários — LexCobranca" },
      { name: "description", content: "Gestão de membros, permissões e governança da banca jurídica." },
      { property: "og:title", content: "Gestão de Usuários — LexCobranca" },
      { property: "og:description", content: "Gestão de membros, permissões e governança da banca jurídica." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Usuarios,
});

function Usuarios() {
  return <ScreenFrame src="/screens/usuarios.html" title="Gestão de Usuários LexCobranca" />;
}