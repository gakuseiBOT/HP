import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gakuseibot.pkopko.jp/",
      priority: 1,
    },
    {
      url: "https://gakuseibot.pkopko.jp/announce",
      priority: 1,
    },
    {
      url: "https://gakuseibot.pkopko.jp/contact",
      priority: 1,
    },
    {
      url: "https://gakuseibot.pkopko.jp/howto",
      priority: 1,
    },
    {
      url: "https://gakuseibot.pkopko.jp/member",
      priority: 1,
    },
    {
      url: "https://gakuseibot.pkopko.jp/tos",
      priority: 1,
    },
    {
      url: "https://gakuseibot.pkopko.jp/sponsor",
      priority: 1,
    },
  ];
}
