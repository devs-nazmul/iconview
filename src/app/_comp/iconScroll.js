"use client"

import css from './iconScroll.module.css'
import icons from '@/assets/initialData'
import {useEffect, useRef, useState} from "react";

export default function IconScroll(){
	
	const [scrollToRight, setScrollToRight] = useState(0)
	const lineOne = useRef(null);
	
	
	// useEffect(() => {
	// 	const intervalID = setInterval(() => {
	// 		console.log(scrollToRight)
	//
	// 		if (setScrollToRight => 1200){
	// 			setScrollToRight(0)
	// 		} else {
	// 			setScrollToRight( scrollToRight + 50);
	// 		}
	// 		lineOne.current.scrollLeft += 60
	// 	}, 1000);
	//
	// 	return () => {
	// 		clearInterval(intervalID);
	// 	};
	// }, [scrollToRight]);
	
	return(
		<section className={css.section}>
			<div className={css.sec_pad}>
				<ul>
					<div className={css.iconGrid} ref={lineOne} >
						{icons.slice(0, 50).map((icon, index) => {
							return <li key={index} className={css.iconBox}>
								<div role="img" dangerouslySetInnerHTML={{ __html: Object.values(icon.row) }} />
							</li>
						} )}
					</div>
					
					<div className={css.iconGrid}>
						{icons.slice(50, 100).map((icon, index) => {
							return <li key={index} className={css.iconBox}>
								<div role="img" dangerouslySetInnerHTML={{ __html: Object.values(icon.row) }} />
							</li>
						} )}
					</div>
					<div className={css.iconGrid}>
						{icons.slice(100, 150).map((icon, index) => {
							return <li key={index} className={css.iconBox}>
								<div role="img" dangerouslySetInnerHTML={{ __html: Object.values(icon.row) }} />
							</li>
						} )}
					</div>
					<div className={css.iconGrid}>
						{icons.slice(150, 200).map((icon, index) => {
							return <li key={index} className={css.iconBox}>
								<div role="img" dangerouslySetInnerHTML={{ __html: Object.values(icon.row) }} />
							</li>
						} )}
					</div>
					<div className={css.iconGrid}>
						{icons.slice(200, 250).map((icon, index) => {
							return <li key={index} className={css.iconBox}>
								<div role="img" dangerouslySetInnerHTML={{ __html: Object.values(icon.row) }} />
							</li>
						} )}
					</div>
					<div className={css.iconGrid}>
						{icons.slice(250, 300).map((icon, index) => {
							return <li key={index} className={css.iconBox}>
								<div role="img" dangerouslySetInnerHTML={{ __html: Object.values(icon.row) }} />
							</li>
						} )}
					</div>
					
					<div className={css.iconGrid}>
						{icons.slice(260, 350).map((icon, index) => {
							return <li key={index} className={css.iconBox}>
								<div role="img" dangerouslySetInnerHTML={{ __html: Object.values(icon.row) }} />
							</li>
						} )}
					</div>
					
				</ul>
			</div>
		</section>
	)
}