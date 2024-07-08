"use client";

import { useRef } from "react";
export const useGetPointerMovement = (useDistanceFromCenter?: boolean) => {
	const boundingRef = useRef<DOMRect | null>(null);

	const props = {
		onMouseLeave: () => (boundingRef.current = null),
		onMouseEnter: (ev: React.MouseEvent<HTMLDivElement>) => {
			boundingRef.current = ev.currentTarget.getBoundingClientRect();
		},
		onMouseMove: (ev: React.MouseEvent<HTMLDivElement>) => {
			if (!boundingRef.current) return;
			const x = ev.clientX - boundingRef.current.left;
			const y = ev.clientY - boundingRef.current.top;
			let xPercentage = x / boundingRef.current.width;
			let yPercentage = y / boundingRef.current.height;

			if (useDistanceFromCenter) {
				xPercentage = (xPercentage - 0.5) * 2;
				yPercentage = (yPercentage - 0.5) * 2;
			}

			ev.currentTarget.style.setProperty("--x", `${xPercentage}`);
			ev.currentTarget.style.setProperty("--y", `${yPercentage}`);
		},
	};

	return props;
};
