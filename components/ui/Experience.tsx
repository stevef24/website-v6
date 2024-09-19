import WorkExperienceSection from "./WorkExperienceSection";

// Define the type for each work experience item
type WorkExperience = {
	companyName: string;
	dateFrom: string;
	dateTo: string;
	role: string;
	roleDescription: string;
	location: string;
	tech: string[];
};

// Use the new type for the data array
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

const Experience = () => {
	return (
		<section>
			<ul className="space-y-3">
				{workExperience.map(
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
