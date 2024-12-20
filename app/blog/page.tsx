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
import Image from "next/image";

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
			className="container max-w-4xl py-8 lg:py-12 mb-[100px] max-sm:mt-[100px]"
		>
			<motion.div variants={fadeIn} className="relative mb-10">
				<div className="relative">
					<h1 className="text-4xl font-black lg:text-5xl mb-6">
						<span className="inline-block text-orange-500">
							What I've Learned
						</span>
					</h1>
					<p className="text-xl text-muted-foreground max-w-full">
						Welcome to my blog/notes ! Here, I share my thoughts on code,
						design, and life—everything I’m passionate about. For me, writing is
						a way to learn, teach, and grow. If you spot any mistakes or have
						suggestions on how I can explain things better, don’t hesitate to
						reach out. This blog is as much about connecting and improving
						together as it is about sharing ideas. Stay tuned, stay curious, and
						let’s dive into the latest topics in tech!
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

			<div className="space-y-8" aria-label="Blog posts list">
				{displayPosts.length > 0 ? (
					<motion.ul
						variants={fadeIn}
						className="space-y-6"
						role="list"
						aria-label="Blog posts"
					>
						{displayPosts.map(
							({ date, title, slug, description, image }, index) => (
								<motion.li
									key={slug}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}
								>
									<Link
										href={`/${slug}`}
										aria-label={`Read blog post: ${title}`}
									>
										<Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-0">
											<CardContent className="p-0 flex flex-col md:flex-row">
												<div className="relative aspect-video md:aspect-[4/3] w-full md:w-1/3">
													<Image
														src={
															image
																? `/images/${image}`
																: "/blog-placeholder.jpg"
														}
														alt={title}
														fill
														className="object-cover"
														sizes="(max-width: 768px) 100vw, 33vw"
													/>
												</div>
												<div className="flex-1 p-6">
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
												</div>
											</CardContent>
										</Card>
									</Link>
									{index < displayPosts.length - 1 && (
										<Separator className="my-6" />
									)}
								</motion.li>
							)
						)}
					</motion.ul>
				) : (
					<motion.div variants={fadeIn}>
						<Card>
							<CardContent className="p-6 text-center text-muted-foreground">
								<p>
									It seems quiet here right now, but stay tuned—new posts are
									coming soon!
								</p>
							</CardContent>
						</Card>
					</motion.div>
				)}
			</div>

			<div className="mt-6">
				<QueryPagination totalPages={totalPages} />
			</div>
		</motion.div>
	);
}
