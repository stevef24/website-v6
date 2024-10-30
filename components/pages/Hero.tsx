"use client";
import { motion } from "framer-motion";
import GridPattern from "../ui/grid-pattern";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Component() {
	return (
		<div className="relative h-[calc(100vh)] bg-background font-sans flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
			<GridPattern
				squares={[
					[4, 4],
					[5, 1],
					[8, 2],
					[5, 3],
					[5, 5],
					[10, 10],
					[12, 15],
					[15, 10],
					[10, 15],
					[15, 10],
					[10, 15],
					[15, 10],
				]}
				className={cn(
					"[mask-image:radial-gradient(500px_circle_at_center,hsl(var(--primary)),transparent)]",
					"inset-x-0 inset-y-[-30%] h-[160%] skew-y-12"
				)}
			/>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="relative z-10 max-w-4xl mx-auto text-center space-y-8 min-h-[400px]  sm:space-y-10 md:space-y-12"
			>
				<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
					Stav Fernandes
				</h1>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary"
				>
					Full Stack Software Engineer
				</motion.h2>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto"
				>
					<p className="text-muted-foreground">
						Specializing in <span className="font-semibold">UI/UX Design</span>,{" "}
						<span className="font-semibold">Responsive Web Design</span>, and{" "}
						<span className="font-semibold">Visual Development</span>
					</p>
				</motion.div>

				<div className="">
					<motion.button
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-4 text-lg font-medium"
					>
						<Link
							href="/#contact"
							scroll={false}
							onClick={(e) => {
								e.preventDefault();
								document.getElementById("contact")?.scrollIntoView({
									behavior: "smooth",
								});
							}}
						>
							Contact Me
						</Link>
					</motion.button>
				</div>
			</motion.div>
		</div>
	);
}
