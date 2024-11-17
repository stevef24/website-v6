import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "./callout";
import FlowDiagram from "../blog/FlowDiagram";
import DecisionFlow from "../blog/FormComponent";
import CompilerComparison from "../blog/CompilerComparison";
import DecisionNode from "../blog/FormDecisionTree";

const useMDXComponent = (code: string) => {
	const fn = new Function(code);
	return fn({ ...runtime }).default;
};

const components = {
	Image,
	Callout,
	FlowDiagram,
	DecisionFlow,
	CompilerComparison,
	DecisionNode,
	pre: ({ children }: { children: React.ReactNode }) => (
		<pre className="bg-black p-4 rounded-lg overflow-x-auto">{children}</pre>
	),
	code: ({
		children,
		className,
	}: {
		children: React.ReactNode;
		className?: string;
	}) => {
		return <code className="font-mono text-sm">{children}</code>;
	},
};

interface MdxProps {
	code: string;
}

export function MDXContent({ code }: MdxProps) {
	const Component = useMDXComponent(code);
	return <Component components={components} />;
}
