import { posts } from "#site/content";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/ui/mdx-components";
import Link from "next/link";

interface PostPageProps {
	params: {
		slug: string[];
	};
}

async function getPostFromParmas(params: PostPageProps["params"]) {
	const slug = params?.slug.join("/");
	const post = posts.find((post) => post.slugAsParams === slug);
	return post;
}

export async function generateStaticParams(): Promise<
	PostPageProps["params"][]
> {
	return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

const Post = async ({ params: { slug } }: PostPageProps) => {
	const post = await getPostFromParmas({ slug });

	if (!post || !post.published) {
		notFound();
	}

	return (
		<>
			<div className="sticky max-sm:top-[100px] sm:top-4 z-50 max-w-5xl mx-auto px-4 max-sm:mt-[100px]">
				<Link
					href="/blog"
					className="no-underline inline-flex items-center text-sm text-orange-500 hover:text-orange-600 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2 px-4 rounded-full shadow-sm"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="mr-2"
					>
						<path d="m15 18-6-6 6-6" />
					</svg>
					Back to blog
				</Link>
			</div>
			<article className="container py-6 max-sm:px-4 prose dark:prose-invert max-w-4xl mx-auto max-sm:mb-[50px] md:mb-[150px]">
				<h1 className="mb-2">{post.title}</h1>
				{post.description ? (
					<p className="text-xl mt-0  text-muted-foreground">
						{post.description}
					</p>
				) : null}
				<hr className="my-4" />
				<MDXContent code={post.body} />
			</article>
		</>
	);
};

export default Post;
