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
				<Button variant="outline" className="w-10 px-0 sm:hidden">
					<Menu className="h-5 w-5" />
					<span className="sr-only">Toggle Theme</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="right">
				<MobileLink href={"/"} className="flex items-center">
					<Icons.logo className="mr-2 h-6 w-6" />
					<span className="font-bold">{siteConfig.name}</span>
				</MobileLink>
				<div className="flex flex-col gap-3 mt-3">
					<MobileLink href="/blog" onOpenChange={setOpen}>
						Blog
					</MobileLink>
					<MobileLink href="/about" onOpenChange={setOpen}>
						About
					</MobileLink>

					<Link target="_blank" rel="noreferrer" href={siteConfig.links.github}>
						Github
					</Link>
					<Link
						target="_blank"
						rel="noreferrer"
						href={siteConfig.links.linkedIn}
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
