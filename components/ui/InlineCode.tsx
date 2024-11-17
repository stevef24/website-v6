interface InlineCodeProps {
	children: React.ReactNode;
	isInPre?: boolean;
}

export function InlineCode({ children, isInPre = false }: InlineCodeProps) {
	if (isInPre) {
		return <code className="font-mono text-sm">{children}</code>;
	}

	return (
		<code className="border border-orange-500 bg-orange-500/10 px-1 py-0.5 rounded font-mono text-sm">
			{children}
		</code>
	);
}
