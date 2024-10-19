import { Icons } from "@/components/ui/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";

export const DATA = {
	navbar: [
		{ href: "/", icon: HomeIcon, label: "Home" },
		{ href: "/blog", icon: NotebookIcon, label: "Blog" },
		{ href: "#", icon: CodeIcon, label: "Projects" },
		{ href: "#", icon: PencilLine, label: "Notes" },
	],
	contact: {
		email: "hello@example.com",
		tel: "+123456789",
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://github.com/stevef24",
				icon: Icons.github,

				navbar: true,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/stavfernandes24/",
				icon: Icons.linkedin,

				navbar: true,
			},
			email: {
				name: "Send Email",
				url: "#",
				icon: Icons.email,

				navbar: false,
			},
		},
	},
	education: [
		{
			school: "Buildspace",
			href: "https://buildspace.so",
			degree: "s3, s4, sf1, s5",
			logoUrl: "/buildspace.jpg",
			start: "2023",
			end: "2024",
		},
		{
			school: "University of Waterloo",
			href: "https://uwaterloo.ca",
			degree: "Bachelor's Degree of Computer Science (BCS)",
			logoUrl: "/waterloo.png",
			start: "2016",
			end: "2021",
		},
		{
			school: "Wilfrid Laurier University",
			href: "https://wlu.ca",
			degree: "Bachelor's Degree of Business Administration (BBA)",
			logoUrl: "/laurier.png",
			start: "2016",
			end: "2021",
		},
		{
			school: "International Baccalaureate",
			href: "https://ibo.org",
			degree: "IB Diploma",
			logoUrl: "/ib.png",
			start: "2012",
			end: "2016",
		},
	],

	dummyProjects: [
		{
			id: "3",
			title: "HealthHub",
			byline: "Personalized Health Dashboard",
			description:
				"A comprehensive health tracking dashboard that integrates data from various fitness devices and apps.",
			technologies: [
				"React",
				"TypeScript",
				"GraphQL",
				"Apollo",
				"D3.js",
				"styled-components",
			],
			githubUrl: "https://github.com/username/healthhub",
			liveUrl: "https://myhealthhub.com",
		},
		{
			id: "4",
			title: "AITutor",
			byline: "AI-powered Learning Assistant",
			description:
				"An intelligent tutoring system that uses natural language processing to provide personalized learning experiences.",
			technologies: [
				"Python",
				"TensorFlow",
				"Flask",
				"React",
				"PostgreSQL",
				"Docker",
			],
			githubUrl: "https://github.com/username/aitutor",
		},
		{
			id: "5",
			title: "CryptoInsight",
			byline: "Cryptocurrency Analysis Tool",
			description:
				"A real-time cryptocurrency market analysis tool with predictive modeling and portfolio management features.",
			technologies: [
				"Next.js",
				"Node.js",
				"WebSocket",
				"Recharts",
				"Styled JSX",
				"Vercel",
			],
			githubUrl: "https://github.com/username/cryptoinsight",
			liveUrl: "https://cryptoinsight.io",
		},
	],
} as const;
