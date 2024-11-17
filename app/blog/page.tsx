/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { posts } from "#site/content";
import { sortPosts } from "@/lib/utils";
import "@/styles/mdx.css";
import { motion } from "framer-motion";
import { BookOpen, Calendar, ChevronRight, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { QueryPagination } from "@/components/ui/QueryPagination";
import Link from "next/link";

const POSTS_PER_PAGE = 10;

interface BlogPageProps {
	searchParams: {
		page?: string;
	};
}

const fadeIn = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 20 },
};

export default function BlogPage({ searchParams }: BlogPageProps) {
	const currentPage = Number(searchParams.page) || 1;
	const sortedPosts = sortPosts(posts.filter((post) => post.published));
	const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
	const totalPosts = sortedPosts.length;

	const displayPosts = sortedPosts.slice(
		POSTS_PER_PAGE * (currentPage - 1),
		POSTS_PER_PAGE * currentPage
	);

	return (
		<motion.div
			initial="initial"
			animate="animate"
			exit="exit"
			className="container max-w-4xl py-6 lg:py-10 mb-[100px] max-sm:mt-[100px]"
		>
			<motion.div variants={fadeIn} className="relative mb-8">
				<div className="relative">
					<h1 className="text-4xl font-black lg:text-5xl mb-4">
						<span className="inline-block text-orange-500">Blog</span>
					</h1>
					<p className="text-xl text-muted-foreground max-w-full ">
						Welcome to our blog! Here, you’ll find my thoughts, learnings, and
						opinions on everything related to code, design, and even life. I’m
						always eager to keep learning, and for me, the best way to do that
						is by teaching and sharing my understandings with others. You might
						spot some mistakes here and there, and that’s fantastic—if you do,
						let me know so I can improve. If you see areas where things could be
						explained better or if you have suggestions for me, I’d love to hear
						them. It’s all part of the learning journey. So, stay in touch,
						reach out, and let’s dive into the latest topics in tech together!
					</p>
				</div>
			</motion.div>

			<div className="flex items-center justify-between mb-6">
				<div className="flex items-center gap-2 text-muted-foreground">
					<span className="text-sm font-medium">
						Page {currentPage} of {totalPages}
					</span>
					<Separator orientation="vertical" className="h-4" />
					<span className="text-sm">{totalPosts} posts total</span>
				</div>
				<motion.div variants={fadeIn}>
					<QueryPagination totalPages={totalPages} />
				</motion.div>
			</div>

			<div className="h-[calc(100vh-400px)] pr-4" aria-label="Blog posts list">
				{displayPosts.length > 0 ? (
					<motion.ul
						variants={fadeIn}
						className="space-y-6"
						role="list"
						aria-label="Blog posts"
					>
						{displayPosts.map(
							({ date, title, slug, description, body }, index) => (
								<motion.li
									key={slug}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}
								>
									<Link href={`/${slug}`} aria-label={`Read article: ${title}`}>
										<Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-primary/10 hover:border-primary/20">
											<CardContent className="p-6">
												<div className="space-y-4">
													<div className="flex items-center justify-between text-sm text-muted-foreground">
														<div className="flex items-center gap-2">
															<Calendar
																className="h-4 w-4"
																aria-hidden="true"
															/>
															<time dateTime={date}>
																{new Date(date).toLocaleDateString()}
															</time>
														</div>
													</div>
													<div>
														<h2 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">
															{title}
														</h2>
														<p className="text-muted-foreground line-clamp-2">
															{description}
														</p>
													</div>

													<div className="flex justify-between items-center">
														<Button
															variant="ghost"
															className="group-hover:translate-x-1 transition-transform duration-300"
														>
															Read More{" "}
															<ChevronRight
																className="ml-2 h-4 w-4"
																aria-hidden="true"
															/>
														</Button>
														<div className="flex items-center gap-2 text-sm text-muted-foreground">
															<BookOpen
																className="h-4 w-4"
																aria-hidden="true"
															/>
															<span>Article</span>
														</div>
													</div>
												</div>
											</CardContent>
										</Card>
									</Link>
								</motion.li>
							)
						)}
					</motion.ul>
				) : (
					<motion.div variants={fadeIn}>
						<Card>
							<CardContent className="p-6 text-center text-muted-foreground">
								<p>No posts available at the moment. Check back soon!</p>
							</CardContent>
						</Card>
					</motion.div>
				)}
			</div>
		</motion.div>
	);
}
