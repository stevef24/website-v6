"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Icons from "./Icons";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

function SiteHeader() {
	const [hidden, setHidden] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious() as number;

		if (latest > previous && latest > 100) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});
	return (
		<motion.header
			variants={{
				hidden: { y: "-100%" },
				visible: { y: 0 },
			}}
			animate={hidden ? "hidden" : "visible"}
			transition={{ duration: 0.35, ease: "easeInOut" }}
			className="sticky z-20 top-0  backdrop-blur supports-[backdrop-filter]:bg-background/40"
		>
			<div className="container flex h-24 max-w-screen-2xl justify-between items-center">
				<Link
					href={"/"}
					rel="noreferrer"
					className="mr-6 flex items-center space-x-2"
				>
					<Icons.logo className="w-10 h-10" />
				</Link>
				<MainNav />
				<div className="flex  items-center justify-end space-x-2 ">
					<nav className="flex items-center">
						<Link
							href={siteConfig.links.github}
							target="_blank"
							rel="no-referrer"
						>
							<div
								className={cn(
									buttonVariants({ variant: "ghost" }),
									"w-10 px-0 hidden sm:inline-flex"
								)}
							>
								<Icons.github className="w-6 h-6" />
								<span className="sr-only">Github</span>
							</div>
						</Link>
						<Link
							href={siteConfig.links.linkedIn}
							target="_blank"
							rel="no-referrer"
						>
							<div
								className={cn(
									buttonVariants({ variant: "ghost" }),
									"w-10 px-0 hidden sm:inline-flex"
								)}
							>
								<Icons.linkedIn className="w-6 h-6" />
								<span className="sr-only">linkedIn</span>
							</div>
						</Link>
						<MobileNav />
					</nav>
				</div>
			</div>
		</motion.header>
	);
}

export default SiteHeader;
