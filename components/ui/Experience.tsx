import WorkExperienceSection from "./WorkExperienceSection";

const data = [
	{
		companyName: "Nationwide Building Society",
		dateFrom: "Jun 2023",
		dateTo: "Present",
		role: "Frontend Developer",
		roleDescription:
			"Enhanced UI/UX for the mortgage journey, implemented the redemption feature, and maintained reliable user interfaces. Led knowledge-sharing sessions to foster skill development among junior developers.",
		location: "Remote",
		tech: [
			"JavaScript",
			"React",
			"Node",
			"CSS",
			"HTML",
			"Recoil",
			"Next.js",
			"Typescript",
			"Node.js",
			"Express",
			"Jest/Supertest",
			"Git",
			"Figma",
			"Jenkins",
			"Cucumber",
			"React Testing Library",
		],
	},
	{
		companyName: "Northcoders",
		dateFrom: "Jan 2023",
		dateTo: "May 2023",
		role: "Trainee Software Engineer",
		roleDescription:
			"Completed an intensive 13-week bootcamp focused on JavaScript and full-stack development. Worked in a team to build full-stack and mobile projects, gaining hands-on experience in web technologies.",
		location: "Manchester",
		tech: [
			"React",
			"Figma",
			"Framer Motion",
			"React Native",
			"Node.js",
			"Express",
			"PostgreSQL",
			"Jest/Supertest",
		],
	},
	{
		companyName: "Career break",
		dateFrom: "Aug 2022",
		dateTo: "Dec 2022",
		role: "Travel",
		roleDescription:
			"Trained in Mixed Martial Arts and Muay Thai across Thailand and Indonesia. Gained cultural awareness, developed interpersonal skills, and enhanced personal growth through travel and training.",
		location: "South East Asia",
		tech: [],
	},
	{
		companyName: "Aviva Investors",
		dateFrom: "Jul 2019",
		dateTo: "Jul 2022",
		role: "Sales Enablement Associate",
		roleDescription:
			"Conducted market data analysis and created detailed fund reports for sales teams and investment specialists. Delivered insights through peer analysis, supporting effective communication of investment strategies.",
		location: "London",
		tech: [],
	},
];

const Experience = () => {
	return (
		<section>
			<ul className="space-y-3">
				{data.map(
					(
						{
							companyName,
							role,
							roleDescription,
							location,
							tech,
							dateFrom,
							dateTo,
						},
						index
					) => (
						<WorkExperienceSection
							companyName={companyName}
							role={role}
							roleDescription={roleDescription}
							location={location}
							tech={tech}
							key={index}
							index={index}
							dateFrom={dateFrom}
							dateTo={dateTo}
						/>
					)
				)}
			</ul>
		</section>
	);
};

export default Experience;
