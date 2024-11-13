"use client";

import React, { useState, useEffect } from "react";
import {
	ArrowRight,
	ArrowDown,
	Database,
	Globe,
	Cpu,
	Package,
	Zap,
	Palette,
	Pause,
	Play,
	LucideIcon,
} from "lucide-react";

interface StepExplanation {
	title: string;
	description: string;
}

interface StepExplanations {
	[key: number]: StepExplanation;
}

interface SectionTitleProps {
	children: React.ReactNode;
	isClient?: boolean;
	isActive: boolean;
}

interface BoxWithGradientProps {
	title: string;
	icon: LucideIcon;
	isServer?: boolean;
	step: number;
	currentStep: number;
	onClick: (step: number) => void;
}

interface ArrowProps {
	direction?: "right" | "down";
	isActive: boolean;
}

const FlowDiagram: React.FC = () => {
	const [currentStep, setCurrentStep] = useState<number>(1);
	const [isPlaying, setIsPlaying] = useState<boolean>(true);
	const totalSteps = 6;

	const SectionTitle: React.FC<SectionTitleProps> = ({
		children,
		isClient,
		isActive,
	}) => (
		<span
			className={`
      absolute -top-3 left-4 bg-black px-2 
      transition-all duration-500 text-xs
      ${
				isActive
					? isClient
						? "text-orange-300"
						: "text-orange-500"
					: "text-gray-500"
			}
    `}
		>
			{children}
		</span>
	);

	// Step explanations remain the same...
	const stepExplanations: StepExplanations = {
		1: {
			title: "Component Request",
			description:
				"The client initiates a request for a React Server Component. This is typically triggered by a user action or during the initial page load. The request is sent to the server, including any necessary parameters or context.",
		},
		2: {
			title: "Server-Side Rendering",
			description:
				"The server receives the request and begins the rendering process. React starts executing the server component code, preparing to generate the initial HTML output. This step enables faster page loads and better SEO as content is pre-rendered on the server.",
		},
		3: {
			title: "Data Fetching",
			description:
				"During the server-side rendering process, the component can directly access databases, APIs, or other data sources. This eliminates the need for client-side data fetching and reduces waterfall requests. The data is fetched in a secure environment with direct access to backend resources.",
		},
		4: {
			title: "Serialization",
			description:
				"Once the server has rendered the component and gathered all necessary data, it serializes the output into a format that can be efficiently transmitted to the client. This includes the component's HTML structure and any data needed for hydration.",
		},
		5: {
			title: "Client Integration",
			description:
				"The client receives the serialized server component output and begins integrating it into the page. React reconciles the server-rendered content with the client-side application, preserving any existing state and ensuring smooth transitions.",
		},
		6: {
			title: "Interactive DOM",
			description:
				"The final stage where the server component is fully integrated into the client-side DOM. The component becomes interactive, responding to user events and state changes. The application maintains its dynamic nature while benefiting from server-side rendering.",
		},
	};

	useEffect(() => {
		let interval: NodeJS.Timeout;
		if (isPlaying) {
			interval = setInterval(() => {
				setCurrentStep((prev) => (prev % totalSteps) + 1);
			}, 2000);
		}
		return () => clearInterval(interval);
	}, [isPlaying]);

	const BoxWithGradient: React.FC<BoxWithGradientProps> = ({
		title,
		icon: Icon,
		isServer,
		step,
		currentStep,
		onClick,
	}) => {
		const isActive = currentStep === step;

		return (
			<div
				onClick={() => onClick(step)}
				className={`
          relative rounded-lg 
          bg-black border-2 
          transition-all duration-500
          ${
						isActive
							? isServer
								? "border-orange-500"
								: "border-orange-300"
							: "border-gray-700"
					}
          shadow-lg 
          flex flex-col items-center justify-center
          cursor-pointer
          hover:border-orange-500/50
          ${isActive ? "p-3 scale-105 z-10" : "p-2 scale-95"}
          w-[90px] h-[90px] sm:w-[100px] sm:h-[100px]
        `}
			>
				<div
					className={`
          absolute -top-2 -left-2 w-4 h-4 rounded-full 
          flex items-center justify-center text-white text-xs font-bold
          transition-all duration-500
          ${isActive ? "bg-orange-500 scale-110" : "bg-gray-700 scale-90"}
        `}
				>
					{step}
				</div>
				<div
					className={`
          absolute inset-0 rounded-lg 
          transition-all duration-500
          ${
						isActive
							? "bg-gradient-to-r from-orange-500/10 to-orange-300/10"
							: "bg-gray-800/10"
					}
        `}
				/>
				<Icon
					className={`
          transition-all duration-500
          ${isActive ? "w-6 h-6 sm:w-7 sm:h-7" : "w-5 h-5 sm:w-6 sm:h-6"}
          ${
						isActive
							? isServer
								? "text-orange-500"
								: "text-orange-300"
							: "text-gray-500"
					}
        `}
				/>
				<span
					className={`
          text-xs sm:text-sm font-medium z-10 transition-all duration-500 text-center mt-1
          ${isActive ? "text-white" : "text-gray-500"}
        `}
				>
					{title}
				</span>
			</div>
		);
	};

	const Arrow: React.FC<ArrowProps> = ({ direction = "right", isActive }) => (
		<div className="flex items-center justify-center p-0.5">
			{direction === "right" ? (
				<ArrowRight
					className={`
          w-4 h-4 transition-all duration-500
          ${isActive ? "text-orange-400" : "text-gray-700"}
        `}
				/>
			) : (
				<ArrowDown
					className={`
          w-4 h-4 transition-all duration-500
          ${isActive ? "text-orange-400" : "text-gray-700"}
        `}
				/>
			)}
		</div>
	);

	const handleStepClick = (step: number) => {
		setCurrentStep(step);
		setIsPlaying(false);
	};

	const isClientInitialActive = currentStep === 1;
	const isServerActive = currentStep >= 2 && currentStep <= 4;
	const isClientFinalActive = currentStep >= 5;

	return (
		<div className="bg-black p-3 sm:p-4 rounded-xl w-full mx-auto">
			<div className="flex flex-col gap-3 sm:gap-4">
				{/* Controls */}
				<div className="flex justify-center gap-3 mb-2">
					<button
						onClick={() => setIsPlaying(!isPlaying)}
						className="flex items-center gap-1 px-2 py-1 rounded-lg bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 transition-colors text-sm"
					>
						{isPlaying ? (
							<Pause className="w-3 h-3" />
						) : (
							<Play className="w-3 h-3" />
						)}
						{isPlaying ? "Pause" : "Play"}
					</button>
					<div className="flex items-center gap-1 text-orange-300 text-sm">
						<span>Step:</span>
						<span className="font-bold">{currentStep}</span>
						<span>of</span>
						<span>{totalSteps}</span>
					</div>
				</div>

				{/* Flow sections */}
				<div className="flex flex-col gap-3">
					{/* Client Section Initial Request */}
					<div
						className={`
            relative p-3 rounded-xl border
            transition-all duration-500
            ${
							isClientInitialActive
								? "border-orange-300/20"
								: "border-gray-700/20"
						}
          `}
					>
						<SectionTitle isClient isActive={isClientInitialActive}>
							Client - Initial
						</SectionTitle>
						<div className="flex justify-center">
							<BoxWithGradient
								title="Component Request"
								icon={Globe}
								step={1}
								currentStep={currentStep}
								onClick={handleStepClick}
							/>
						</div>
					</div>

					{/* Server Section */}
					<div
						className={`
            relative p-3 rounded-xl border
            transition-all duration-500
            ${isServerActive ? "border-orange-500/20" : "border-gray-700/20"}
          `}
					>
						<SectionTitle isActive={isServerActive}>Server Side</SectionTitle>
						<div className="flex items-center justify-between gap-1">
							<BoxWithGradient
								title="Server-Side Rendering"
								icon={Cpu}
								isServer
								step={2}
								currentStep={currentStep}
								onClick={handleStepClick}
							/>
							<Arrow isActive={isServerActive} />
							<BoxWithGradient
								title="Data Fetching"
								icon={Database}
								isServer
								step={3}
								currentStep={currentStep}
								onClick={handleStepClick}
							/>
							<Arrow isActive={isServerActive} />
							<BoxWithGradient
								title="Serialization"
								icon={Package}
								isServer
								step={4}
								currentStep={currentStep}
								onClick={handleStepClick}
							/>
						</div>
					</div>

					{/* Client Section Final */}
					<div
						className={`
            relative p-3 rounded-xl border
            transition-all duration-500
            ${
							isClientFinalActive
								? "border-orange-300/20"
								: "border-gray-700/20"
						}
          `}
					>
						<SectionTitle isClient isActive={isClientFinalActive}>
							Client - Final
						</SectionTitle>
						<div className="flex items-center justify-center gap-2">
							<BoxWithGradient
								title="Client Integration"
								icon={Zap}
								step={5}
								currentStep={currentStep}
								onClick={handleStepClick}
							/>
							<Arrow isActive={isClientFinalActive} />
							<BoxWithGradient
								title="Interactive DOM"
								icon={Palette}
								step={6}
								currentStep={currentStep}
								onClick={handleStepClick}
							/>
						</div>
					</div>
				</div>

				{/* Step Explanation Section */}
				<div className="mt-2">
					<div
						className={`
            p-3 rounded-xl border border-orange-500/20
            bg-gradient-to-r from-orange-500/5 to-transparent
            transition-all duration-500
          `}
					>
						<div className="flex items-center gap-2 mb-1">
							<div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xs">
								{currentStep}
							</div>
							<h3 className="text-orange-300 text-base font-semibold">
								{stepExplanations[currentStep].title}
							</h3>
						</div>
						<p className="text-gray-300 text-sm leading-relaxed">
							{stepExplanations[currentStep].description}
						</p>
					</div>
				</div>

				{/* Legend */}
				<div className="mt-2 border-t border-orange-500/20 pt-2">
					<div className="text-orange-300 text-xs">
						<span className="font-medium">Flow:</span> Request → Server
						Processing → Data → Serialization → Integration → DOM
					</div>
				</div>
			</div>
		</div>
	);
};

export default FlowDiagram;
