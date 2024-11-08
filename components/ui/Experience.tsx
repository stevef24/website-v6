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
			"I’m currently working on improving the user experience for mortgage-related products. My main focus is creating scalable, user-friendly UIs, and collaborating with different teams to bring new features to life. I’ve had the chance to guide new developers and keep things running smoothly using modern tech stacks like React, Tailwind CSS, and AWS.",
		location: "London, UK",
		tech: [
			"React",
			"Next.js",
			"Tailwind CSS",
			"TypeScript",
			"AWS Services",
			"Jenkins",
		],
	},
	{
		companyName: "Northcoders",
		dateFrom: "January 2023",
		dateTo: "May 2023",
		role: "Software Developer",
		roleDescription:
			"Gained hands-on experience in a full-stack environment, collaborating with a team to develop both web and mobile applications. I worked across different stages of development, from planning to deployment, and played a key role in launching a mobile app. It was a great opportunity to sharpen my teamwork and technical skills in a dynamic project setting.",
		location: "Manchester, UK",
		tech: ["JavaScript", "React", "Node.js", "PostgreSQL", "MongoDB", "Trello"],
	},
	{
		companyName: "Freelance Web Developer",
		dateFrom: "July 2022",
		dateTo: "December 2022",
		role: "Web Developer",
		roleDescription:
			"While traveling through Asia, I transitioned into web development by building websites for various clients. I focused on front-end development and picked up valuable skills like communication and adaptability while working remotely in different time zones.",
		location: "Remote, Asia",
		tech: ["HTML", "CSS", "Webflow", "JavaScript"],
	},
	{
		companyName: "Aviva Investors",
		dateFrom: "July 2019",
		dateTo: "June 2022",
		role: "Sales Enablement Associate & Multi-asset Investment Specialist",
		roleDescription:
			"In this role, I helped make sense of investment data and worked closely with sales teams and clients. I used my analytical and presentation skills to deliver insights and even automated some tasks to improve efficiency. It was a great mix of data, finance, and communication.",
		location: "London, UK",
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
				<div className="space-y-6 sm:space-y-8 px-4 sm:px-6">
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
