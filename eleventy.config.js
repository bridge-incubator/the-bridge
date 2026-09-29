import { RenderPlugin } from '@11ty/eleventy';

export default function (eleventyConfig) {
	// Lets layouts render Markdown from front matter: {{ text | renderContent("md") | safe }}
	eleventyConfig.addPlugin(RenderPlugin);

	// Files copied to the output as-is.
	eleventyConfig.addPassthroughCopy('site/assets');
	eleventyConfig.addPassthroughCopy('site/CNAME');
	eleventyConfig.addPassthroughCopy('site/robots.txt');
	eleventyConfig.addPassthroughCopy('site/.nojekyll');

	eleventyConfig.addGlobalData('year', () => new Date().getFullYear());
}

export const config = {
	dir: { input: 'site', output: '_site' },
	markdownTemplateEngine: 'njk'
};
