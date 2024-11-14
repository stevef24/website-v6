"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, Code, Cpu, GitBranch, Monitor, Zap } from "lucide-react";

interface FlowStep {
	id: number;
	title: string;
	icon: React.ElementType;
	description: string;
}

const CompilerComparison: React.FC = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [activeFlow, setActiveFlow] = useState<"traditional" | "react19">(
		"traditional"
	);
	const [isPlaying, setIsPlaying] = useState(true);

	const flows = {
		traditional: [
			{
				id: 1,
				title: "Trigger",
				icon: Code,
				description:
					"An event occurs, such as a state or prop change, initiating a re-render.",
			},
			{
				id: 2,
				title: "Virtual DOM Generation",
				icon: Monitor,
				description:
					"React creates an updated virtual DOM reflecting the new state.",
			},
			{
				id: 3,
				title: "Diffing (Reconciliation)",
				icon: GitBranch,
				description:
					"React compares the current virtual DOM with the new one to identify differences.",
			},
			{
				id: 4,
				title: "Update",
				icon: Zap,
				description:
					"React updates only the parts of the real DOM that have changed.",
			},
		],
		react19: [
			{
				id: 1,
				title: "Trigger",
				icon: Code,
				description:
					"Similar to the traditional process, an event such as a state or prop change initiates a re-render.",
			},
			{
				id: 2,
				title: "Compiler Optimization",
				icon: Cpu,
				description:
					"React 19's compiler processes components at build time, applying optimizations like automatic memoization to prevent unnecessary re-renders. This reduces the need for manual performance optimizations using hooks like useMemo and useCallback.",
			},
			{
				id: 3,
				title: "Virtual DOM Generation",
				icon: Monitor,
				description:
					"React creates an updated virtual DOM reflecting the new state.",
			},
			{
				id: 4,
				title: "Diffing (Reconciliation)",
				icon: GitBranch,
				description:
					"React compares the current virtual DOM with the new one to identify differences.",
			},
			{
				id: 5,
				title: "Update",
				icon: Zap,
				description:
					"React updates only the parts of the real DOM that have changed.",
			},
		],
	};

	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (isPlaying) {
			timer = setInterval(() => {
				setCurrentStep((prev) => {
					const maxSteps = flows[activeFlow].length;
					return prev >= maxSteps ? 1 : prev + 1;
				});
			}, 3000);
		}
		return () => clearInterval(timer);
	}, [isPlaying, activeFlow]);

	const StepBox: React.FC<{
		step: FlowStep;
		isActive: boolean;
		onClick: () => void;
		isLast: boolean;
	}> = ({ step, isActive, onClick, isLast }) => {
		const Icon = step.icon;

		return (
			<div className="flex flex-col items-center">
				<button
					onClick={onClick}
					className={`
            relative rounded-lg 
            bg-black border-2 
            transition-all duration-500
            ${isActive ? "border-orange-500" : "border-gray-700"}
            shadow-lg 
            flex flex-col items-center justify-center
            cursor-pointer
            hover:border-orange-500/50
            ${isActive ? "p-2 scale-[1.02] z-10" : "p-1.5 scale-[0.98]"}
            w-[100px] h-[100px]
          `}
				>
					<div
						className={`
              absolute -top-2 -left-2 w-4 h-4 rounded-full 
              flex items-center justify-center text-white text-xs font-bold
              transition-all duration-500
              ${
								isActive
									? "bg-orange-500 scale-[1.02]"
									: "bg-gray-700 scale-[0.98]"
							}
            `}
					>
						{step.id}
					</div>
					<Icon
						className={`
            transition-all duration-500
            ${isActive ? "w-6 h-6 text-orange-500" : "w-5 h-5 text-gray-500"}
          `}
					/>
					<span
						className={`
            text-xs font-medium z-10 transition-all duration-500 text-center mt-1
            ${isActive ? "text-white" : "text-gray-500"}
          `}
					>
						{step.title}
					</span>
				</button>
				{!isLast && (
					<svg className="h-8 w-8 my-2" viewBox="0 0 24 24" fill="none">
						<path
							d="M12 20V4M12 20L6 14M12 20L18 14"
							stroke={isActive ? "#f97316" : "#374151"}
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				)}
			</div>
		);
	};

	return (
		<div className="bg-black p-4 sm:p-6 rounded-xl w-full max-w-[768px] mx-auto min-h-[600px]">
			<div className="flex flex-col gap-6">
				<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
					<div className="flex gap-4 w-full sm:w-auto">
						<button
							className={`flex-1 sm:flex-none px-4 py-2 rounded-lg transition-colors text-sm ${
								activeFlow === "traditional"
									? "bg-orange-500/20 text-orange-300"
									: "bg-gray-800 text-gray-400"
							}`}
							onClick={() => {
								setActiveFlow("traditional");
								setCurrentStep(1);
							}}
						>
							Traditional React
						</button>
						<button
							className={`flex-1 sm:flex-none px-4 py-2 rounded-lg transition-colors text-sm ${
								activeFlow === "react19"
									? "bg-orange-500/20 text-orange-300"
									: "bg-gray-800 text-gray-400"
							}`}
							onClick={() => {
								setActiveFlow("react19");
								setCurrentStep(1);
							}}
						>
							React 19
						</button>
					</div>
					<div className="flex items-center gap-4 w-full sm:w-auto">
						<button
							onClick={() => setIsPlaying(!isPlaying)}
							className={`
                flex-1 sm:flex-none flex items-center justify-center gap-2 
                px-4 py-2 rounded-lg transition-colors text-sm
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
						<span className="text-orange-300 text-sm whitespace-nowrap">
							Step: <span className="font-bold">{currentStep}</span>/
							{flows[activeFlow].length}
						</span>
					</div>
				</div>

				<div className="flex flex-col items-center gap-2 p-4">
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

				<div className="p-4 rounded-xl border border-orange-500/20 bg-gradient-to-r from-orange-500/5 to-transparent">
					<div className="flex items-center gap-2 mb-2">
						<div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xs">
							{currentStep}
						</div>
						<h3 className="text-orange-300 text-base font-semibold">
							{flows[activeFlow][currentStep - 1].title}
						</h3>
					</div>
					<p className="text-gray-300 text-sm leading-relaxed">
						{flows[activeFlow][currentStep - 1].description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default CompilerComparison;
