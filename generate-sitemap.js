// generate-sitemap.js
import fs from 'fs';
import path from 'path';
import { supabase } from './src/lib/supabaseClient.js';

const BASE_URL = 'https://www.virginianelai.com';

function getDate(dateString) {
  return new Date(dateString).toISOString().split('T')[0];
}

function buildUrl(loc, lastmod, priority = 0.75) {
  return `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><priority>${priority}</priority></url>`;
}

async function generateSitemap() {
  try {
    const urls = [];

    // === STATIC PAGES ===
    const today = getDate(new Date());
    urls.push(buildUrl(`${BASE_URL}/`, today, 1.0));
    urls.push(buildUrl(`${BASE_URL}/about-me`, today, 0.8));
    urls.push(buildUrl(`${BASE_URL}/contact`, today, 0.8));
    urls.push(buildUrl(`${BASE_URL}/blog/topic/all`, today, 0.8));
    urls.push(buildUrl(`${BASE_URL}/projects/topic/all`, today, 0.8));

    // === BLOG POSTS ===
    const { data: posts, error: postErr } = await supabase
      .from('posts')
      .select('slug, date, topics');

    if (postErr) throw postErr;

    const blogTopics = new Set();

    (posts || []).forEach(post => {
      if (!post.slug || typeof post.slug !== 'string') return;

      const safeSlug = encodeURIComponent(post.slug);
      const date = getDate(post.date || new Date());
      urls.push(buildUrl(`${BASE_URL}/blog/${safeSlug}`, date, 0.8));

      (post.topics || []).forEach(topic => {
        if (typeof topic === 'string' && topic.trim()) {
          blogTopics.add(topic.trim());
        }
      });
    });

    Array.from(blogTopics).sort().forEach(topic => {
      const safeTopic = encodeURIComponent(topic);
      urls.push(buildUrl(`${BASE_URL}/blog/topic/${safeTopic}`, today, 0.7));
    });

    // === PROJECT TOPICS ===
    const { data: projects, error: projErr } = await supabase
      .from('projects')
      .select('slug, date, topics');

    if (projErr) throw projErr;

    const projectTopics = new Set();

    (projects || []).forEach(project => {
      if (!project.slug || typeof project.slug !== 'string') return;

      (project.topics || []).forEach(topic => {
        if (typeof topic === 'string' && topic.trim()) {
          projectTopics.add(topic.trim());
        }
      });
    });

    Array.from(projectTopics).sort().forEach(topic => {
      const safeTopic = encodeURIComponent(topic);
      urls.push(buildUrl(`${BASE_URL}/projects/topic/${safeTopic}`, today, 0.7));
    });

    // === GENERATE XML ===
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
      urls.join('\n') +
      `\n</urlset>`;

    const outputPath = path.resolve('./public/sitemap.xml');
    fs.writeFileSync(outputPath, sitemap.trim(), 'utf8');
    console.log('✅ Sitemap generated at public/sitemap.xml');
  } catch (err) {
    console.error('❌ Failed to generate sitemap:', err.message);
  }
}

generateSitemap();
