/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Button } from "../ui/button";

export default function Home() {
	return (
		<div className="min-h-screen bg-background font-sans flex items-center justify-center px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto text-center">
				<div className="mb-8 sm:mb-12">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6">
						Hi, I'm Stav 👋🏾
					</h2>
					<Image
						src="/avatar.png"
						alt="Profile"
						width={180}
						height={180}
						className="mx-auto rounded-full object-cover"
					/>
				</div>

				<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight mb-8 sm:mb-10">
					Frontend Software Engineer
				</h1>

				<div className="mb-8 sm:mb-10 text-base sm:text-lg md:text-xl">
					<p className="mb-2">a Product Designer and Visual Developer in SF.</p>
					<p className="mb-2">
						I specialize in
						<span className="relative">
							<span
								className="absolute inset-0 bg-primary opacity-20"
								style={{ mask: "url(#mask)" }}
							></span>
							<span className="relative z-10 font-medium">
								UI/UX Design, Responsive Web Design,
							</span>
						</span>
					</p>
					<p>and Visual Development.</p>
				</div>

				<Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-3 text-lg">
					Let's Connect!
				</Button>
			</div>

			<svg width="0" height="0" aria-hidden="true">
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
		</div>
	);
}
