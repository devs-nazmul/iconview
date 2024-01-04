"use client"

import css from './iconScroll.module.css'
import icons from '@/assets/initialData'
import {useEffect, useRef, useState} from "react";

export default function IconScroll(){
	
	const [scrollToRight, setScrollToRight] = useState(0)
	const rowRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
	
	
	useEffect(() => {
		const intervalIDs = rowRefs.map((rowRef, index) => {
			return setInterval(() => {
				if (rowRef.current) {
					if (rowRef.current.scrollLeft + rowRef.current.clientWidth === rowRef.current.scrollWidth) {
						rowRef.current.scrollTo({ left: 0, behavior: 'auto' });
					} else {
						rowRef.current.scrollTo({
							left: rowRef.current.scrollLeft + 60,
							behavior: 'smooth',
						});
					}
				}
			}, 500 * (index + 1)); // Add a delay based on the index
		});
		
		return () => {
			intervalIDs.forEach((id) => clearInterval(id));
		};
	}, [scrollToRight]);
	
	return(
		<section className={css.section}>
			<div className={css.sec_pad}>
				<div>
					{[0, 50, 100, 150, 200, 250].map((startIndex, gridIndex) => (
						<ul className={css.iconGrid} key={gridIndex} ref={rowRefs[gridIndex]}>
							{icons.slice(startIndex, startIndex + 50).map((icon, index) => {
								return <li aria-label="icon" key={index} className={css.iconBox}>
									<div dangerouslySetInnerHTML={{__html: Object.values(icon.row)}}/>
								</li>
							})}
						</ul>
					))}
				</div>
			</div>
		</section>
	)
}

