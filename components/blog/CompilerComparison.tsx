"use client";

import React, { useState, useEffect } from "react";
import {
	Play,
	Pause,
	Code,
	Cpu,
	Monitor,
	Zap,
	FileCode,
	Cog,
	Boxes,
	LucideIcon,
} from "lucide-react";

interface Step {
	id: number;
	title: string;
	icon: LucideIcon; // From lucide-react
	description: string;
}

interface Flows {
	traditional: Step[];
	react19: Step[];
}

interface ArrowProps {
	isActive: boolean;
}

interface StepBoxProps {
	step: Step;
	isActive: boolean;
	onClick: () => void;
	isLast: boolean;
}

const CompilerComparison = () => {
	const [currentStep, setCurrentStep] = useState<number>(1);
	const [activeFlow, setActiveFlow] = useState<"traditional" | "react19">(
		"traditional"
	);
	const [isPlaying, setIsPlaying] = useState<boolean>(true);

	const flows: Flows = {
		traditional: [
			{
				id: 1,
				title: "JSX Writing",
				icon: Code,
				description:
					"Developers write components using JSX, a syntax extension that allows mixing HTML-like code with JavaScript.",
			},
			{
				id: 2,
				title: "Babel Transform",
				icon: FileCode,
				description:
					"Babel, a JavaScript compiler, converts JSX into standard JavaScript functions that browsers can interpret.",
			},
			{
				id: 3,
				title: "Bundler Process",
				icon: Boxes,
				description:
					"Tools like Webpack bundle JavaScript files, including transformed JSX, into build artifacts for deployment.",
			},
			{
				id: 4,
				title: "Manual Optimization",
				icon: Cpu,
				description:
					"Developers manually apply optimizations using React.memo, useMemo, and useCallback to prevent unnecessary re-renders.",
			},
			{
				id: 5,
				title: "Runtime Execution",
				icon: Monitor,
				description:
					"The browser executes the bundled JavaScript, with performance depending on the effectiveness of manual optimizations.",
			},
			{
				id: 6,
				title: "Debug & Optimize",
				icon: Cog,
				description:
					"Developers monitor component behavior, using tools like React DevTools to identify and address unnecessary re-renders.",
			},
		],
		react19: [
			{
				id: 1,
				title: "JSX Writing",
				icon: Code,
				description: "Developers continue to write components using JSX.",
			},
			{
				id: 2,
				title: "Build Transform",
				icon: FileCode,
				description:
					"Babel, along with the new React Compiler, processes JSX and JavaScript code during the build, preparing it for optimization.",
			},
			{
				id: 3,
				title: "Compiler Optimization",
				icon: Cpu,
				description:
					"The compiler analyzes the code to identify components for optimization, automatically apply memoization, and enforce immutability rules.",
			},
			{
				id: 4,
				title: "Build Generation",
				icon: Boxes,
				description:
					"The build process produces JavaScript files that include these optimizations, ready for deployment.",
			},
			{
				id: 5,
				title: "Optimized Execution",
				icon: Zap,
				description:
					"The browser runs the optimized code, resulting in fewer unnecessary re-renders and improved performance.",
			},
			{
				id: 6,
				title: "Optional Configuration",
				icon: Cog,
				description:
					"Developers can adjust compiler settings to control which components or hooks are optimized, providing flexibility as needed.",
			},
		],
	};

	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (isPlaying) {
			timer = setInterval(() => {
				setCurrentStep((prev) =>
					prev >= flows[activeFlow].length ? 1 : prev + 1
				);
			}, 3000);
		}
		return () => clearInterval(timer);
	}, [isPlaying, activeFlow]);

	const Arrow = ({ isActive }: ArrowProps) => (
		<div className="h-24 flex items-center justify-center my-1">
			<svg className="h-16 w-8 overflow-visible" viewBox="0 0 32 40">
				<defs>
					<linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" stopColor="rgb(249, 115, 22)" stopOpacity="0.2" />
						<stop offset="100%" stopColor="rgb(249, 115, 22)" stopOpacity="0" />
					</linearGradient>
				</defs>
				<path
					d="M16 0 L16 30 M6 20 L16 30 L26 20"
					fill="none"
					stroke={isActive ? "url(#arrow-gradient)" : "#374151"}
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className={`transition-all duration-500 ${
						isActive ? "opacity-100" : "opacity-40"
					}`}
				/>
			</svg>
		</div>
	);

	const StepBox = ({ step, isActive, onClick, isLast }: StepBoxProps) => {
		const Icon = step.icon;

		return (
			<div className="flex flex-col items-center">
				<div className="w-1/3 min-w-[300px] max-w-[400px]">
					<button
						onClick={onClick}
						className={`
              w-full rounded-lg bg-black border-2 
              transition-all duration-500
              ${
								isActive
									? "border-orange-500 p-3 scale-[1.02] z-10"
									: "border-gray-700 p-2 scale-[0.98]"
							}
              flex items-center gap-3
              hover:border-orange-500/50
            `}
					>
						<div
							className={`
              absolute -top-2 -left-2 w-5 h-5 rounded-full 
              flex items-center justify-center text-xs font-bold text-white
              ${isActive ? "bg-orange-500" : "bg-gray-700"}
            `}
						>
							{step.id}
						</div>
						<div
							className={`
              p-2 rounded-lg
              ${isActive ? "bg-orange-500/20" : "bg-gray-800"}
            `}
						>
							<Icon
								className={`
                transition-colors
                ${
									isActive ? "text-orange-500 w-5 h-5" : "text-gray-500 w-4 h-4"
								}
              `}
							/>
						</div>
						<div className="flex flex-col items-start gap-1">
							<span
								className={`
                text-sm font-medium
                ${isActive ? "text-orange-300" : "text-gray-400"}
              `}
							>
								{step.title}
							</span>
							{isActive && (
								<span className="text-xs text-gray-400 text-left">
									{step.description}
								</span>
							)}
						</div>
					</button>
				</div>
				{!isLast && <Arrow isActive={isActive} />}
			</div>
		);
	};

	return (
		<div className="bg-black p-4 sm:p-6 rounded-xl w-full max-w-[768px] mx-auto">
			<div className="flex flex-col gap-6">
				<div className="flex flex-col sm:flex-row justify-between gap-4">
					<div className="flex gap-4 w-full sm:w-auto">
						{["traditional", "react19"].map((flow) => (
							<button
								key={flow}
								className={`
                  flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm
                  transition-colors
                  ${
										activeFlow === flow
											? "bg-orange-500/20 text-orange-300"
											: "bg-gray-800 text-gray-400"
									}
                `}
								onClick={() => {
									setActiveFlow(flow as "traditional" | "react19");
									setCurrentStep(1);
								}}
							>
								{flow === "traditional" ? "Traditional React" : "React 19"}
							</button>
						))}
					</div>

					<div className="flex items-center gap-4 w-full sm:w-auto">
						<button
							onClick={() => setIsPlaying(!isPlaying)}
							className={`
                flex-1 sm:flex-none flex items-center justify-center gap-2 
                px-4 py-2 rounded-lg text-sm
                ${
									isPlaying
										? "bg-green-500/20 text-green-300 hover:bg-green-500/30"
										: "bg-red-500/20 text-red-300 hover:bg-red-500/30"
								}
              `}
						>
							{isPlaying ? (
								<Pause className="w-3 h-3" />
							) : (
								<Play className="w-3 h-3" />
							)}
							{isPlaying ? "Pause" : "Play"}
						</button>
						<span className="text-orange-300 text-sm">
							Step: {currentStep}/{flows[activeFlow].length}
						</span>
					</div>
				</div>

				<div className="flex flex-col">
					{flows[activeFlow].map((step, index) => (
						<StepBox
							key={step.id}
							step={step}
							isActive={currentStep === step.id}
							onClick={() => {
								setCurrentStep(step.id);
								setIsPlaying(false);
							}}
							isLast={index === flows[activeFlow].length - 1}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default CompilerComparison;
