/* eslint-disable react/no-unescaped-entities */
"use client";

import BlurFade from "../ui/Blur";

export default function About() {
	return (
		<>
			<BlurFade inView>
				<p className="text-lg text-muted-foreground leading-7 [&:not(:first-child)]:mt-6 text-justify">
					Hey, I'm Stav. I'm a full-stack developer who loves crafting beautiful
					digital experiences, but there’s more to me than just code. What
					excites me the most about technology, especially now that AI is
					becoming integrated into our day-to-day lives, is that you can truly
					create whatever you imagine. There are almost endless possibilities
					with what you can create with code, the right people around you, and
					the right inspiration. That's why I decided to make a career switch
					into this world once I discovered coding. It's exciting, it's never
					dull, and you always need to learn and adapt.
				</p>
			</BlurFade>
			<br />
			<br />
			<BlurFade inView>
				<p className="text-lg text-muted-foreground leading-7 [&:not(:first-child)]:mt-6 text-justify">
					Alongside my{" "}
					<a href="#values" className="underline text-primary">
						values
					</a>
					, one thing about me is that I love life. I love learning, I love
					growing, and I love laughing. Being part of something bigger than
					myself, solving problems with others, and working in diverse teams is
					what keeps me going every day. These are the opportunities I look for:
					I want to work with people who aren’t afraid to try something new or
					to fail. I’m not scared of testing the waters, and I love working
					towards a purpose. Working on something bigger than myself, chasing
					almost unattainable goals, gives me the drive I need. If you feel very
					similar to the way I do in regards to technology, code, React, AI, or
					just life in general, feel free to reach out. I'd love to meet
					like-minded people and connect with you.
				</p>
			</BlurFade>
		</>
	);
}
