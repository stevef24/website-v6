"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const MainNav = () => {
	const pathName = usePathname();
	return (
		<nav className="flex items-center space-x-4 lg:space-x-6 text-center">
			<div className="flex gap-2">
				<Link
					href="/"
					className={cn(
						"text-md font-md transition-colors hover:text-primary hidden sm:inline-block",
						pathName == "/"
							? "text-primary   font-semibold "
							: "text-forground/60"
					)}
				>
					Home
				</Link>
				<Link
					href="/blog"
					className={cn(
						"text-md font-md transition-colors hover:text-primary hidden sm:inline-block",
						pathName == "/blog"
							? "text-primary   font-semibold"
							: "text-forground/60"
					)}
				>
					Blog
				</Link>
				<Link
					href="/experiments"
					className={cn(
						"text-md font-md transition-colors hover:text-primary hidden sm:inline-block",
						pathName == "/experiments"
							? "text-primary  font-semibold"
							: "text-forground/60"
					)}
				>
					Experiments
				</Link>
			</div>
		</nav>
	);
};

export default MainNav;
