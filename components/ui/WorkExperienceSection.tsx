"use client";
import { motion, AnimatePresence } from "framer-motion";
import { MapPinIcon, ChevronRightIcon, CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkExperienceSectionProps {
	companyName: string;
	dateFrom: string;
	dateTo: string;
	role: string;
	roleDescription: string;
	location: string;
	tech: string[];
	isActive: boolean;
	isClosing: boolean;
	onSelect: () => void;
	index: number;
}

const WorkExperienceSection = ({
	companyName,
	role,
	roleDescription,
	location,
	tech = [],
	dateFrom,
	dateTo,
	isActive,
	isClosing,
	onSelect,
	index,
}: WorkExperienceSectionProps) => {
	// Animation variants for the container - matching Values.tsx timing
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

	// Content variants for smooth expansion
	const contentVariants = {
		hidden: { opacity: 0, height: 0 },
		visible: {
			opacity: 1,
			height: "auto",
			transition: { duration: 0.3 },
		},
	};

	// Text variants matching Values.tsx
	const textVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 0.3, delay: 0.2 },
		},
	};

	return (
		<motion.li
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className={cn(
				"group relative rounded-lg sm:rounded-xl border transition-all duration-300",
				isActive
					? "border-primary bg-accent/50"
					: "border-border hover:border-primary/50",
				isClosing ? "closing" : ""
			)}
		>
			<button
				onClick={onSelect}
				className="w-full text-left p-4 sm:p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg sm:rounded-xl"
				aria-expanded={isActive}
				aria-controls={`experience-content-${index}`}
			>
				<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
					<div className="space-y-1 flex-1">
						<div className="flex items-center gap-2">
							<h3 className="text-lg sm:text-xl font-bold text-primary">
								{role}
							</h3>
							<motion.div
								animate={{ rotate: isActive ? 90 : 0 }}
								transition={{ duration: 0.2 }}
								className="transition-transform ml-auto sm:ml-0"
							>
								<ChevronRightIcon
									className="h-5 w-5 text-primary"
									aria-hidden="true"
								/>
							</motion.div>
						</div>
						<p className="text-base sm:text-lg font-medium text-foreground">
							{companyName}
						</p>
					</div>

					<div className="flex flex-row sm:flex-col gap-4 sm:gap-2 text-sm text-muted-foreground sm:items-end items-start">
						<time
							dateTime={`${dateFrom}/${dateTo}`}
							className="flex items-center gap-2"
						>
							<CalendarIcon className="h-4 w-4" aria-hidden="true" />
							<span className="whitespace-nowrap">
								{dateFrom} - {dateTo}
							</span>
						</time>
						<span className="flex items-center gap-2">
							<MapPinIcon className="h-4 w-4" aria-hidden="true" />
							<span className="whitespace-nowrap">{location}</span>
						</span>
					</div>
				</div>

				<motion.div
					className={`overflow-hidden transition-all duration-300 ease-out ${
						isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
					}`}
				>
					<div className="pt-4">
						<motion.div
							variants={textVariants}
							initial="hidden"
							animate={isActive ? "visible" : "hidden"}
						>
							<p className="text-sm sm:text-base text-foreground leading-relaxed mb-4">
								{roleDescription}
							</p>

							<div className="space-y-3">
								<h4 className="text-sm font-semibold text-primary">
									Technologies & Skills
								</h4>
								<ul
									className="flex flex-wrap gap-2"
									role="list"
									aria-label="Technologies and skills"
								>
									{tech.map((item) => (
										<motion.li key={item} variants={textVariants} layout>
											<span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
												{item}
											</span>
										</motion.li>
									))}
								</ul>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</button>
		</motion.li>
	);
};

export default WorkExperienceSection;
