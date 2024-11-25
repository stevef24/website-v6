import Codeblock from "@/components/Codeblock";
import Sidenote from "@/components/Sidenote";

import React from "react";

interface TestProps {
	type: "warning" | "tip" | "success";
	image: string;
	children: React.ReactNode;
}

const page = ({ type, image, children }: TestProps) => {
	return (
		<div className="m-auto max-w-[768px] h-screen flex items-center justify-center ">
			<Sidenote type={"tip"}>Lorem ipsum dolor sit amet</Sidenote>
			<Codeblock>hello</Codeblock>
		</div>
	);
};

export default page;
