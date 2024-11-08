import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/ui/navbar";

const fontSans = FontSans({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Stav Fernandes - Frontend Developer",
	description: "Personal portfolio website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased transition-colors duration-100",
					fontSans.variable
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<TooltipProvider delayDuration={0}>
						{children}
						<Navbar />
					</TooltipProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
