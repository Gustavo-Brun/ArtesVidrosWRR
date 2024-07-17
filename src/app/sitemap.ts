import { MetadataRoute } from "next";
import { servicesData } from "@/data/servicesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL = "https://artesvidroswrr.com.br";

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
    ...services,
  ];
}
