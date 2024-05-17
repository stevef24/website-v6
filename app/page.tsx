"use client";

import { useGetPointerMovement } from "@/hooks/GetPointerMove";

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
					<div className="h-1/2 w-1/2 rotate-[var(--gradientRotation,36deg)] rounded-[3vw] bg-primary-gradient mix-blend-hard-light"></div>
					<div className="absolute inset-0 translate-x-[calc(var(--x,0)*5%)] translate-y-[calc(var(--y,0)*5%)] rotate-[var(--glassRotation,-16deg)] scale-[2] bg-frost bg-[size:var(--glassSectionWidth,20px)] mix-blend-color-dodge backdrop-blur-[30px] max-sm:backdrop-blur-[20px]"></div>
				</div>
				<div className=" mix-blend-screen [grid-area:1/1] flex-col items-center flex antialiased">
					<h1 className="max-sm:text-[10vw] text-[8vw]  font-semibold leading-snug antialiased">
						Stav Fernandes
					</h1>
					<h2 className="text-white max-sm:text-[6vw]  text-[2vw] text-muted-foreground  ">
						Frontend Developer
					</h2>
				</div>
			</div>
		</div>
	);
}
