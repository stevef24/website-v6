"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

export default function ProjectHoverCard() {
	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
		let { left, top } = currentTarget.getBoundingClientRect();

		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	return (
		<div
			className="min-w-[320px]  w-[400px] group relative max-w-md rounded-xl border border-white/10 bg-background px-8 py-16 shadow-2xl"
			onMouseMove={handleMouseMove}
		>
			<motion.div
				className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
				style={{
					background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgb(234, 88, 13, 0.15),
              transparent 80%
            )
          `,
				}}
			/>
			<div>
				<h3 className="text-base font-semibold leading-7 text-primary">
					Byline
				</h3>
				<div className="mt-2 flex items-center gap-x-2">
					<span className="text-5xl font-bold tracking-tight text-white">
						Hero
					</span>
				</div>
				<p className="mt-6 text-base leading-7 text-gray-300">
					Lorem ipsum dolor sit amet consectetur adipisicing elit, facilis illum
					eum ullam nostrum atque quam.
				</p>
			</div>
		</div>
	);
}
