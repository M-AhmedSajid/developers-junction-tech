import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import fetch from 'node-fetch';

const fetchBlogs = async () => {
  const response = await fetch('https://www.devjunctiontech.com/api/blogs/getAllBlogs');
  const blogs = await response.json();
  return blogs;
};

const generateSitemap = async () => {
  const blogs = await fetchBlogs();
  const categories = [
    ...new Set(
      blogs.flatMap((blog) =>
        blog.category.split(', ').map((ctg) => ctg.trim())
      )
    ),
  ];

  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${blogs
    .map((blog) => {
      const updatedAt = new Date(blog.updatedAt).toISOString();
      return `
    <url>
      <loc>https://www.devjunctiontech.com/blog/${blog.id}</loc>
      <lastmod>${updatedAt}</lastmod>
    </url>
  `;
    })
    .join('')}
    ${categories
      .map((category) => {
        const encodedCategory = encodeURIComponent(category);
        return `
        <url>
          <loc>https://www.devjunctiontech.com/blogs/category/${encodedCategory}</loc>
        </url>
        `;
      })
      .join('')}
    <url>
        <loc>https://www.devjunctiontech.com/</loc>
        <lastmod>2024-07-25T22:56:54+00:00</lastmod>
    </url>
    <url>
        <loc>https://www.devjunctiontech.com/our-projects</loc>
        <lastmod>2024-07-25T22:56:54+00:00</lastmod>
    </url>
    <url>
        <loc>https://www.devjunctiontech.com/about</loc>
        <lastmod>2024-07-25T22:56:54+00:00</lastmod>
    </url>
    <url>
        <loc>https://www.devjunctiontech.com/contact</loc>
        <lastmod>2024-07-25T22:56:54+00:00</lastmod>
    </url>
    <url>
        <loc>https://www.devjunctiontech.com/services/graphic-designing</loc>
        <lastmod>2024-07-25T22:56:54+00:00</lastmod>
    </url>
    <url>
        <loc>https://www.devjunctiontech.com/services/web-development</loc>
        <lastmod>2024-07-25T22:56:54+00:00</lastmod>
    </url>
    <url>
        <loc>https://www.devjunctiontech.com/services/video-editing</loc>
        <lastmod>2024-07-25T22:56:54+00:00</lastmod>
    </url>
    <url>
        <loc>https://www.devjunctiontech.com/services/content-writing</loc>
        <lastmod>2024-07-25T22:56:54+00:00</lastmod>
    </url>
    <url>
        <loc>https://www.devjunctiontech.com/blogs</loc>
        <lastmod>2024-08-13T23:07:08.590Z</lastmod>
    </url>
    <url>
        <loc>https://www.devjunctiontech.com/privacy-policy</loc>
        <lastmod>2024-08-22T23:07:08.590Z</lastmod>
    </url>
    <url>
        <loc>https://www.devjunctiontech.com/terms-and-conditions</loc>
        <lastmod>2024-08-22T23:07:08.590Z</lastmod>
    </url>
</urlset>`;

  await writeFile(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
};

export async function POST(request) {
  try {
    await generateSitemap();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error generating sitemap:", error.message);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}