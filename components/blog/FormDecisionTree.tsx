"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, X, RotateCcw } from "lucide-react";

// Define interfaces for the component props and state
interface Step {
	title: string;
	yesResult?: string;
	noResult?: string;
	yesNext?: number;
	noNext?: number;
}

interface PathStep {
	question: string;
	answer: "Yes" | "No";
	result?: string;
}

interface DecisionNodeProps {
	title: string;
	yesText?: string;
	noText?: string;
	onYes?: () => void;
	onNo?: () => void;
	isRoot?: boolean;
}

const DecisionNode: React.FC<DecisionNodeProps> = ({
	title,
	yesText,
	noText,
	onYes,
	onNo,
	isRoot = false,
}) => (
	<div className="flex flex-col items-center gap-4">
		<Card
			className={`
      w-full sm:w-72 border-2 transition-all duration-500
      ${
				isRoot
					? "border-orange-500 bg-orange-500/20"
					: "border-gray-700 bg-black"
			}
    `}
		>
			<CardContent className="p-4">
				<p
					className={`text-center font-medium ${
						isRoot ? "text-orange-300" : "text-gray-400"
					}`}
				>
					{title}
				</p>
			</CardContent>
		</Card>
		<div className="flex gap-4">
			{(yesText || onYes) && (
				<button
					onClick={onYes}
					className="flex items-center gap-2 px-4 py-2 rounded-lg 
            bg-green-500/20 text-green-300 hover:bg-green-500/30 
            transition-all duration-500"
				>
					<Check className="w-4 h-4" />
					<span>Yes</span>
				</button>
			)}
			{(noText || onNo) && (
				<button
					onClick={onNo}
					className="flex items-center gap-2 px-4 py-2 rounded-lg 
            bg-red-500/20 text-red-300 hover:bg-red-500/30 
            transition-all duration-500"
				>
					<X className="w-4 h-4" />
					<span>No</span>
				</button>
			)}
		</div>
		{(yesText || noText) && (
			<div className="flex flex-col sm:flex-row gap-4 mt-2 w-full">
				{yesText && (
					<div className="w-full sm:w-72">
						<Card className="border-2 border-green-500 bg-green-500/20">
							<CardContent className="p-4">
								<p className="text-sm text-center text-green-300">{yesText}</p>
							</CardContent>
						</Card>
					</div>
				)}
				{noText && (
					<div className="w-full sm:w-72">
						<Card className="border-2 border-red-500 bg-red-500/20">
							<CardContent className="p-4">
								<p className="text-sm text-center text-red-300">{noText}</p>
							</CardContent>
						</Card>
					</div>
				)}
			</div>
		)}
	</div>
);

const DecisionTree: React.FC = () => {
	const [currentStep, setCurrentStep] = useState<number>(0);
	const [path, setPath] = useState<PathStep[]>([]);

	const reset = () => {
		setCurrentStep(0);
		setPath([]);
	};

	// Type the steps array
	const steps: Step[] = [
		{
			title: "Does the form handle sensitive information?",
			yesResult:
				"Use action as function to prevent sensitive data exposure in URL",
			noNext: 1,
		},
		{
			title: "Is server-side validation required?",
			yesResult: "Use action as function for server-side processing",
			noNext: 2,
		},
		{
			title: "Is it acceptable for form data to be visible in URL?",
			yesNext: 3,
			noResult: "Use action as function to keep data private",
		},
		{
			title: "Is it a simple form like a search bar?",
			yesResult: "Use action as string URL for bookmarkable results",
			noResult: "Use action as function for complex form handling",
		},
	];

	const handleYes = () => {
		const step = steps[currentStep];
		setPath([...path, { question: step.title, answer: "Yes" }]);

		if (step.yesResult) {
			setPath([
				...path,
				{ question: step.title, answer: "Yes", result: step.yesResult },
			]);
		} else if (step.yesNext !== undefined) {
			setCurrentStep(step.yesNext);
		}
	};

	const handleNo = () => {
		const step = steps[currentStep];
		setPath([...path, { question: step.title, answer: "No" }]);

		if (step.noResult) {
			setPath([
				...path,
				{ question: step.title, answer: "No", result: step.noResult },
			]);
		} else if (step.noNext !== undefined) {
			setCurrentStep(step.noNext);
		}
	};

	const currentStepHasResult = path.length > 0 && path[path.length - 1].result;

	return (
		<Card className="w-full max-w-768 p-4 mx-auto bg-black border-2 border-gray-700 shadow-lg">
			<CardHeader className="flex flex-row justify-between items-center px-0 py-0">
				<h2 className="text-base sm:text-lg font-medium text-orange-300">
					Form Implementation
				</h2>
				{path.length > 0 && (
					<button
						onClick={reset}
						className="flex items-center gap-2 px-3 py-1.5 rounded-lg 
              bg-gray-700 text-gray-400 hover:bg-black 
              transition-all duration-500"
					>
						<RotateCcw className="w-4 h-4" />
						<span className="hidden sm:inline">Start Over</span>
					</button>
				)}
			</CardHeader>
			<CardContent className="flex flex-col items-center gap-8 px-0">
				{!currentStepHasResult ? (
					<DecisionNode
						title={steps[currentStep].title}
						onYes={handleYes}
						onNo={handleNo}
						isRoot={currentStep === 0}
					/>
				) : (
					<div className="flex flex-col items-center gap-4 w-full animate-fadeIn">
						<Card className="w-full border-2 border-green-500 bg-green-500/20">
							<CardContent className="p-4">
								<h3 className="text-base font-medium text-center mb-4 text-green-300">
									Recommendation
								</h3>
								<p className="text-center text-gray-400">
									{path[path.length - 1].result}
								</p>
							</CardContent>
						</Card>
						<div className="w-full mt-4">
							<h3 className="text-base font-medium mb-2 text-orange-300">
								Decision Path:
							</h3>
							<div className="flex flex-col gap-2">
								{path.map((step, index) => (
									<div key={index} className="flex items-center gap-2 text-sm">
										<ArrowRight className="w-4 h-4 text-orange-500 flex-shrink-0" />
										<span className="text-gray-400">{step.question}</span>
										<span
											className={`flex-shrink-0 ${
												step.answer === "Yes"
													? "text-green-300"
													: "text-red-300"
											}`}
										>
											({step.answer})
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				)}
			</CardContent>
		</Card>
	);
};

export default DecisionTree;
