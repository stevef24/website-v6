"use client";

import { DATA } from "@/app/data/resume";

import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import ProjectHoverCard from "../ui/ProjectHoverCard";

const Projects = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [cardsPerView, setCardsPerView] = useState(3);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const projectsCount = DATA.dummyProjects.length;

	const isAtStart = currentIndex === 0;
	const isAtEnd = currentIndex >= projectsCount - cardsPerView;

	// Handle responsive layout
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) {
				setCardsPerView(1);
			} else if (window.innerWidth < 1024) {
				setCardsPerView(2);
			} else {
				setCardsPerView(3);
			}
		};

		handleResize();
		const debouncedResize = debounce(handleResize, 250);
		window.addEventListener("resize", debouncedResize);
		return () => window.removeEventListener("resize", debouncedResize);
	}, []);

	// Debounce function for resize handler
	function debounce(func: Function, wait: number) {
		let timeout: NodeJS.Timeout;
		return function executedFunction(...args: any[]) {
			const later = () => {
				clearTimeout(timeout);
				func(...args);
			};
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
		};
	}

	const handleNavigation = useCallback(
		(direction: "next" | "prev") => {
			if (isTransitioning) return;

			setIsTransitioning(true);
			setCurrentIndex((prev) => {
				const newIndex = direction === "next" ? prev + 1 : prev - 1;
				return Math.max(0, Math.min(newIndex, projectsCount - cardsPerView));
			});

			setTimeout(() => setIsTransitioning(false), 300);
		},
		[isTransitioning, projectsCount, cardsPerView]
	);

	const handleKeyNavigation = useCallback(
		(e: React.KeyboardEvent) => {
			if (e.key === "ArrowLeft" && !isAtStart) {
				handleNavigation("prev");
			} else if (e.key === "ArrowRight" && !isAtEnd) {
				handleNavigation("next");
			}
		},
		[handleNavigation, isAtStart, isAtEnd]
	);

	const goToPage = useCallback(
		(index: number) => {
			if (isTransitioning) return;
			setIsTransitioning(true);
			const newIndex = Math.min(
				index * cardsPerView,
				projectsCount - cardsPerView
			);
			setCurrentIndex(newIndex);
			setTimeout(() => setIsTransitioning(false), 300);
		},
		[cardsPerView, isTransitioning, projectsCount]
	);

	return (
		<section
			className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 mb-10"
			onKeyDown={handleKeyNavigation}
			role="region"
			aria-label="Projects carousel"
			tabIndex={0}
			id="projects"
		>
			<div
				className="overflow-hidden rounded-xl"
				aria-live="polite"
				aria-atomic="true"
			>
				<div
					className="flex transition-all duration-300 ease-out"
					style={{
						transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
					}}
				>
					{DATA.dummyProjects.map((project) => (
						<div
							key={project.id}
							className={cn(
								"px-2 sm:px-4",
								cardsPerView === 1
									? "min-w-full max-w-[350px] mx-auto"
									: cardsPerView === 2
									? "min-w-[50%]"
									: "min-w-[33.333%]",
								"max-w-[425px]",
								"transition-opacity duration-300",
								isTransitioning ? "opacity-50" : "opacity-100"
							)}
						>
							<ProjectHoverCard
								{...project}
								technologies={[...project.technologies]}
							/>
						</div>
					))}
				</div>
			</div>

			<div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 w-full flex justify-between pointer-events-none">
				<Button
					variant="ghost"
					size="icon"
					onClick={() => handleNavigation("prev")}
					disabled={isAtStart || isTransitioning}
					className={cn(
						"pointer-events-auto rounded-full bg-background/80 backdrop-blur-sm transition-all duration-200",
						"absolute h-10 w-10 -left-3",
						"sm:h-12 sm:w-12 sm:left-0",
						isAtStart
							? "opacity-50 cursor-not-allowed border-muted"
							: "hover:text-orange-500 border-orange-500 hover:border-orange-600 hover:scale-110",
						"border-2"
					)}
					aria-label="View previous projects"
				>
					<ChevronLeftIcon
						className={cn(
							"h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10",
							!isAtStart && "text-orange-500"
						)}
						aria-hidden="true"
					/>
				</Button>

				<Button
					variant="ghost"
					size="icon"
					onClick={() => handleNavigation("next")}
					disabled={isAtEnd || isTransitioning}
					className={cn(
						"pointer-events-auto rounded-full bg-background/80 backdrop-blur-sm transition-all duration-200",
						"absolute h-10 w-10 -right-3",
						"sm:h-12 sm:w-12 sm:right-0",
						isAtEnd
							? "opacity-50 cursor-not-allowed border-muted"
							: "hover:text-orange-500 border-orange-500 hover:border-orange-600 hover:scale-110",
						"border-2"
					)}
					aria-label="View next projects"
				>
					<ChevronRightIcon
						className={cn(
							"h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10",
							!isAtEnd && "text-orange-500"
						)}
						aria-hidden="true"
					/>
				</Button>
			</div>

			{/* Pagination Indicators - Only visible on mobile/tablet */}
			<div
				className={cn(
					"absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2 mt-10",
					"lg:hidden"
				)}
				role="tablist"
				aria-label="Project slides"
			>
				{Array.from({
					length: Math.ceil(projectsCount / cardsPerView),
				}).map((_, index) => {
					const startIndex = index * cardsPerView;
					const isCurrentPage =
						Math.floor(currentIndex / cardsPerView) === index;

					return (
						<button
							key={index}
							role="tab"
							aria-selected={isCurrentPage}
							aria-label={`Go to project set ${index + 1}`}
							className={cn(
								"w-2 h-2 rounded-full transition-all duration-200",
								"hover:scale-125 focus-visible:ring-2",
								"focus-visible:ring-primary focus-visible:ring-offset-2",
								"focus-visible:outline-none",
								isCurrentPage
									? "bg-primary scale-110"
									: "bg-primary/20 hover:bg-primary/40"
							)}
							onClick={() => {
								goToPage(index);
							}}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									e.preventDefault();
									goToPage(index);
								}
							}}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
