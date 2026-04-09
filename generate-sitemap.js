import { SitemapStream, streamToPromise } from 'sitemap'
import { writeFileSync } from 'fs'
import path from 'path'

const sitemap = new SitemapStream({ hostname: 'https://my-english.online' })

// Только главная страница (без якорей)
sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 })

sitemap.end()

streamToPromise(sitemap).then(data => {
  const outPath = path.join(process.cwd(), 'client', 'public', 'sitemap.xml')
  writeFileSync(outPath, data.toString())
  console.log(`✅ sitemap.xml сохранён в ${outPath}`)
}).catch(err => {
  console.error('❌ Ошибка генерации sitemap:', err)
  process.exit(1)
})