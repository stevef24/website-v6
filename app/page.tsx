import About from "@/components/pages/About";
import Hero from "@/components/pages/Hero";
import Projects from "@/components/pages/Projects";
import Values from "@/components/pages/Values";
import BlurFade from "@/components/ui/Blur";
import Contact from "@/components/ui/Contact";
import Experience from "@/components/ui/Experience";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Home() {
	return (
		<BlurFade>
			<header>
				<Hero />
			</header>
			<main className="max-w-6xl mx-auto py-12 sm:py-24 px-6">
				<section id="about">
					<SectionHeader title="About" direction="row" />
					<About />
				</section>
				<section id="experience">
					<SectionHeader title="Experience" direction="row-reverse" />
					<Experience />
				</section>
				<section id="values">
					<SectionHeader title="Values" direction="row" />
					<Values />
				</section>
				<section id="projects">
					<SectionHeader title="Projects" direction="row-reverse" />
					<Projects />
				</section>
				<section id="contact">
					<SectionHeader title="Contact" direction="row" />
					<Contact />
				</section>
			</main>
		</BlurFade>
	);
}
