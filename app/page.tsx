import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SectionHeader from "@/components/SectionHeader";

export default function Home() {
	return (
		<>
			<Hero />
			<div className="container">
				<SectionHeader title={"About"} direction={"row"} />
				<div className="relative w-full h-full">
					<About />
				</div>
				<div>
					<SectionHeader title={"Projects"} direction={"row-reverse"} />
					<Projects />
				</div>
				<SectionHeader title={"Experience"} direction={"row"} />
				<Experience />
				<Contact />
			</div>
		</>
	);
}
