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
			"Collaboration is essential to reach your full potential. Surrounding yourself with people who push you to be your best is crucial. In an environment where everyone inspires each other to grow, we can all thrive together. That's why collaboration is not just a value but a fundamental part of my approach to work.",
		color: "bg-blue-500/10 text-blue-500",
	},
	{
		title: "Boldness",
		icon: RocketIcon,
		content:
			"Boldness is about more than innovation; it's the courage to change what needs changing and to see possibilities others overlook. To make a real impact, I follow my vision, taking calculated risks and challenging norms. It's about pursuing new paths and creating my own when necessary. Through boldness, I strive to be the change I want to see in the world.",
		color: "bg-purple-500/10 text-purple-500",
	},
	{
		title: "Work Ethic",
		icon: BrainCircuitIcon,
		content:
			"Work ethic is the foundation of any great achievement. It's not just a phrase for resumes; it's a deep commitment to becoming the best version of yourself. I believe in working smart and hard, on both myself and with those around me, to turn visions into reality. Consistent effort and dedication are essential, and without them, lasting success is unattainable.",
		color: "bg-orange-500/10 text-orange-500",
	},
	{
		title: "Growth",
		icon: SparklesIcon,
		content:
			"Growth is fundamental to a fulfilling life. As humans, we inherently seek growth, consciously or subconsciously. It's what makes life worth living, providing us with opportunities to learn, adapt, and evolve. Growth fuels our hope that things can always get better.",
		color: "bg-green-500/10 text-green-500",
	},
	{
		title: "Curiosity",
		icon: SearchIcon,
		content:
			"Curiosity is my compass, guiding me through exploration and growth. More than raw intelligence, it's curiosity that sparks passion and drives me to uncover new things. It's through curiosity that we often make mistakes, and those mistakes are crucial stepping stones to success. I value curiosity in myself and in the teams I work with.",
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

	const contentVariants = {
		hidden: { opacity: 0, height: 0 },
		visible: {
			opacity: 1,
			height: "auto",
			transition: { duration: 0.3 },
		},
	};

	const textVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 0.3, delay: 0.2 },
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
						<motion.div
							variants={textVariants}
							initial="hidden"
							animate="visible"
						>
							<Typography
								variant={Variant.body}
								className="text-muted-foreground leading-relaxed"
							>
								{content}
							</Typography>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};

const Values = () => {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

	return (
		<section
			className=" mx-0  "
			aria-labelledby="values-description"
			id="values"
		>
			<BlurFade>
				<div className="max-w-3xl mx-auto space-y-12">
					<div className="text-center space-y-4">
						<Typography
							variant={Variant.body}
							className="text-muted-foreground leading-relaxed"
						>
							These core values are at the heart of who I am and how I work.
							They're not just guidelines for me but{" "}
							<strong>qualities I look for in every team I join</strong>. By
							embracing{" "}
							<em>
								collaboration, boldness, a strong work ethic, growth, and
								curiosity
							</em>
							, I believe we can create a space where everyone thrives and
							contributes to something meaningful.
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
		</section>
	);
};

export default Values;
