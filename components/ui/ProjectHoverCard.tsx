"use client";

import { useCallback, useState } from "react";
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
	const mousex = useMotionValue(0);
	const mousey = useMotionValue(0);
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseMove = useCallback(
		({ currentTarget, clientX, clientY }: React.MouseEvent) => {
			const { left, top } = currentTarget.getBoundingClientRect();
			mousex.set(clientX - left);
			mousey.set(clientY - top);
		},
		[mousex, mousey]
	);

	const cardId = title.toLowerCase().replace(/\s+/g, "-");

	return (
		<motion.article
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			className="group relative h-full w-full max-w-[375px] mx-auto"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			aria-labelledby={`project-title-${cardId}`}
		>
			<div
				className="relative h-full rounded-xl border bg-background p-6 transition-all duration-300 hover:shadow-lg"
				onMouseMove={handleMouseMove}
			>
				<motion.div
					className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
					style={{
						background: useMotionTemplate`
              radial-gradient(
                300px circle at ${mousex}px ${mousey}px,
                rgb(234, 88, 13, 0.15),
                transparent 60%
              )
            `,
					}}
					aria-hidden="true"
				/>

				<div className="relative z-10 flex h-full flex-col">
					<motion.div
						className="mb-4"
						initial={false}
						animate={{ y: isHovered ? -5 : 0 }}
						transition={{ duration: 0.2 }}
					>
						<motion.p
							className="text-sm font-semibold text-primary h-7"
							initial={false}
							animate={{ scale: isHovered ? 1.05 : 1 }}
							transition={{ duration: 0.2 }}
						>
							{byline}
						</motion.p>
						<h2
							id={`project-title-${cardId}`}
							className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground flex items-center"
						>
							{title}
						</h2>
					</motion.div>

					<p className="text-sm leading-6 text-muted-foreground mb-6 flex-grow">
						{description}
					</p>

					<motion.div
						className="min-h-[4rem]"
						initial={false}
						animate={{ y: isHovered ? 5 : 0 }}
						transition={{ duration: 0.2 }}
					>
						<ul
							className="flex flex-wrap gap-1.5"
							role="list"
							aria-label={`Technologies used in ${title}`}
						>
							{technologies.map((tech, index) => (
								<motion.li
									key={`${tech}-${index}`}
									initial={false}
									animate={{
										scale: isHovered ? 1.05 : 1,
										y: isHovered ? -2 : 0,
									}}
									transition={{
										duration: 0.2,
										delay: index * 0.05,
									}}
									className="px-2 py-0.5 text-xs font-semibold text-primary bg-primary/10 rounded-full uppercase tracking-wide"
								>
									{tech}
								</motion.li>
							))}
						</ul>
					</motion.div>

					<motion.div
						className="mt-auto pt-4 flex space-x-4"
						initial={false}
						animate={{ y: isHovered ? 5 : 0 }}
						transition={{ duration: 0.2 }}
					>
						{githubUrl && (
							<motion.a
								href={githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="group inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded-md"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								aria-label={`View ${title} GitHub repository (opens in new tab)`}
							>
								<GitHubLogoIcon
									className="mr-1.5 h-[18px] w-[18px] translate-y-[0.5px] transition-transform group-hover:scale-110"
									aria-hidden="true"
								/>
								GitHub
							</motion.a>
						)}
						{liveUrl && (
							<motion.a
								href={liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="group inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none rounded-md"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								aria-label={`View ${title} live demo (opens in new tab)`}
							>
								<GlobeIcon
									className="mr-1.5 h-[18px] w-[18px] translate-y-[0.5px] transition-transform group-hover:scale-110"
									aria-hidden="true"
								/>
								Live Demo
							</motion.a>
						)}
					</motion.div>
				</div>
			</div>
		</motion.article>
	);
}
