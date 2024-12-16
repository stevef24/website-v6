import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "./callout";
import FlowDiagram from "../blog/FlowDiagram";
import DecisionFlow from "../blog/FormComponent";
import CompilerComparison from "../blog/CompilerComparison";
import DecisionNode from "../blog/FormDecisionTree";
import Sidenote from "../Sidenote";
import Codeblock from "../Codeblock";
import YesNo from "./YesNo";

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
		<div className="relative">
			<pre className=" border border-dashed border-orange-500/50 bg-orange-950/5 p-4 rounded-lg overflow-x-auto">
				{children}
			</pre>
			<Image
				src={"/images/code.png"}
				alt={"yes"}
				width={84}
				height={84}
				className="absolute -top-[80px] -right-0"
			/>
		</div>
	),
	Codeblock,
	Sidenote,
	YesNo,
};

interface MdxProps {
	code: string;
}

export function MDXContent({ code }: MdxProps) {
	const Component = useMDXComponent(code);
	return <Component components={components} />;
}
