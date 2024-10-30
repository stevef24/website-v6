/* eslint-disable react/no-unescaped-entities */
import React from "react";
import BlurFade from "../ui/Blur";
import { Typography, Variant } from "../ui/Typography";

const ValueItem = ({ content }: { content: string }) => (
	<div className="flex flex-col items-start space-y-4 text-left">
		<BlurFade inView>
			<Typography
				variant={Variant.body}
				className="text-foreground dark:text-white text-lg leading-relaxed"
			>
				<span className="text-6xl font-bold text-primary float-left mr-3 mt-1 leading-none">
					{content.charAt(0)}
				</span>
				{content.slice(1)}
			</Typography>
		</BlurFade>
	</div>
);

const Values = () => {
	return (
		<section className="container mx-auto px-4 py-16">
			<div className="flex flex-col space-y-12">
				<Typography
					variant={Variant.body}
					className="text-foreground dark:text-white mb-8 text-lg leading-relaxed"
				>
					These core values are at the heart of who I am and how I work. They're
					not just guidelines for me but{" "}
					<strong>qualities I look for in every team I join</strong>. By
					embracing{" "}
					<em>
						collaboration, boldness, a strong work ethic, growth, and curiosity
					</em>
					, I believe we can create a space where everyone thrives and
					contributes to something meaningful. This isn't just about checking
					boxes on a CV; it's about{" "}
					<strong>showing what I truly value and how I approach my work</strong>
					.
				</Typography>
				<ValueItem content="Collaboration is essential to reach your full potential. Surrounding yourself with people who push you to be your best is crucial. In an environment where everyone inspires each other to grow, we can all thrive together. That's why collaboration is not just a value but a fundamental part of my approach to work." />
				<ValueItem content="Boldness is about more than innovation; it's the courage to change what needs changing and to see possibilities others overlook. To make a real impact, I follow my vision, taking calculated risks and challenging norms. It's about pursuing new paths and creating my own when necessary. Through boldness, I strive to be the change I want to see in the world." />
				<ValueItem content="Work ethic is the foundation of any great achievement. It's not just a phrase for resumes; it's a deep commitment to becoming the best version of yourself. I believe in working smart and hard, on both myself and with those around me, to turn visions into reality. Consistent effort and dedication are essential, and without them, lasting success is unattainable." />
				<ValueItem content="Growth is fundamental to a fulfilling life. As humans, we inherently seek growth, consciously or subconsciously. It's what makes life worth living, providing us with opportunities to learn, adapt, and evolve. Growth fuels our hope that things can always get better." />
				<ValueItem content="Curiosity is my compass, guiding me through exploration and growth. More than raw intelligence, it's curiosity that sparks passion and drives me to uncover new things. It's through curiosity that we often make mistakes, and those mistakes are crucial stepping stones to success. I value curiosity in myself and in the teams I work with." />
			</div>
		</section>
	);
};

export default Values;
