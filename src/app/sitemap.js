

export default async function sitemap() {
	
	const baseURL = "https://iconview.org"
	
	const primaryURL = [
		{
			url: `${baseURL}`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${baseURL}/icons`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${baseURL}/docs`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5,
		},
		{
			url: `${baseURL}/login`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5,
		},		{
			url: `${baseURL}/register`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5,
		},		{
			url: `${baseURL}/pricing`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5,
		},		{
			url: `${baseURL}/support`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.5,
		},
	]
	
	const iconSEO = await fetch('https://www.iconview.org/api/seo').then((res) => res.json())
	
	const iconSitemaps = iconSEO.map((icon) => ({
		url: `${baseURL}/icons/${icon.name}`,
		lastModified: new Date(),
		changeFrequency: 'yearly',
		priority: 1,
	}))
	
	
	return [ ...primaryURL, ...iconSitemaps]
}