import React from "react";
import { memo } from "react";
import BlurFade from "./Blur";
import { BriefcaseIcon, MapPinIcon } from "lucide-react";

type WorkExperienceSectionProps = {
	companyName?: string;
	role: string;
	roleDescription: string;
	location: string;
	tech?: string[];
	index: number;
	dateFrom: string;
	dateTo: string;
};

const WorkExperienceSection = memo(
	({
		companyName,
		role,
		roleDescription,
		location,
		tech,
		dateFrom,
		dateTo,
	}: WorkExperienceSectionProps) => {
		return (
			<BlurFade inView>
				<li className="group p-6 rounded-xl transition-all duration-300 hover:bg-accent hover:shadow-md">
					<div className="space-y-6">
						<div className="flex items-center gap-x-4">
							<div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
								<BriefcaseIcon
									className="w-8 h-8 text-primary"
									aria-hidden="true"
								/>
							</div>
							<div>
								<h3 className="text-xl font-bold text-primary mb-1">{role}</h3>
								{companyName && (
									<span className="text-base font-medium text-muted-foreground">
										{companyName}
									</span>
								)}
							</div>
						</div>

						<p className="text-base text-foreground leading-relaxed">
							{roleDescription}
						</p>

						<div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
							<span className="flex items-center gap-2 bg-background/50 px-3 py-1 rounded-full">
								<BriefcaseIcon className="w-4 h-4" aria-hidden="true" />
								<time
									dateTime={`${dateFrom}/${dateTo}`}
								>{`${dateFrom} - ${dateTo}`}</time>
							</span>
							<span className="flex items-center gap-2 bg-background/50 px-3 py-1 rounded-full">
								<MapPinIcon className="w-4 h-4" aria-hidden="true" />
								{location}
							</span>
						</div>

						{tech && tech.length > 0 && (
							<div className="flex flex-wrap gap-2">
								{tech.map((item, index) => (
									<span
										key={`tech-${item}-${index}`}
										className="px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full uppercase tracking-wide"
									>
										{item}
									</span>
								))}
							</div>
						)}
					</div>
				</li>
			</BlurFade>
		);
	}
);

WorkExperienceSection.displayName = "WorkExperienceSection";

export default WorkExperienceSection;
