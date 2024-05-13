import { defineConfig, defineCollection, s } from "velite";

const computedFileds = <T extends { slug: string }>(data: T) => ({
	...data,
	slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const posts = defineCollection({
	name: "post",
	pattern: "blog/**/*.mdx",
	schema: s
		.object({
			slug: s.path(),
			title: s.string(),
			description: s.string(),
			date: s.isodate(),
			published: s.boolean().default(true),
			body: s.mdx(),
		})
		.transform(computedFileds),
});

export default defineConfig({
	root: "content",
	output: {
		data: ".velite",
		assets: "public/static",
		base: "/static/",
		name: "[name]-[hash:6].[ext]",
		clean: true,
	},
	collections: { posts },
	// mdx: {
	//   rehypePlugins: [
	//     rehypeSlug,
	//     [rehypePrettyCode, { theme: "github-dark" }],
	//     [
	//       rehypeAutolinkHeadings,
	//       {
	//         behavior: "wrap",
	//         properties: {
	//           className: ["subheading-anchor"],
	//           ariaLabel: "Link to section",
	//         },
	//       },
	//     ],
	//   ],
	//   remarkPlugins: [],
	// },
});
