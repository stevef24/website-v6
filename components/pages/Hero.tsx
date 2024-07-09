/* eslint-disable react/no-unescaped-entities */
"use client";

import { useGetPointerMovement } from "@/hooks/GetPointerMove";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Home() {
	const pointerProps = useGetPointerMovement(true);

	return (
		<div className="min-h-screen bg-background font-sans">
			<div className=" grid h-full min-h-screen w-full place-items-center ">
				<div className=" flex-col items-center flex antialiased">
					<div className="w-48 h-48 rounded-full  mb-4 ">
						<Image
							src="/avatar.png"
							alt="Profile"
							width={220}
							height={220}
							className="object-fit"
						/>
					</div>

					<h2 className="text-[min(5vw,4rem)] font-semibold mb-2  ">
						Hi, I'm Stav 👋🏾
					</h2>

					<h1 className="text-[min(10vw,6rem)] font-bold text-center my-10 leading-none">
						Building digital
						<br />
						products, brands, and
						<br />
						experience.
					</h1>

					<svg width="0" height="0">
						<defs>
							<mask id="mask" x="0" y="0" width="100%" height="100%">
								<rect x="0" y="0" width="100%" height="100%" fill="#fff" />
								<text
									x="50%"
									y="50%"
									fontFamily="Arial"
									fontSize="24"
									fill="#000"
									textAnchor="middle"
									dominantBaseline="middle"
								>
									Stav Fernandes
								</text>
							</mask>
						</defs>
					</svg>

					<div className="text-center mb-6">
						<p className="mb-1">
							a Product Designer and Visual Developer in SF.
						</p>
						<p>
							I specialize in
							<span className="relative">
								<span
									className="absolute inset-0 bg-orange-500"
									style={{ mask: "url(#mask)" }}
								></span>
								<span className="relative z-10">
									UI/UX Design, Responsive Web Design,
								</span>
							</span>
						</p>
						<p>and Visual Development.</p>
					</div>

					<Button className="bg-primary rounded-full">Lets Connect!</Button>
				</div>
			</div>
		</div>
	);
}
