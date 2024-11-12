"use client";
import { useState, useRef, useEffect } from "react";
import WorkExperienceSection from "./WorkExperienceSection";
import BlurFade from "./Blur";

// Types with proper documentation
type WorkExperience = {
	companyName: string;
	dateFrom: string;
	dateTo: string;
	role: string;
	roleDescription: string;
	location: string;
	tech: string[];
};

const workExperience: WorkExperience[] = [
	{
		companyName: "Nationwide Building Society",
		dateFrom: "June 2023",
		dateTo: "Present",
		role: "Software Engineer",
		roleDescription:
			"I enhance user experiences within the Mortgages team by implementing and maintaining scalable UI components. Through agile collaboration with cross-functional teams, I help bring innovative features to life while ensuring reusability and security. I've also led onboarding initiatives, hosted knowledge-sharing sessions, and established CI/CD pipelines, all aimed at improving team productivity and efficiency.",
		location: "London",
		tech: [
			"Kubernetes",
			"Docker",
			"Next.js",
			"React",
			"Jest",
			"Web IO",
			"Cucumber",
			"Recoil",
			"Zustand",
			"React Testing Libraries",
			"AWS",
		],
	},
	{
		companyName: "Northcoders",
		dateFrom: "January 2023",
		dateTo: "May 2023",
		role: "Software Developer",
		roleDescription:
			"At Northcoders, I gained hands-on experience in agile development while working with React, Node.js, and PostgreSQL. I honed my skills in building and maintaining front-end and back-end solutions, applying best practices in modern JavaScript frameworks and databases. This role provided me with the opportunity to work in a team-focused environment, where collaboration and peer learning were integral. Additionally, I utilised tools such as Jest for unit testing, Jenkins for CI/CD automation, and React Testing Library to ensure the quality of the user interfaces.",
		location: "Remote",
		tech: [
			"React",
			"Node.js",
			"PostgreSQL",
			"Jest",
			"Jenkins",
			"React Testing Library",
		],
	},
	{
		companyName: "Freelance Web Developer",
		dateFrom: "July 2022",
		dateTo: "December 2022",
		role: "Freelance Web Developer",
		roleDescription:
			"As a freelance developer, I created custom websites for small businesses, utilising Webflow, React, and vanilla JavaScript. This role strengthened my client management and project execution skills, delivering responsive, user-focused solutions. I used Trello for project coordination, ensuring smooth collaboration and timely delivery.",
		location: "Remote",
		tech: ["JavaScript", "HTML", "CSS", "Webflow", "GSAP"],
	},
	{
		companyName: "Aviva Investors",
		dateFrom: "July 2019",
		dateTo: "June 2022",
		role: "Sales Enablement Associate &  Investment Specialist",
		roleDescription:
			"In this data-driven role, I supported a £6 billion portfolio by providing in-depth analysis for strategic decisions. I streamlined data workflows using Python and Excel, significantly reducing reporting times. I also collaborated closely with sales teams and mentored junior analysts, refining my skills in data visualisation and client engagement.",
		location: "London",
		tech: ["Python", "Excel"],
	},
];

interface YearMarkerProps {
	year: string;
	className?: string;
}

const YearMarker = ({ year, className }: YearMarkerProps) => (
	<div className="sticky top-0 z-10 -mx-4 sm:-mx-6 mb-4 bg-background/80 backdrop-blur-sm py-2">
		<div className="px-4 sm:px-6">
			<span className="text-sm font-medium text-muted-foreground">{year}</span>
		</div>
	</div>
);

const Experience = () => {
	const [activeExperienceId, setActiveExperienceId] = useState<string | null>(
		null
	);
	const [isClosing, setIsClosing] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	// Group experiences by year
	const experiencesByYear = workExperience.reduce((acc, exp) => {
		const year = exp.dateFrom.split(" ")[1];
		if (!acc[year]) {
			acc[year] = [];
		}
		acc[year].push(exp);
		return acc;
	}, {} as Record<string, typeof workExperience>);

	const handleExperienceClick = (experienceId: string) => {
		if (activeExperienceId === experienceId) {
			setIsClosing(true);
			// Add a small delay before actually changing the activeExperienceId
			setTimeout(() => {
				setActiveExperienceId(null);
				setIsClosing(false);
			}, 200); // Match this with your animation duration
		} else {
			setActiveExperienceId(experienceId);
		}
	};

	useEffect(() => {
		const handleOutsideClick = (e: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(e.target as Node)
			) {
				setIsClosing(true);
				setTimeout(() => {
					setActiveExperienceId(null);
					setIsClosing(false);
				}, 200);
			}
		};

		document.addEventListener("click", handleOutsideClick);
		return () => document.removeEventListener("click", handleOutsideClick);
	}, []);

	return (
		<section
			ref={containerRef}
			className="relative w-full max-w-4xl mx-auto"
			aria-label="Work Experience Timeline"
		>
			<BlurFade>
				<div className="space-y-6 sm:space-y-8 h-full">
					{Object.entries(experiencesByYear)
						.sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
						.map(([year, experiences]) => (
							<div key={year}>
								<YearMarker year={year} />
								<ul
									className="space-y-3 sm:space-y-4"
									role="list"
									aria-label={`Work experiences from ${year}`}
								>
									{experiences.map((experience, index) => {
										const experienceId = `${experience.companyName}-${index}`;
										return (
											<WorkExperienceSection
												key={experienceId}
												{...experience}
												isActive={activeExperienceId === experienceId}
												isClosing={
													isClosing && activeExperienceId === experienceId
												}
												onSelect={() => handleExperienceClick(experienceId)}
												index={index}
											/>
										);
									})}
								</ul>
							</div>
						))}
				</div>
			</BlurFade>
		</section>
	);
};

export default Experience;
