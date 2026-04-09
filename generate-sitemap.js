import { SitemapStream, streamToPromise } from 'sitemap'
import { writeFileSync } from 'fs'

const sitemap = new SitemapStream({ hostname: 'https://my-english.online' })

// Перечислите все страницы вашего сайта
sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 })
// Дополнительные якоря на существующие секции

sitemap.end()

streamToPromise(sitemap).then(data => {
  // Путь к папке public (куда Vite копирует статику): client/public
  writeFileSync('./sitemap.xml', data.toString())
})