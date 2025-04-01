interface Route {
  url: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

function generateSitemap(routes: Route[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
      .map(
        (route) => `
    <url>
        <loc>https://dotonesolutions.co.ke${route.url}</loc>
        ${route.lastmod ? `<lastmod>${route.lastmod}</lastmod>` : ""}
        ${
          route.changefreq ? `<changefreq>${route.changefreq}</changefreq>` : ""
        }
        ${route.priority ? `<priority>${route.priority}</priority>` : ""}
    </url>`
      )
      .join("")}
</urlset>`;
}

export async function GET() {
  const routes: Route[] = [
    {
      url: "/",
      changefreq: "weekly",
      priority: 1.0,
      lastmod: new Date().toISOString(),
    },
    {
      url: "/about",
      changefreq: "monthly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      url: "/services",
      changefreq: "weekly",
      priority: 0.9,
      lastmod: new Date().toISOString(),
    },
    {
      url: "/contact",
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
  ];

  return new Response(generateSitemap(routes), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
