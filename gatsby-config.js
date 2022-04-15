module.exports = {
	siteMetadata: {
		title: `VIP-SECURGENCE`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'home',
				path: `${__dirname}/content/accueil`
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'security',
				path: `${__dirname}/content/securite`
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'telecom',
				path: `${__dirname}/content/telecommunication`
			}
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`],
			},
		},
		'gatsby-plugin-netlify-cms'
	],
}
