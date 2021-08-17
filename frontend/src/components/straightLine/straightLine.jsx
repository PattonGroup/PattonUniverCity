import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "./straightLine.css";

const StraightLine = ({}) => {
	const [totalHeight, setTotalHeight] = useState(0);
	const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);
	const [lineHeight, setLineHeight] = useState("0");

	const lineRef = useRef(null);

	// To add state to scroll position
	const useWindowPosition = () => {
		const [sPosition, setSPosition] = useState(0);

		useLayoutEffect(() => {
			function updatePosition() {
				setSPosition(window.pageYOffset);
			}
			window.addEventListener("scroll", updatePosition);
			updatePosition();
			return () => window.removeEventListener("scroll", updatePosition);
		}, []);
		return sPosition;
	};
	const scrollPos = useWindowPosition();

	useEffect(() => {
		setScrollPosition(scrollPos);
	}, [setScrollPosition, scrollPos]);
	//

	//Get total page height
	function useWindowSize() {
		const [size, setSize] = useState(0);

		useLayoutEffect(() => {
			function updateSize() {
				const height =
					document.documentElement.scrollHeight - window.innerHeight;
				setSize(height);
			}
			window.addEventListener("resize", updateSize);
			updateSize();
			return () => window.removeEventListener("resize", updateSize);
		}, []);
		return size;
	}

	const docHeight = useWindowSize();

	useEffect(() => {
		setTotalHeight(docHeight);
	}, [setTotalHeight, docHeight]);
	//

	useEffect(() => {
		const heightDecimal = (scrollPosition / totalHeight) * 98;
		if (lineHeight >= heightDecimal) return;

		setLineHeight(heightDecimal);
	}, [scrollPosition, totalHeight, lineHeight, setLineHeight]);

	return (
		<div
			id="straight-line"
			ref={lineRef}
			style={{ height: `${lineHeight}%` }}
		></div>
	);
};

export default StraightLine;
