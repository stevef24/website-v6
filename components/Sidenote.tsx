import clsx from "clsx";
import React from "react";
import Image from "next/image";
interface TestProps {
	type: "warning" | "tip" | "success" | "note" | "thinking";
	children: React.ReactNode;
}

const Sidenote = ({ type, children }: TestProps) => {
	const imagePicker = (type: string) => {
		switch (type) {
			case "warning":
				return "/images/no.png";
			case "success":
				return "/images/thumbsup.png";
			case "note":
				return "/images/practice.png";
			case "thinking":
				return "/images/thinking.png";
			default:
				return "/images/tip.png";
		}
	};

	const headerPicker = (type: string) => {
		switch (type) {
			case "warning":
				return "Warning!";
			case "success":
				return "Good to know!";
			case "note":
				return "Note";
			case "thinking":
				return "Think!";
			default:
				return "Tip!";
		}
	};

	return (
		<div
			className={clsx(
				"max-w-[768px] flex-1 p-4 rounded-lg relative mt-10  mx-4",
				{
					"bg-orange-500/5 border border-orange-500/50": type === "tip",
					"bg-red-500/5 border border-red-500": type === "warning",
					"bg-green-500/5 border border-green-500": type === "success",
					"bg-blue-500/5 border border-blue-500": type === "note",
					"bg-purple-500/5 border border-purple-500": type === "thinking",
				}
			)}
		>
			<h3
				className={clsx("text-lg font-bold", {
					"text-orange-500": type === "tip",
					"text-red-500": type === "warning",
					"text-green-500": type === "success",
					"text-blue-500": type === "note",
					"text-purple-500": type === "thinking",
				})}
			>
				{headerPicker(type)}
			</h3>
			<Image
				src={imagePicker(type)}
				alt={type}
				width={84}
				height={84}
				className="absolute -top-[42px] -right-0"
			/>
			{children}
		</div>
	);
};

export default Sidenote;
