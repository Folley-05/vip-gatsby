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
				path: `${__dirname}/content/home`
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'security',
				path: `${__dirname}/content/security`
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'telecom',
				path: `${__dirname}/content/tel`
			}
		},
		{
			resolve: 'gatsby-plugin-mdx',
			option: {
				extensions: ['.mdx', '.md']
			}
		}
	],
}
