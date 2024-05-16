import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";
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
		<article className="contaienr py-6 max-sm:px-4 prose dark:prose-invert max-w-3xl mx-auto">
			<h1 className="mb-2">{post.title}</h1>
			{post.description ? (
				<p className="text-xl mt-0  text-muted-foreground">
					{post.description}
				</p>
			) : null}
			<hr className="my-4" />
			<MDXContent code={post.body} />
		</article>
	);
};

export default Post;
