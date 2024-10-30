"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { DATA } from "@/app/data/resume";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { motion } from "framer-motion";
import { useState } from "react";

// Animation variants
const slideInAnimation = {
	initial: { opacity: 0, x: -20 },
	animate: { opacity: 1, x: 0 },
};

// Navigation Link Component
interface NavLinkProps {
	href: string;
	icon: React.ElementType;
	label: string;
	delay: number;
	onClose: () => void;
}

const NavLink = ({ href, icon: Icon, label, delay, onClose }: NavLinkProps) => (
	<motion.div
		variants={slideInAnimation}
		initial="initial"
		animate="animate"
		transition={{
			duration: 0.3,
			delay,
			ease: "easeOut",
		}}
	>
		<Link
			href={href}
			className="flex items-center gap-3 text-base font-medium transition-colors duration-100"
			onClick={onClose}
		>
			<Icon className="h-5 w-5" />
			{label}
		</Link>
	</motion.div>
);

// Social Link Component
interface SocialLinkProps {
	name: string;
	url: string;
	icon: React.ElementType;
	delay: number;
	onClose: () => void;
}

const SocialLink = ({
	name,
	url,
	icon: Icon,
	delay,
	onClose,
}: SocialLinkProps) => (
	<motion.div
		variants={slideInAnimation}
		initial="initial"
		animate="animate"
		transition={{
			duration: 0.3,
			delay,
			ease: "easeOut",
		}}
	>
		<Link
			href={url}
			className="flex items-center gap-3 text-base font-medium transition-colors duration-100"
			onClick={onClose}
		>
			<Icon className="h-5 w-5" />
			{name}
		</Link>
	</motion.div>
);

// Theme Toggle Component
const ThemeToggleWithAnimation = ({ delay }: { delay: number }) => (
	<motion.div
		className="flex items-center gap-3 mt-auto"
		variants={slideInAnimation}
		initial="initial"
		animate="animate"
		transition={{
			duration: 0.3,
			delay,
			ease: "easeOut",
		}}
	>
		<ModeToggle />
		<span className="text-base font-medium transition-colors duration-100">
			Theme
		</span>
	</motion.div>
);

export function MobileNav() {
	const [open, setOpen] = useState(false);
	const navLinks = DATA.navbar.filter(
		(item) => item.label.toLowerCase() !== "projects"
	);
	const socialLinks = Object.entries(DATA.contact.social)
		.filter(([_, social]) => social.navbar)
		.map(([key, social]) => ({
			key,
			...social,
		}));

	const handleClose = () => setOpen(false);

	return (
		<div className="w-full flex items-center justify-between">
			<div className="font-semibold text-xl transition-colors duration-100">
				Logo
			</div>
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger asChild>
					<Button
						variant="ghost"
						size="icon"
						className="md:hidden transition-colors duration-300"
					>
						<Menu className="h-6 w-6" />
						<span className="sr-only">Toggle menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="right" className="flex flex-col backdrop-blur-sm">
					<nav className="flex flex-col space-y-4">
						{navLinks.map((item, index) => (
							<NavLink
								key={item.href}
								href={item.href}
								icon={item.icon}
								label={item.label}
								delay={(index + 1) * 0.1}
								onClose={handleClose}
							/>
						))}

						{/* Social Links */}
						{socialLinks.map((social, index) => (
							<SocialLink
								key={social.key}
								name={social.name}
								url={social.url}
								icon={social.icon}
								delay={(navLinks.length + index) * 0.15}
								onClose={handleClose}
							/>
						))}
					</nav>

					{/* Theme Toggle */}
					<ThemeToggleWithAnimation
						delay={(navLinks.length + socialLinks.length) * 0.1}
					/>
				</SheetContent>
			</Sheet>
		</div>
	);
}
