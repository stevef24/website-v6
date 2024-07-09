/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import BlurFade from "../ui/Blur";

export default function About() {
	return (
		<BlurFade inView>
			<p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
				I'm a frontend developer specializing in the React ecosystem, with a
				passion for design, animation, and 3D. I love creating experiences that
				are both user and developer-friendly, bringing interfaces to life with
				seamless and engaging elements. With a keen eye for detail and a love
				for innovation, I'm dedicated to crafting visually stunning and highly
				functional web applications.
			</p>
		</BlurFade>
	);
}
