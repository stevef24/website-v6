"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

export const ModeToggle = React.forwardRef<
	HTMLButtonElement,
	React.ComponentPropsWithoutRef<typeof Button>
>((props, ref) => {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			ref={ref}
			variant="ghost"
			type="button"
			className="px-4 size-8"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			{...props}
			aria-label="Toggle theme"
		>
			<MoonIcon className="hidden size-8 text-neutral-800 dark:block dark:text-neutral-200" />
			<SunIcon className="size-8 text-neutral-800 dark:hidden dark:text-neutral-200" />
		</Button>
	);
});

ModeToggle.displayName = "ModeToggle";
