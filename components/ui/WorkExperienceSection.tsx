"use client";
import { motion } from "framer-motion";
import { MapPinIcon, CalendarIcon } from "lucide-react";

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
			<div className="w-full p-4 sm:p-6">
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
					<p className="text-muted-foreground text-lg leading-relaxed mb-4">
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
									<span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium border border-primary/20 text-primary/80 hover:bg-primary/20 transition-colors">
										{item}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</motion.li>
	);
};

export default WorkExperienceSection;
