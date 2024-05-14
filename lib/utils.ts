import { Post } from "@/.velite";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
	const date = new Date(input);
	return date.toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
}

export function sortPosts(posts: Array<Post>) {
	return posts.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});
}
