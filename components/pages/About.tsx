/* eslint-disable react/no-unescaped-entities */
"use client";

import BlurFade from "../ui/Blur";

export default function About() {
	return (
		<BlurFade inView>
			<p className="text-lg text-muted-foreground leading-7 [&:not(:first-child)]:mt-6 text-left">
				Hey there, I’m Stav Fernandes, a frontend developer with a passion for
				creating seamless digital experiences. But there’s more to me than just
				lines of code. I thrive on collaboration, believing that working with
				others who challenge and inspire growth is key to achieving our best.
				Boldness and a strong work ethic are at the heart of my approach,
				driving me to push boundaries and turn ambitious visions into reality. I
				see growth as an essential journey, fueled by curiosity—a trait I value
				in myself and my teams. Whether it’s exploring new technologies or
				refining my skills, I’m all in. Let’s connect, innovate, and create
				something amazing together!
			</p>
		</BlurFade>
	);
}
