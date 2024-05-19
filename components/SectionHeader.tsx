import { cn } from "@/lib/utils";

interface SectionHeaderProps {
	title: string;
	direction: "row" | "row-reverse";
}

const SectionHeader = ({ title, direction }: SectionHeaderProps) => {
	return (
		<div
			className={cn(
				"flex mb-10",
				direction === "row" ? "flex-row" : "flex-row-reverse"
			)}
		>
			<div>
				<h2 className="text-3xl md:text-5xl font-black text-end">
					{title}
					<span className="text-primary">.</span>
				</h2>
			</div>
			<div className="mx-4 my-auto w-full h-[1px] bg-orange-500/20"></div>
		</div>
	);
};

export default SectionHeader;
