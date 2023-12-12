"use client";

import css from "./showIcon.module.css";
import {Suspense, useEffect, useState} from "react";
import Link from "next/link";
import {useFilter} from "@/state/useFilter";
import { cssRootModify } from 'css-root-modify'
import LoadingX from "@/app/(routeGroup)/icons/loadingX";


export default function ShowIcon({initIcons}){
	
	const [icons, setIcons] = useState(initIcons)
	const [loading, setLoading] = useState(false)
	
	const { filter, setFilter } = useFilter()
	
	useEffect( () => {
		const filterType = Object.keys(filter.type).filter((type) => filter.type[type]).join("-")
		const filterVendor = Object.keys(filter.vendor).filter((vendor) => filter.vendor[vendor]).join("-")
		let timeoutId;
		
		// 	Let's Fetch Search Result From The Backend
		const fetchData = async () => {
			
			setLoading(true)
			
			try {
				const req = await fetch(`/api/icons?q=${filter.search}&type=${filterType}&vendor=${filterVendor}&p=${filter.page}`)
				
				if (!req.ok){
					new Error("Request failed with status: " + req.status);
				}
				
				const icons = await req.json()
				
				setIcons(icons)
				setLoading(false)
				
			} catch (e) {
				console.error("Error fetching data:", e);
			}
		}
		
		
		const delayedFetch = () => {
			clearTimeout(timeoutId); // Clear any existing timeout

			timeoutId = setTimeout(() => {
				fetchData(); // Execute the actual fetch after the delay
			}, 1000);
		};

		if (filter.search.length >= 2) {
			delayedFetch(); // Trigger the delayed fetch when search text is at least 3 characters
		}

		return () => {
			clearTimeout(timeoutId); // Clear the timeout when the component unmounts or when filter changes
		};

		
	}, [filter])
	
	// useEffect(() => {
	//
	// 	function handleScroll(){
	//
	// 		const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
	//
	// 		if (scrolledToBottom) {
	// 			console.log("Page Increased");
	// 			setFilter({
	// 				...filter, page : filter.page + 1
	// 			})
	//
	// 			console.log(filter);
	// 		}
	// 	}
	//
	// 	window.addEventListener("scroll", handleScroll);
	//
	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll);
	// 	};
	//
	// }, [filter]);
	

	
	
	return(
		<ul>
			{loading? <LoadingX/> : <li className={css.icon_list}>
				<Suspense fallback={ <LoadingX /> }>
					{icons.map((icon, index) => {
						return icon.styles.map((style) => {
							return <Link
								key={style.id}
								className={css.icon} href={`/icons/${icon.name}?type=${style.type}&vendor=${icon.vendor}`}
								dangerouslySetInnerHTML={{__html: style.svg}} >
							</Link>
						})
					})}
				</Suspense>
			</li> }
		</ul>
	)
}