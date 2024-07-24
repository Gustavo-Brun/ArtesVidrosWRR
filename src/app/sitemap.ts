import { MetadataRoute } from "next";
import { servicesData } from "@/data/servicesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL = "https://www.artesvidroswrr.com.br";

  const services: MetadataRoute.Sitemap = servicesData.map(({ url }) => {
    return {
      url: `${baseURL}/servicos/${url}`,
      priority: 0.8,
    };
  });

  return [
    {
      url: baseURL,
      priority: 1,
    },
    {
      url: baseURL + "/servicos",
      priority: 0.9,
    },
    ...services,
  ];
}
