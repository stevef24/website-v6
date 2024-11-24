/* eslint-disable react/no-unescaped-entities */
"use client";

import BlurFade from "../ui/Blur";

export default function About() {
	return (
		<>
			<BlurFade inView>
				<p className="text-lg text-muted-foreground leading-7 [&:not(:first-child)]:mt-6 text-justify">
					Hey, I'm Stav. I'm a full-stack developer who loves crafting beautiful
					digital experiences, but there's so much more to me than just code.
					What excites me most about technology, especially now that AI is
					becoming part of our daily lives, is the endless possibilities. With
					code, the right team, and some inspiration, you can create anything
					you imagine. That sense of potential is what drew me to make a career
					switch into this world. Coding is exciting, always evolving, and
					constantly pushing me to learn and adapt.
				</p>
			</BlurFade>
			<br />
			<BlurFade inView>
				<p className="text-lg text-muted-foreground leading-7 [&:not(:first-child)]:mt-6 text-justify">
					Alongside my{" "}
					<a href="#values" className="underline text-primary">
						values
					</a>
					, I truly love life. I love learning, growing, and laughing. I thrive
					on being part of something bigger, solving problems with a team and
					learning from diverse perspective, it’s what keeps me excited every
					day. I look for opportunities to work with people who aren’t afraid to
					try new things, take risks, or even fail. I’m all about testing the
					waters and working toward ambitious, purpose-driven goals. Chasing
					almost unattainable dreams gives me the drive I need.
				</p>
				<p className="text-lg text-muted-foreground leading-7 [&:not(:first-child)]:mt-6 text-justify">
					If you share my passion for technology, React, AI, or just life in
					general, let’s connect! I’d love to meet like-minded people and hear
					your story.
				</p>
			</BlurFade>
		</>
	);
}
