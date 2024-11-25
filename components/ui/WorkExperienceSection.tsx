"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { MapPinIcon, CalendarIcon } from "lucide-react";
import StackIcon from "tech-stack-icons";

interface WorkExperienceSectionProps {
	companyName: string;
	dateFrom: string;
	dateTo: string;
	role: string;
	roleDescription: string;
	location: string;
	tech: string[];
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
	index,
}: WorkExperienceSectionProps) => {
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
		<motion.li
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className="w-full"
		>
			<div className="w-full sm:py-6">
				<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 pb-1">
					<div className="space-y-1 flex-1">
						<div className="flex items-center gap-2">
							<h3 className="text-lg sm:text-xl font-bold text-primary">
								{role}
							</h3>
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

				<div className="pt-4 border-t">
					<p className="text-muted-foreground text-lg leading-ti mb-4 sm:text-left text-justify">
						{roleDescription}
					</p>

					<div className="space-y-3">
						<h4 className="text-sm font-semibold text-primary">
							Technologies & Skills
						</h4>
						<motion.ul
							className="flex flex-wrap gap-2"
							role="list"
							aria-label="Technologies and skills"
							variants={{
								hidden: {},
								visible: {
									transition: {
										staggerChildren: 0.05,
									},
								},
							}}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
						>
							{tech.map((item) => (
								<motion.li
									key={item}
									variants={{
										hidden: { opacity: 0, y: 10 },
										visible: { opacity: 1, y: 0 },
									}}
								>
									<StackIcon
										name={item}
										className={cn("w-6 h-6", {
											"dark:invert": ["openai", "shadcnui", "framer"].includes(
												item
											),
										})}
									/>
								</motion.li>
							))}
						</motion.ul>
					</div>
				</div>
			</div>
		</motion.li>
	);
};

export default WorkExperienceSection;
