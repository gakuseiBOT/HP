import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://gakuseibot.com/',
      priority: 1,
    },
    {
      url: 'https://gakuseibot.com/announce',
      priority: 1,
    },
    {
      url: 'https://gakuseibot.com/contact',
      priority: 1,
    },
    {
      url: 'https://gakuseibot.com/howto',
      priority: 1,
    },
    {
      url: 'https://gakuseibot.com/member',
      priority: 1,
    },
    {
      url: 'https://gakuseibot.com/tos',
      priority: 1,
    },
    {
      url: 'https://gakuseibot.com/privacypolicy',
      priority: 1,
    },
    {
      url: 'https://gakuseibot.com/sponsor',
      priority: 1,
    },
  ];
}
