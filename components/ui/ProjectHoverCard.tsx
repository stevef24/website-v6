"use client";

import React, { MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";

interface ProjectHoverCardProps {
	title: string;
	byline: string;
	description: string;
	technologies: string[];
	githubUrl?: string;
	liveUrl?: string;
}

export default function ProjectHoverCard({
	title,
	byline,
	description,
	technologies,
	githubUrl,
	liveUrl,
}: ProjectHoverCardProps) {
	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
		let { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	return (
		<div
			className="min-w-[320px] w-[400px] group relative max-w-md rounded-xl border border-gray-200 bg-background px-8 py-16"
			onMouseMove={handleMouseMove}
		>
			<motion.div
				className="pointer-events-none absolute -inset-px rounded-xl  opacity-0 transition duration-300 group-hover:opacity-100"
				style={{
					background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgb(234, 88, 13, 0.15),
              transparent 80%
            )
          `,
				}}
			/>
			<div className="relative z-10">
				<h3 className="text-base font-semibold leading-7 text-primary">
					{byline}
				</h3>
				<div className="mt-2 flex items-center gap-x-2">
					<h2 className="text-5xl font-bold tracking-tight text-foreground">
						{title}
					</h2>
				</div>
				<p className="mt-6 text-base leading-7 text-muted-foreground">
					{description}
				</p>
				<div className="mt-4">
					<ul className="mt-2 flex flex-wrap gap-2">
						{technologies.map((tech, index) => (
							<li
								key={index}
								className="px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full uppercase tracking-wide"
							>
								{tech}
							</li>
						))}
					</ul>
				</div>
				<div className="mt-6 flex space-x-4">
					{githubUrl && (
						<a
							href={githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
							aria-label="View GitHub repository"
						>
							<GitHubLogoIcon className="mr-2 h-5 w-5" />
							GitHub
						</a>
					)}
					{liveUrl && (
						<a
							href={liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
							aria-label="View live project"
						>
							<GlobeIcon className="mr-2 h-5 w-5" />
							Live Demo
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
