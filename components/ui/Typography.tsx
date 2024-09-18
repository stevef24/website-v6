import React, { ElementType } from "react";

export enum Variant {
	h1 = "h1",
	h2 = "h2",
	h3 = "h3",
	h4 = "h4",
	h5 = "h5",
	body = "body",
	"body-small" = "body-small",
	small = "small",
}

interface Props {
	variant: Variant;
	children: React.ReactNode;
	className?: string;
	as?: ElementType;
}

const tags: Record<Variant, ElementType> = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	body: "p",
	"body-small": "p",
	small: "span",
};

const sizes: Record<Variant, string> = {
	h1: "text-7xl font-bold max-sm:text-4xl",
	h2: "text-6xl font-bold max-sm:text-3xl",
	h3: "text-3xl font-bold max-sm:text-2xl",
	h4: "text-2xl font-bold max-sm:text-1xl",
	h5: "text-xl font-bold max-sm:text-lg",
	body: "text-lg max-sm:text-md",
	"body-small": "text-md max-sm:text-sm",
	small: "text-sm max-sm:text-xs",
};

export const Typography = ({ variant, children, className, as }: Props) => {
	const sizeClasses = sizes[variant];
	const Tag = as || tags[variant];

	return <Tag className={`${sizeClasses} ${className}`}>{children}</Tag>;
};
