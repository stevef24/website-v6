import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
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
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning className="scroll-pt-[3.5rem]">
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<ThemeProvider attribute="class" defaultTheme="light">
					<TooltipProvider delayDuration={0}>
						{children}
						<Navbar />
					</TooltipProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
