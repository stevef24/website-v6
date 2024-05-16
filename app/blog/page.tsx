import React from "react";
import { posts } from "#site/content";
import PostItem from "@/components/PostItem";
import { sortPosts } from "@/lib/utils";
import "@/styles/mdx.css";

const BlogPage = () => {
	const sortedPosts = sortPosts(posts.filter((post) => post.published));
	const displayPosts = sortedPosts;
	return (
		<div className="container max-w-4xl py-6 lg:py-10">
			<div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
				<div className="flex-1 space-y-4">
					<h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
					<p className="text-xl text-muted-foreground">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
						cupiditate in dolorem nam? Exercitationem, natus dolor doloribus
						assumenda velit eos?
					</p>
				</div>
			</div>
			<hr className="mt-8" />
			{displayPosts.length > 0 ? (
				<ul className="flex flex-col">
					{displayPosts.map(({ date, title, slug, description }) => (
						<li key={slug}>
							<PostItem
								slug={slug}
								title={title}
								date={date}
								description={description}
							/>
						</li>
					))}
				</ul>
			) : (
				<p>Nothing to see here</p>
			)}
		</div>
	);
};

export default BlogPage;
