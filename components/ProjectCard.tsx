"use client";
import { motion } from "framer-motion";
import { Link as LinkIcon } from "lucide-react";
import Icons from "./Icons";
import Link from "next/link";

export type CardProps = {
	title: string;
	description: string;
	github: string;
	linkLink?: string;
};

const Card = ({ title, description, github, linkLink }: CardProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{
				opacity: 1,
				y: 0,
				transition: { duration: 0.5, ease: "easeOut" },
			}}
			whileHover="hover"
			transition={{
				duration: 0.7,
				ease: "backInOut",
			}}
			variants={{
				hover: {
					scale: 1.05,
				},
			}}
			viewport={{ once: true, amount: "all" }}
			className="relative h-[400px] w-[350px] shrink-0 overflow-hidden rounded-xl border border-primary/20 p-8"
		>
			<div className="relative z-10 text-white">
				<motion.span
					initial={{ scale: 0.85 }}
					variants={{
						hover: {
							scale: 0.9,
						},
					}}
					transition={{
						duration: 1,
						ease: "backInOut",
					}}
					className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2] min-h-[150px]"
				>
					{title}
				</motion.span>
				<p>{description}</p>
			</div>
			<div className="absolute bottom-4 left-4 right-4 z-20 rounded-xl cursor-pointer">
				<div className="flex gap-2">
					{linkLink && (
						<Link className="" href={linkLink}>
							<LinkIcon />
						</Link>
					)}
					<Link href={github}>
						<Icons.github className="w-6 h-6" />
					</Link>
				</div>
			</div>
			<Background />
		</motion.div>
	);
};

const Background = () => {
	return (
		<motion.svg
			width="320"
			height="384"
			viewBox="0 0 320 384"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="absolute inset-0 z-0"
			variants={{
				hover: {
					scale: 1.5,
				},
			}}
			transition={{
				duration: 1,
				ease: "backInOut",
			}}
		>
			<motion.circle
				variants={{
					hover: {
						scaleY: 0.5,
						y: -25,
					},
				}}
				transition={{
					duration: 1,
					ease: "backInOut",
					delay: 0.2,
				}}
				cx="160.5"
				cy="114.5"
				r="101.5"
				fill="#EA580B"
				className="blur-lg opacity-20"
			/>
			<motion.ellipse
				variants={{
					hover: {
						scaleY: 2.25,
						y: -25,
					},
				}}
				transition={{
					duration: 1,
					ease: "backInOut",
					delay: 0.2,
				}}
				cx="160.5"
				cy="265.5"
				rx="101.5"
				ry="43.5"
				fill="#EA580B"
				className="blur-lg opacity-30"
			/>
		</motion.svg>
	);
};

export default Card;
