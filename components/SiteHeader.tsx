import { siteConfig } from "@/app/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Icons from "./Icons";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

function SiteHeader() {
	return (
		<header className="sticky top-0 w-full border-b border-border  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 max-w-screen-2xl items-center">
				<MainNav />
				<div className="flex flex-1 items-center justify-end space-x-2">
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
		</header>
	);
}

export default SiteHeader;
