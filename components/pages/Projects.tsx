import { DATA } from "@/app/data/resume";
import ProjectHoverCard from "../ui/ProjectHoverCard";
const Projects = () => {
	return (
		<ul className="flex flex-wrap gap-4 justify-center">
			{DATA.dummyProjects.map((project, index) => (
				<li key={project.id}>
					<ProjectHoverCard
						title={project.title}
						byline={project.byline}
						description={project.description}
						technologies={[...project.technologies]}
						githubUrl={project.githubUrl}
					/>
				</li>
			))}
		</ul>
	);
};

export default Projects;
