"use client";
import { motion } from "framer-motion";
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
	onSelect,
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
			<div
				className={cn(
					"rounded-lg border bg-card transition-colors duration-300",
					isActive ? "ring-2 ring-primary" : "hover:border-primary/50"
				)}
			>
				<button
					onClick={onSelect}
					className="w-full text-left p-4 sm:p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
					aria-expanded={isActive}
					aria-controls={`experience-content-${index}`}
				>
					<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 pb-1">
						<div className="space-y-1 flex-1">
							<div className="flex items-center gap-2">
								<h3 className="text-lg sm:text-xl font-bold text-primary">
									{role}
								</h3>
								<motion.div
									animate={{ rotate: isActive ? 90 : 0 }}
									transition={{ duration: 0.2 }}
								>
									<ChevronRightIcon
										className="h-5 w-5 text-muted-foreground"
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

					<div
						className={`overflow-hidden transition-all duration-300 ease-out ${
							isActive
								? "max-h-[1000px] sm:max-h-[500px] opacity-100"
								: "max-h-0 opacity-0"
						}`}
					>
						<div className="pt-4 border-t">
							<p className="text-muted-foreground text-base leading-relaxed mb-4">
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
										<li key={item}>
											<span className=" inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium border border-primary/20 text-primary/80 hover:bg-primary/20 transition-colors">
												{item}
											</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</button>
			</div>
		</motion.li>
	);
};

export default WorkExperienceSection;
