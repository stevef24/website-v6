"use client";
import { motion } from "framer-motion";
import GridPattern from "../ui/grid-pattern";
import { cn } from "@/lib/utils";
import { ArrowDown, Code, Hammer, WandSparkles } from "lucide-react";

export default function Hero() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	return (
		<div className="relative min-h-screen bg-background font-sans flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
			{/* Enhanced gradient effect */}
			<div
				className="absolute h-[30vh] w-[40vw] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 bg-gradient-to-r from-orange-500/30 to-purple-500/30 blur-[100px]"
				aria-hidden="true"
			/>

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
				]}
				className={cn(
					"[mask-image:radial-gradient(600px_circle_at_center,hsl(var(--primary)),transparent)]",
					"inset-x-0 inset-y-[-30%] h-[160%] skew-y-12 opacity-40"
				)}
			/>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="relative z-10 max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 px-2"
			>
				{/* Main heading with adjusted mobile text size */}
				<motion.h1
					variants={itemVariants}
					className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text bg-gradient-to-r from-foreground to-foreground/80 [text-shadow:_0_0_50px_rgb(var(--primary-rgb)/0.3)] break-words"
					role="heading"
				>
					Stav Fernandes
				</motion.h1>

				{/* Role with adjusted mobile text size */}
				<motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
					<h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-primary">
						Full Stack Software Engineer
					</h2>
					<div className="flex flex-wrap justify-center gap-4 text-muted-foreground text-sm sm:text-base">
						<span className="flex items-center gap-2">
							<Code className="w-4 h-4 sm:w-5 sm:h-5" />
							Developer
						</span>
						<span className="flex items-center gap-2">
							<WandSparkles className="w-4 h-4 sm:w-5 sm:h-5" />
							Creative
						</span>
						<span className="flex items-center gap-2">
							<Hammer className="w-4 h-4 sm:w-5 sm:h-5" />
							Builder
						</span>
					</div>
				</motion.div>

				{/* Description with adjusted mobile text size */}
				<motion.div
					variants={itemVariants}
					className="text-base sm:text-lg md:text-2xl max-w-2xl mx-auto px-2"
				>
					<p className="text-foreground leading-relaxed">
						Crafting{" "}
						<span className="italic">exceptional digital experiences</span> with
						<span className="italic"> modern technologies</span> and
						<span className="italic"> innovative solutions</span>
					</p>
				</motion.div>

				{/* Call to action */}
				<motion.div
					variants={itemVariants}
					className="flex text-muted-foreground flex-col items-center gap-6"
				>
					<motion.div
						animate={{
							y: [0, 10, 0],
						}}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className="text-muted-foreground"
					>
						<ArrowDown className="w-10 h-10" />
					</motion.div>
				</motion.div>
			</motion.div>
		</div>
	);
}
