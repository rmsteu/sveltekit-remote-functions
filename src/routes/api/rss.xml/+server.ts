import { getPosts } from '$lib/api/posts.remote'

const site = {
	title: 'The Svelte Times',
	description: 'The latest Svelte news and articles',
	url: 'http://localhost:5173/',
}

export async function GET() {
	const posts = await getPosts()

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${site.title}</title>
				<description>${site.description}</description>
				<link>${site.url}</link>
				<atom:link href="${site.url}rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.reverse()
					.map(
						(post) => `
						<item>
							<title>${post.title}</title>
							<description>${post.content}</description>
							<link>${site.url}${post.slug}</link>
							<guid isPermaLink="true">${site.url}${post.slug}</guid>
							<pubDate>${new Date(post.createdAt).toUTCString()}</pubDate>
						</item>
					`
					)
					.join('')}
			</channel>
		</rss>
	`.trim()

	return new Response(xml, { headers: { 'Content-Type': 'application/xml' } })
}
