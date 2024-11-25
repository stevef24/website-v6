const Codeblock = ({ children }: { children: React.ReactNode }) => {
	return (
		<code className="border bg-orange-500/5 border-orange-500/50 px-2 rounded-sm text-sm  ">
			{children}
		</code>
	);
};

export default Codeblock;
