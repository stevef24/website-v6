import React from "react";

const Pre = ({ children }: { children: React.ReactNode }) => {
	return (
		<pre className="bg-orange-900 p-4 rounded-lg overflow-x-auto">
			{children}
		</pre>
	);
};

export default Pre;
