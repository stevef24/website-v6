import { useEffect, useState } from "react";

function useCursorPosition() {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const updateCursor = ({ clientX, clientY }: MouseEvent) => {
			setPosition({ x: clientX, y: clientY });
		};

		document.addEventListener("pointermove", updateCursor);

		return () => {
			document.removeEventListener("pointermove", updateCursor);
		};
	}, []);

	return position;
}

export default useCursorPosition;
