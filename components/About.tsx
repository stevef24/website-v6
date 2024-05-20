/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";

export default function About() {
	return (
		<div>
			<motion.h3
				initial={{ opacity: 0, y: 20 }}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: { duration: 0.5, ease: "easeOut" },
				}}
				transition={{ duration: 0.7 }}
				viewport={{ once: true, amount: "all" }}
				className="scroll-m-20 text-2xl font-semibold tracking-tight text-center"
			>
				Hi 👋🏾 I'm <span className="text-primary">stav</span>
			</motion.h3>
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: { duration: 0.5, ease: "easeOut" },
				}}
				transition={{ duration: 0.7 }}
				viewport={{ once: true, amount: "all" }}
				className="leading-7 [&:not(:first-child)]:mt-6 text-center"
			>
				I'm a frontend developer specializing in the React ecosystem, with a
				passion for design, animation, and 3D. I love creating experiences that
				are both user and developer-friendly, bringing interfaces to life with
				seamless and engaging elements. With a keen eye for detail and a love
				for innovation, I'm dedicated to crafting visually stunning and highly
				functional web applications.
			</motion.p>
			<p></p>
		</div>
	);
}
