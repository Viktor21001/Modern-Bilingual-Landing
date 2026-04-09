import { SitemapStream, streamToPromise } from 'sitemap'
import { writeFileSync } from 'fs'
import path from 'path'

const sitemap = new SitemapStream({ hostname: 'https://my-english.online' })

// Перечислите все страницы вашего сайта
sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 })

sitemap.end()

streamToPromise(sitemap).then(data => {
  const xml = data.toString()
  const distPath = path.resolve('dist', 'sitemap.xml')
  const publicPath = path.resolve('client', 'public', 'sitemap.xml')

  writeFileSync(distPath, xml)
  writeFileSync(publicPath, xml)

  console.log('Sitemap generated:')
  console.log(`- ${distPath}`)
  console.log(`- ${publicPath}`)
})