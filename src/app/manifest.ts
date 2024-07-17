import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vidraçaria Artes Vidros W.R.R",
    short_name: "Artes Vidros W.R.R",
    description:
      "Vidraçaria Profissional no Jardim Selma - Zona Sul de São Paulo",
    lang: "pt-BR",
    start_url: "/",
    display: "standalone",
  };
}
