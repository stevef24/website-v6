"use client";
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { motion } from "framer-motion";
import {
	ChevronRightIcon,
	SparklesIcon,
	UsersIcon,
	BrainCircuitIcon,
	RocketIcon,
	SearchIcon,
} from "lucide-react";
import BlurFade from "../ui/Blur";
import { Typography, Variant } from "../ui/Typography";

const valueItems = [
	{
		title: "Collaboration",
		icon: UsersIcon,
		content:
			"Collaboration is essential to reach your full potential. Surrounding yourself with people who challenge and inspire you is crucial. In an environment where everyone pushes each other to grow, we can all thrive together. Collaboration isn’t just a value to me—it’s the way I strive to work every day.",
		color: "bg-blue-500/10 text-blue-500",
	},
	{
		title: "Boldness",
		icon: RocketIcon,
		content:
			"Boldness is about more than innovation—it’s the courage to change what needs changing and to see opportunities others might overlook. I’ve learned that making a real impact requires following your vision, taking calculated risks, and challenging norms. Whether it’s pursuing new paths or creating my own, boldness fuels my drive to make meaningful change.",
		color: "bg-purple-500/10 text-purple-500",
	},
	{
		title: "Work Ethic",
		icon: BrainCircuitIcon,
		content:
			"Work ethic is the foundation of every great achievement. It’s not just a phrase for resumes—it’s about committing to becoming the best version of yourself. For me, it’s about working smart and hard, with dedication and consistency, to turn visions into reality. Without this, lasting success simply isn’t possible.",
		color: "bg-orange-500/10 text-orange-500",
	},
	{
		title: "Growth",
		icon: SparklesIcon,
		content:
			"Growth is what makes life exciting. I believe we all crave it, whether we realize it or not. It's about learning, adapting, and finding new ways to evolve—both personally and professionally. To me, growth is a source of hope: a reminder that no matter where we are, things can always improve.",
		color: "bg-green-500/10 text-green-500",
	},
	{
		title: "Curiosity",
		icon: SearchIcon,
		content:
			"Curiosity is my compass, guiding me through exploration and discovery. It’s more than just wanting to know—it’s about diving deep, asking questions, and uncovering the unknown. I value curiosity because it sparks passion, drives innovation, and embraces mistakes as stepping stones to success.",
		color: "bg-red-500/10 text-red-500",
	},
];

interface ValueItemProps {
	title: string;
	content: string;
	color: string;
	icon: React.ElementType;
	isExpanded: boolean;
	onToggle: () => void;
	index: number;
}

const ValueItem = ({
	title,
	content,
	color,
	icon: Icon,
	isExpanded,
	onToggle,
	index,
}: ValueItemProps) => {
	const containerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				delay: index * 0.1,
			},
		},
	};

	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className="w-full"
		>
			<div
				className={`rounded-lg border bg-card transition-colors duration-300 ${
					isExpanded ? "ring-2 ring-primary" : "hover:border-primary/50"
				}`}
			>
				<button
					onClick={onToggle}
					className="w-full text-left px-6 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
					aria-expanded={isExpanded}
					aria-controls={`value-content-${index}`}
				>
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3">
							<div className={`p-2 rounded-lg ${color}`}>
								<Icon className="w-6 h-6" aria-hidden="true" />
							</div>
							<h3 className="text-xl font-bold">{title}</h3>
						</div>
						<motion.div
							animate={{ rotate: isExpanded ? 90 : 0 }}
							transition={{ duration: 0.2 }}
						>
							<ChevronRightIcon className="w-5 h-5 text-muted-foreground" />
						</motion.div>
					</div>
				</button>
				<motion.div
					className={`px-6 pb-4 overflow-hidden transition-all duration-300 ease-out ${
						isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
					}`}
				>
					<div className="pt-4 border-t">
						<Typography
							variant={Variant.body}
							className="text-muted-foreground leading-relaxed"
						>
							{content}
						</Typography>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};

const Values = () => {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

	return (
		<div className="mx-0" aria-labelledby="values-description">
			<BlurFade>
				<div className="max-w-3xl mx-auto space-y-12">
					<div className="text-center space-y-4">
						<Typography
							variant={Variant.body}
							className="text-muted-foreground leading-relaxed text-justify"
						>
							These values are at the core of who I am—not just as a developer,
							but as a person. They're qualities I look for in every team I
							join. By embracing{" "}
							<em>
								collaboration, boldness, work ethic, growth, and curiosity
							</em>
							, I believe we can create a space where everyone thrives and
							contributes to something meaningful. Do these values resonate with
							you? I'd love to hear about the principles that guide your work
							and life.
						</Typography>
					</div>
					<div className="space-y-4">
						{valueItems.map((item, index) => (
							<ValueItem
								key={item.title}
								{...item}
								index={index}
								isExpanded={expandedIndex === index}
								onToggle={() =>
									setExpandedIndex(expandedIndex === index ? null : index)
								}
							/>
						))}
					</div>
				</div>
			</BlurFade>
		</div>
	);
};

export default Values;
