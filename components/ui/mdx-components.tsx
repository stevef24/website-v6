import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "./callout";
import FlowDiagram from "../blog/FlowDiagram";
import DecisionFlow from "../blog/FormComponent";
import CompilerComparison from "../blog/CompilerComparison";

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
};

interface MdxProps {
	code: string;
}

export function MDXContent({ code }: MdxProps) {
	const Component = useMDXComponent(code);
	return <Component components={components} />;
}
