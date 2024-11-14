"use client";

import React, { useState, useMemo } from "react";
import { Check, X, FileCode, Link, RotateCcw } from "lucide-react";

type NodeId = number;

interface Option {
	text: string;
	result?: string;
	nextId?: NodeId;
	isYes: boolean;
	explanation: string;
}

interface DecisionNode {
	id: NodeId;
	question: string;
	options: Option[];
}

const DecisionFlow: React.FC = () => {
	const [userAnswers, setUserAnswers] = useState<Record<NodeId, number>>({});
	const [currentNode, setCurrentNode] = useState<NodeId>(1);

	const decisions: DecisionNode[] = [
		{
			id: 1,
			question: "Does the form handle sensitive information?",
			options: [
				{
					text: "Yes",
					nextId: 2,
					isYes: true,
					explanation:
						"Forms with sensitive data should use functions to prevent exposure in URLs",
				},
				{
					text: "No",
					nextId: 3,
					isYes: false,
					explanation:
						"Non-sensitive data allows for more flexibility in handling",
				},
			],
		},
		{
			id: 2,
			question: "",
			options: [
				{
					text: "Use `action` as a Function",
					result: "Protect sensitive data by handling it server-side",
					isYes: true,
					explanation:
						"Function handlers ensure sensitive data is processed securely",
				},
			],
		},
		{
			id: 3,
			question: "Is server-side validation or processing required?",
			options: [
				{
					text: "Yes",
					nextId: 4,
					isYes: true,
					explanation:
						"Server-side processing requires a function to handle the logic",
				},
				{
					text: "No",
					nextId: 5,
					isYes: false,
					explanation: "Client-side only forms have more routing options",
				},
			],
		},
		{
			id: 4,
			question: "",
			options: [
				{
					text: "Use `action` as a Function",
					result: "Enable complex server-side processing",
					isYes: true,
					explanation:
						"Functions provide full access to server resources and validation",
				},
			],
		},
		{
			id: 5,
			question: "Is it acceptable for form data to be visible in the URL?",
			options: [
				{
					text: "Yes",
					nextId: 7,
					isYes: true,
					explanation:
						"URL visibility can be beneficial for sharing and bookmarking",
				},
				{
					text: "No",
					nextId: 6,
					isYes: false,
					explanation: "Keep data private by using a function handler",
				},
			],
		},
		{
			id: 6,
			question: "",
			options: [
				{
					text: "Use `action` as a Function",
					result: "Keep form data private and out of the URL",
					isYes: true,
					explanation: "Functions prevent data exposure in the URL",
				},
			],
		},
		{
			id: 7,
			question:
				"Is it a simple form (like search) where URL visibility is beneficial?",
			options: [
				{
					text: "Yes",
					nextId: 8,
					isYes: true,
					explanation: "Simple forms benefit from URL sharing and bookmarking",
				},
				{
					text: "No",
					nextId: 6,
					isYes: false,
					explanation: "Complex forms are better handled with functions",
				},
			],
		},
		{
			id: 8,
			question: "",
			options: [
				{
					text: "Use `action` as a String (URL)",
					result: "Enable easy sharing and bookmarking",
					isYes: true,
					explanation:
						"URL-based actions are perfect for shareable, simple forms",
				},
			],
		},
	];

	const handleAnswer = (nodeId: NodeId, optionIndex: number) => {
		const node = decisions.find((n) => n.id === nodeId);
		if (!node) return;

		const option = node.options[optionIndex];
		const newAnswers = { ...userAnswers, [nodeId]: optionIndex };
		setUserAnswers(newAnswers);

		if (option.nextId) {
			setCurrentNode(option.nextId);
		}
	};

	const reset = () => {
		setUserAnswers({});
		setCurrentNode(1);
	};

	const getPreviousNodeId = (nodeId: NodeId): NodeId | null => {
		const parentNode = decisions.find((node) =>
			node.options.some((opt) => opt.nextId === nodeId)
		);
		return parentNode?.id || null;
	};

	const goBack = () => {
		const previousNodeId = getPreviousNodeId(currentNode);
		if (previousNodeId) {
			setCurrentNode(previousNodeId);
			const newAnswers = { ...userAnswers };
			delete newAnswers[previousNodeId];
			setUserAnswers(newAnswers);
		}
	};

	const currentNodeData = decisions.find((n) => n.id === currentNode);
	const isResult = currentNodeData?.options[0].result !== undefined;

	// Calculate the path
	const path = useMemo(() => {
		const result = [];
		let nodeId: NodeId | undefined = 1;

		while (nodeId) {
			const node = decisions.find((n) => n.id === nodeId);
			if (!node) break;

			const answerIndex: number = userAnswers[nodeId];
			if (answerIndex === undefined) break;

			const selectedOption: { text: string; nextId?: number } =
				node.options[answerIndex];
			result.push({
				question: node.question,
				answer: selectedOption.text,
			});

			nodeId = selectedOption.nextId;
		}

		return result;
	}, [userAnswers]);

	// Rest of the component remains the same...
	return (
		<div className="bg-black p-3 sm:p-4 rounded-lg sm:rounded-xl w-full max-w-[768px] mx-auto min-h-[400px] flex flex-col">
			{/* Header */}
			<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mb-4 sm:mb-6">
				<div className="flex items-center justify-between sm:justify-start gap-2">
					<h2 className="text-orange-300 text-xs sm:text-sm font-medium">
						Form Action Type Guide
					</h2>
					<span className="text-[10px] sm:text-xs text-gray-500">
						Step {path.length} of {isResult ? path.length : path.length + 1}
					</span>
				</div>
				<button
					onClick={reset}
					className="flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 transition-colors text-[10px] sm:text-xs w-full sm:w-auto"
				>
					<RotateCcw className="w-3 h-3" />
					Start Over
				</button>
			</div>

			{/* Progress Path */}
			<div className="mb-4 sm:mb-6 overflow-x-auto">
				<div className="flex items-center gap-1 min-w-max px-1">
					{path.map((step, index) => (
						<React.Fragment key={index}>
							{index > 0 && <span className="text-gray-600">→</span>}
							<span className="text-[10px] text-orange-300/70 whitespace-nowrap">
								{step.answer}
							</span>
						</React.Fragment>
					))}
				</div>
			</div>

			{/* Current Question/Result */}
			<div className="flex-1 flex flex-col">
				{currentNodeData && (
					<div
						className="animate-fadeIn flex flex-col gap-3 sm:gap-4 h-full"
						key={currentNode}
					>
						{currentNodeData.question && (
							<h3 className="text-base sm:text-lg text-white font-medium px-1">
								{currentNodeData.question}
							</h3>
						)}

						<div className="flex flex-col gap-2 sm:gap-3">
							{currentNodeData.options.map((option, index) => (
								<button
									key={index}
									onClick={() => handleAnswer(currentNode, index)}
									className={`
                    flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg
                    transition-all duration-300 text-left
                    ${
											option.result
												? "bg-green-500/20 text-green-300 border-2 border-green-500/50"
												: "bg-gray-800/50 hover:bg-gray-700/50 text-white"
										}
                  `}
								>
									<div
										className={`
                    w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0
                    ${option.result ? "bg-green-500/20" : "bg-gray-700"}
                  `}
									>
										{option.isYes ? (
											<Check className="w-3 h-3 sm:w-4 sm:h-4" />
										) : (
											<X className="w-3 h-3 sm:w-4 sm:h-4" />
										)}
									</div>
									<div className="flex flex-col items-start gap-0.5 sm:gap-1">
										<span className="font-medium text-xs sm:text-base">
											{option.text}
										</span>
										<span className="text-[10px] sm:text-xs text-gray-400">
											{option.explanation}
										</span>
									</div>
								</button>
							))}
						</div>

						{/* Result Additional Info */}
						{isResult && (
							<div className="mt-auto pt-4 sm:pt-6">
								<div className="p-3 sm:p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
									<div className="flex items-center gap-2 mb-2">
										{currentNodeData.options[0].isYes ? (
											<FileCode className="w-4 h-4 sm:w-5 sm:h-5 text-orange-300" />
										) : (
											<Link className="w-4 h-4 sm:w-5 sm:h-5 text-orange-300" />
										)}
										<h4 className="text-orange-300 font-medium text-xs sm:text-sm">
											Implementation Details
										</h4>
									</div>
									<p className="text-xs sm:text-sm text-gray-300">
										{currentNodeData.options[0].explanation}
									</p>
								</div>
							</div>
						)}
					</div>
				)}
			</div>

			{/* Back Button */}
			{currentNode !== 1 && (
				<div className="mt-4 sm:mt-6 flex justify-start">
					<button
						onClick={goBack}
						className="text-[10px] sm:text-xs text-gray-400 hover:text-gray-300 px-1"
					>
						← Back to previous question
					</button>
				</div>
			)}
		</div>
	);
};

export default DecisionFlow;
