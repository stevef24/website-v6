"use client";

import { useGetPointerMovement } from "@/hooks/GetPointerMove";
import { motion } from "framer-motion";

export default function Home() {
	const pointerProps = useGetPointerMovement(true);

	return (
		<div className="min-h-screen bg-background font-sans">
			<div
				{...pointerProps}
				className="circular-fadeout grid h-full min-h-screen w-full place-items-center overflow-clip bg-background"
			>
				<div
					className="relative grid h-full w-full place-items-center [grid-area:1/1]"
					role="figure"
				>
					<div className="h-1/2 w-1/2 rotate-[var(--gradientRotation,36deg)] blur-2xl rounded-[3vw] bg-primary-gradient mix-blend-hard-light"></div>
					<div className="absolute inset-0 translate-x-[calc(var(--x,0)*5%)] translate-y-[calc(var(--y,0)*5%)] rotate-[var(--glassRotation,-16deg)] scale-[2] bg-frost bg-[size:var(--glassSectionWidth,30px)] mix-blend-color-dodge backdrop-blur-[40px] max-sm:backdrop-blur-[20px]"></div>
				</div>
				<div className=" mix-blend-screen [grid-area:1/1] flex-col items-center flex antialiased">
					<motion.h1
						initial={{ scale: 0.7, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						className="max-sm:text-[10vw] text-[8vw]  font-semibold leading-snug antialiased"
					>
						Stav Fernandes
					</motion.h1>
					<motion.h2
						initial={{ scale: 0.7, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{ delay: 0.4 }}
						className="text-white max-sm:text-[6vw]  text-[2vw] text-muted-foreground  "
					>
						Frontend Developer
					</motion.h2>
				</div>
			</div>
		</div>
	);
}
