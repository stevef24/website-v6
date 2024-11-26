import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/ui/navbar";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const fontSans = FontSans({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-sans",
});

const outfit = Outfit({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-outfit",
});

export const metadata: Metadata = {
	title: "Stav Fernandes - Fullstack Software Engineer",
	description:
		"Experienced Fullstack Software Engineer specializing in React, TypeScript, and modern web technologies. View my portfolio, projects, and technical expertise.",
	keywords: [
		"Stav Fernandes",
		"Software Engineer",
		"Fullstack Developer",
		"React Developer",
		"TypeScript",
		"Web Development",
		"Portfolio",
	],
	authors: [{ name: "Stav Fernandes" }],
	creator: "Stav Fernandes",
	publisher: "Stav Fernandes",
	robots: "index, follow",
	openGraph: {
		type: "website",
		locale: "en_GB",
		url: "https://stavfernandes.dev",
		title: "Stav Fernandes - Fullstack Software Engineer",
		description:
			"Experienced Fullstack Software Engineer specialising in React, TypeScript, and modern web technologies.",
		siteName: "Stav Fernandes Portfolio",
		images: [
			{
				url: "/favicon.ico",
				width: 1200,
				height: 630,
				alt: "Stav Fernandes - Portfolio",
			},
		],
	},
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
	},
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning className={outfit.variable}>
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased transition-colors duration-100",
					fontSans.variable,
					outfit.className
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<main>
						<TooltipProvider delayDuration={0}>
							{children}
							<Navbar />
						</TooltipProvider>
					</main>
				</ThemeProvider>
				<Analytics />
			</body>
		</html>
	);
}
