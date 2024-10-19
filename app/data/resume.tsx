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
			id: "1",
			title: "Contentify",
			byline: "Social Media Content Creator",
			description:
				"A social media content generator for Twitter, LinkedIn, and more. Create quick posts with the right styling and sizing for each platform.",
			technologies: [
				"Next.js",
				"React",
				"Clerk",
				"Drizzle ORM",
				"PostgreSQL",
				"Vercel",
				"Docker",
			],
			githubUrl: "https://github.com/stevef24/Fullstack-app",
			liveUrl: "",
		},
		{
			id: "2",
			title: "Dev Overflow",
			byline: "Stack Overflow Clone",
			description:
				"A question and answer platform inspired by Stack Overflow, built using modern web technologies to help developers connect and share knowledge.",
			technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
			githubUrl: "https://github.com/stevef24/Next13-Stackoverflow",
			liveUrl: "https://next13-stackoverflow-gj99kv6ln-stevef24.vercel.app/",
		},
		{
			id: "3",
			title: "Lugh AI",
			byline: "AI-Powered SaaS Solution",
			description:
				"An AI-powered SaaS platform that provides advanced features and personalized services for users leveraging machine learning technologies.",
			technologies: ["React", "Python", "Flask", "Docker"],
			githubUrl: "https://github.com/stevef24/AI-Saas/tree/main/lughai",
		},
		{
			id: "4",
			title: "City Canvas",
			byline: "Collaborative City Mapping Tool",
			description:
				"An interactive platform to collaboratively map and visualize city projects, helping users plan and engage with urban spaces.",
			technologies: ["Next.js", "React", "Mapbox", "Tailwind CSS", "Node.js"],
			githubUrl: "https://github.com/Nayem59/CityCanvas/tree/main/CityCanvas",
		},
	],
} as const;
