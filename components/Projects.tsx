import React from "react";

import ProjectCard, { CardProps } from "./ProjectCard";

const projects: CardProps[] = [
	{
		title: "Dev Overflow",
		description:
			"A Stack Overflow clone for developers to ask questions and get answers.",
		github: "https://github.com/stevef24/Next13-Stackoverflow",
		linkLink: "https://next13-stackoverflow-gj99kv6ln-stevef24.vercel.app/",
	},
	{
		title: "Lugh AI",
		description:
			"AIO AI image enhacer using multiple AI models to edit your image.",
		github: "https://github.com/stevef24/AI-Saas/tree/main/lughai",
		linkLink: "",
	},
	{
		title: "City Canvas",
		description:
			"Find the best art places to visit in your city with City Canvas.",
		github: "https://github.com/Nayem59/CityCanvas/tree/main/CityCanvas",
		linkLink: "",
	},
];

const Projects = () => {
	return (
		<div className="flex justify-center items-center flex-wrap gap-10">
			{projects.map((project, index) => (
				<ProjectCard key={index} {...project} />
			))}
		</div>
	);
};

export default Projects;
