"use client";

import { siteConfig } from "@/app/config/site";
import Link from "next/link";
import Icons from "./Icons";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const MainNav = () => {
	const pathName = usePathname();
	return (
		<nav className="flex items-center space-x-4 lg:space-x-6 text-center">
			<Link
				href={siteConfig.links.personalSite}
				rel="noreferrer"
				className="mr-6 flex items-center space-x-2"
			>
				<Icons.logo className="w-8 h-8" />
				<span className="font-bold text-lg">{siteConfig.name}</span>
			</Link>
			<Link
				href="blog"
				className={cn(
					"text-sm font-md transition-colors hover:text-primary",
					pathName == "/blog" ? "text-forground" : "text-forground/60"
				)}
			>
				Blog
			</Link>
			<Link
				href="about"
				className={cn(
					"text-sm font-md transition-colors hover:text-primary",
					pathName == "/about" ? "text-forground" : "text-forground/60"
				)}
			>
				About
			</Link>
		</nav>
	);
};

export default MainNav;
