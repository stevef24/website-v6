import { Icons } from "@/components/ui/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
	navbar: [
		{ href: "/", icon: HomeIcon, label: "Home" },
		{ href: "/blog", icon: NotebookIcon, label: "Blog" },
		{ href: "/#projects", icon: CodeIcon, label: "Projects" },
	],
	contact: {
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
	dummyProjects: [
		{
			id: "1",
			title: "Contentify",
			byline: "Content Creator",
			description:
				"A social media content generator for Twitter, LinkedIn, and more. Create quick posts with the right styling and sizing for each platform. (Work In Progress)",
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
			byline: "City Mapping Tool",
			description:
				"An interactive platform to collaboratively map and visualize city projects, helping users plan and engage with urban spaces.",
			technologies: ["Next.js", "React", "Mapbox", "Tailwind CSS", "Node.js"],
			githubUrl: "https://github.com/Nayem59/CityCanvas/tree/main/CityCanvas",
		},
	],
} as const;
