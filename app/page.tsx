import About from "@/components/pages/About";
import Hero from "@/components/pages/Hero";
import Experience from "@/components/ui/Experience";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Home() {
	return (
		<>
			<header>
				<Hero />
			</header>
			<main className="max-w-6xl mx-auto py-12 sm:py-24 px-6">
				<SectionHeader title="About" direction="row" />
				<About />
				<SectionHeader title="Experience" direction="row-reverse" />
				<Experience />
			</main>
		</>
	);
}
