// generate-sitemap.js
import fs from 'fs';
import path from 'path';
import { supabase } from './src/lib/supabaseClient.js';

const BASE_URL = 'https://www.virginianelai.com';

function getDate(dateString) {
  return new Date(dateString).toISOString().split('T')[0];
}

function buildUrl(loc, lastmod, priority = 0.75) {
  return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`;
}

async function generateSitemap() {
  const urls = [];

  // Static pages
  urls.push(buildUrl(`${BASE_URL}/`, getDate(new Date()), 1.0));
  urls.push(buildUrl(`${BASE_URL}/about-me`, getDate(new Date()), 0.8));
  urls.push(buildUrl(`${BASE_URL}/contact`, getDate(new Date()), 0.8));
  urls.push(buildUrl(`${BASE_URL}/blog/topic/all`, getDate(new Date()), 0.8));
  urls.push(buildUrl(`${BASE_URL}/projects/topic/all`, getDate(new Date()), 0.8));

  // === BLOG POSTS ===
  const { data: posts } = await supabase.from('posts').select('slug, date, topics');
  const topicSet = new Set();

  (posts || []).forEach(post => {
    if (!post.slug || typeof post.slug !== 'string') return;

    const safeSlug = encodeURIComponent(post.slug);
    const date = getDate(post.date || new Date());

    urls.push(buildUrl(`${BASE_URL}/blog/${safeSlug}`, date, 0.8));

    (post.topics || []).forEach(topic => {
      if (typeof topic === 'string' && topic.trim()) {
        topicSet.add(topic.trim());
      }
    });
  });

  Array.from(topicSet).sort().forEach(topic => {
    const safeTopic = encodeURIComponent(topic);
    urls.push(buildUrl(`${BASE_URL}/blog/topic/${safeTopic}`, getDate(new Date()), 0.7));
  });

  // === PROJECTS ===
  const { data: projects } = await supabase.from('projects').select('slug, date, topics');
  const projectTopicSet = new Set();

  (projects || []).forEach(project => {
    if (!project.slug || typeof project.slug !== 'string') return;

    (project.topics || []).forEach(topic => {
      if (typeof topic === 'string' && topic.trim()) {
        projectTopicSet.add(topic.trim());
      }
    });
  });

  Array.from(projectTopicSet).sort().forEach(topic => {
    const safeTopic = encodeURIComponent(topic);
    urls.push(buildUrl(`${BASE_URL}/projects/topic/${safeTopic}`, getDate(new Date()), 0.7));
  });

  // === OUTPUT ===
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  const outputPath = path.resolve('./public/sitemap.xml');
  fs.writeFileSync(outputPath, sitemap.trim());
  console.log('✅ Sitemap generated at public/sitemap.xml');
}

generateSitemap();
