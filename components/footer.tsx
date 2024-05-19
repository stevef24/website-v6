import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import Icons from "./Icons";
import Link from "next/link";

export function SiteFooter() {
	return (
		<footer>
			<div className="mb-6 mt-14 flex flex-col items-center">
				<div className="mb-3 flex space-x-4">
					<Link
						target="_blank"
						rel="noreferrer"
						href="mailto:hello@example.com"
					>
						<span className="sr-only">Mail</span>
						<Mail className="h-6 w-6 hover:text-primary transition-colors text-muted-foreground" />
					</Link>
					<Link
						target="_blank"
						rel="noreferrer"
						href={siteConfig.links.linkedIn}
					>
						<span className="sr-only">Twitter</span>
						<Icons.linkedIn className="h-6 w-6 hover:text-primary transition-colors text-muted-foreground" />
					</Link>
					<Link target="_blank" rel="noreferrer" href={siteConfig.links.github}>
						<span className="sr-only">GitHub</span>
						<Icons.github className="h-6 w-6 hover:text-primary transition-colors text-muted-foreground" />
					</Link>
				</div>
				<div className="mb-2 flex space-x-2 text-sm ">
					<Link
						href={siteConfig.links.personalSite}
						target="_blank"
						className="text-muted-foreground"
					>
						{siteConfig.author}
					</Link>
				</div>
			</div>
		</footer>
	);
}
