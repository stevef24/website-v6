import WorkExperienceSection from "./WorkExperienceSection";

const data = [
	{
		companyName: "Nationwide Building Society",
		dateFrom: "2023",
		dateTo: "Present",
		role: "Frontend Developer",
		roleDescription:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam et impedit, laudantium aperiam modi quasi dignissimos recusandae, ducimus excepturi illum voluptatum praesentium at, omnis incidunt illo sunt expedita alias dolor error dolorem beatae maiores minus asperiores? Odit expedita explicabo, minus corporis veritatis soluta doloremque aperiam cum eaque culpa molestias fuga.",
		location: "Remote",
		tech: ["javascript", "react", "node", "css", "html"],
	},
	{
		companyName: "Northcoders",
		dateFrom: "Jan 2023",
		dateTo: "apr 2023",
		role: "Trainee Software Engineer",
		roleDescription: `	Completed an intensive JavaScript-focused Coding Bootcamp covering
		programming, full-stack and front-end web development using
		React.js, back-end web development, and more. Gained hands-on
		experience in Git, HTML5, CSS, OOP, and Node.js. Developed a high
		level of proficiency in various aspects of web development through
		practical application.`,
		location: "Manchester",
		tech: [],
	},
	{
		companyName: "Career break",
		dateFrom: "Aug 2022",
		dateTo: "dec 2022",
		role: "Travel",
		roleDescription: `Trained in Mixed Martial Arts & Muay Thai in Thailand and
		Indonesia, immersed in diverse cultures whilst meeting new people,
		expanding interests & developing interpersonal skills. Gained
		self-confidence, resilience, focus and
		stayed physically fit. This experience enhanced personal and
		professional growth, also providing valuable skills applicable to
		various aspects of life`,
		location: "South East Asia",
		tech: [],
	},
	{
		companyName: "Aviva Investors",
		dateFrom: "Jul 2020",
		dateTo: "Jul 2022",
		role: "Sales Enablement Associate",
		roleDescription: `Conducted analysis of large qualitative and quantitative datasets,
							utilizing various third-party databases including Morningstar
							Direct and Lipper. Prepared monthly peer analysis and fund
							snapshots with commentary for sales teams and investment
							specialists regarding fund performance. Conducted independent
							reviews of investment opportunities across all asset classes,
							including deep dives into promising prospects. Offered a full-time
							position at Aviva Investors upon completion of the graduate
							scheme.`,
		location: "London",
		tech: [],
	},
	{
		companyName: "Aviva Investors",
		dateFrom: "Jul 2020",
		dateTo: "Jul 2022",
		role: "Multi-asset Investment Specialist",
		roleDescription: `Supported day-to-day operations for the flagship fund, AIMS,
		managing £6B in AUM. Collaborated with directors and portfolio
		managers to communicate investment processes, portfolio positions,
		and performance to clients and consultants. Conducted analysis for
		client requests, including fund metrics and ESG integration.
		Developed key procedures and research materials, including
		documentation, models, and presentations. Completed the Investment
		Management Certificate qualification in January 2020..`,
		location: "London",
		tech: [],
	},
];
const Experience = () => {
	return (
		<section>
			<ul className="space-y-3">
				{data.map(
					({ companyName, role, roleDescription, location, tech }, index) => (
						<WorkExperienceSection
							companyName={companyName}
							role={role}
							roleDescription={roleDescription}
							location={location}
							tech={tech}
							key={index}
						/>
					)
				)}
			</ul>
		</section>
	);
};

export default Experience;
