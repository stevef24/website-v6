"use client";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import Icons from "./Icons";
import { siteConfig } from "@/config/site";
import { useRouter } from "next/navigation";

interface MobileNavProps extends LinkProps {
	children: React.ReactNode;
	onOpenChange?: (open: boolean) => void;
	className?: string;
}

const MobileNav = () => {
	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button variant="ghost" className="w-10 px-0 sm:hidden ">
					<Menu className="h-8 w-8" />
					<span className="sr-only">Toggle Theme</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="right" className="flex flex-col">
				<MobileLink href={"/"} className="flex items-center">
					<Icons.logo className="mr-2 h-8 w-8" />
				</MobileLink>
				<div className="flex flex-col gap-3 mt-3">
					<MobileLink
						href="/blog"
						onOpenChange={setOpen}
						className="text-2xl font-semibold  hover:text-primary transition-colors"
					>
						Blog
					</MobileLink>
					<MobileLink
						href="/experiments"
						onOpenChange={setOpen}
						className="text-2xl font-semibold  hover:text-primary transition-colors"
					>
						Experiments
					</MobileLink>
					<Link
						target="_blank"
						rel="noreferrer"
						className="text-2xl font-semibold  hover:text-primary transition-colors"
						href={siteConfig.links.github}
					>
						Github
					</Link>
					<Link
						target="_blank"
						rel="noreferrer"
						href={siteConfig.links.linkedIn}
						className="text-2xl font-semibold  hover:text-primary transition-colors"
					>
						LinkedIn
					</Link>
				</div>
			</SheetContent>
		</Sheet>
	);
};

function MobileLink({
	href,
	children,
	onOpenChange,
	className,
	...props
}: MobileNavProps) {
	const router = useRouter();

	return (
		<Link
			href={href}
			onClick={() => {
				router.push(href.toString());
				onOpenChange?.(false);
			}}
			className={className}
			{...props}
		>
			{children}
		</Link>
	);
}

export default MobileNav;
