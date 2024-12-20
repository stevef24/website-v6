import { DATA } from "@/app/data/resume";

import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Dock, DockIcon } from "./dock";
import { ModeToggle } from "./mode-toggle";
import { MobileNav } from "./mobile-nav";

export default function Navbar() {
	return (
		<>
			<div className="fixed top-0 left-0 right-0 z-50 p-4 bg-background/50 backdrop-blur-xl supports-[backdrop-filter]:bg-background/50 md:hidden">
				<MobileNav />
			</div>
			<div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
				<div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
				<Dock className="hidden md:flex z-50 pointer-events-auto relative mx-auto  min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
					{DATA.navbar.map((item) => (
						<DockIcon key={item.href}>
							<Tooltip>
								<TooltipTrigger asChild>
									<Link
										href={item.href}
										className={cn(
											buttonVariants({ variant: "ghost", size: "icon" }),
											"size-12"
										)}
										aria-label={item.label}
									>
										<item.icon className="size-4" />
									</Link>
								</TooltipTrigger>
								<TooltipContent>
									<p>{item.label}</p>
								</TooltipContent>
							</Tooltip>
						</DockIcon>
					))}
					<Separator orientation="vertical" className="h-full" />
					{Object.entries(DATA.contact.social)
						.filter(([_, social]) => social.navbar)
						.map(([name, social]) => (
							<DockIcon key={name}>
								<Tooltip>
									<TooltipTrigger asChild>
										<Link
											target="_blank"
											href={social.url}
											className={cn(
												buttonVariants({ variant: "ghost", size: "icon" }),
												"size-12"
											)}
											aria-label={`Visit my ${name} profile`}
										>
											<social.icon className="size-4" />
										</Link>
									</TooltipTrigger>
									<TooltipContent>
										<p>{name}</p>
									</TooltipContent>
								</Tooltip>
							</DockIcon>
						))}
					<Separator orientation="vertical" className="h-full py-2" />
					<DockIcon>
						<Tooltip>
							<TooltipTrigger asChild>
								<div className="size-12 flex items-center justify-center">
									<ModeToggle className="size-full" />
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<p>Theme</p>
							</TooltipContent>
						</Tooltip>
					</DockIcon>
				</Dock>
			</div>
		</>
	);
}
