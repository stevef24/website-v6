import About from "@/components/pages/About";
import Hero from "@/components/pages/Hero";
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
				<SectionHeader title="About" direction="row" />
				<About />
				<SectionHeader title="Experience" direction="row-reverse" />
				<Experience />
				<SectionHeader title="Projects" direction="row" />

				<SectionHeader title="Contact" direction="row-reverse" />
				<Contact />
			</main>
		</BlurFade>
	);
}
