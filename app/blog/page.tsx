import React from "react";
import { posts } from "#site/content";
import PostItem from "@/components/PostItem";
import { sortPosts } from "@/lib/utils";
import "@/styles/mdx.css";
import { QueryPagination } from "@/components/ui/QueryPagination";

const POSTS_PER_PAGE = 10;

interface BlogPageProps {
	searchParams: {
		page?: string;
	};
}

const BlogPage = async ({ searchParams }: BlogPageProps) => {
	const currentPage = Number(searchParams.page) || 1;
	const sortedPosts = sortPosts(posts.filter((post) => post.published));
	const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

	const displayPosts = sortedPosts.slice(
		POSTS_PER_PAGE * (currentPage - 1),
		POSTS_PER_PAGE * currentPage
	);

	return (
		<div className="container max-w-4xl py-6 lg:py-10">
			<div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
				<div className="flex-1 space-y-4">
					<h1 className="inline-block  font-black text-4xl lg:text-5xl text-foreground">
						Blog
					</h1>
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
			<QueryPagination totalPages={totalPages} className="mt-10" />
		</div>
	);
};

export default BlogPage;
