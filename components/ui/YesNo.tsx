import { CheckIcon } from "lucide-react";
import { XIcon } from "lucide-react";
import React from "react";

type YesNoProps = {
	type: "yes" | "no";
	children: React.ReactNode;
};

const YesNo = ({ type, children }: YesNoProps) => {
	const className =
		type === "yes"
			? "text-black dark:text-white/90 border rounded-lg px-4 py-2 border-green-500 bg-green-500/10 my-4"
			: "text-black dark:text-white/90  border rounded-lg px-4 py-2 border-red-500 bg-red-500/10 my-4";
	return (
		<div className={className}>
			<div className=" mt-2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center   ">
				{type === "yes" ? (
					<CheckIcon className="text-green-500" />
				) : (
					<XIcon className="text-red-500" />
				)}
			</div>
			{children}
		</div>
	);
};

export default YesNo;
