"use client";

import css from "./showIcon.module.css";
import {Suspense, useEffect, useState} from "react";
import Link from "next/link";
import {useFilter} from "@/state/useFilter";
import { cssRootModify } from 'css-root-modify'


export default function ShowIcon({initIcons}){
	
	const [icons, setIcons] = useState(initIcons)
	
	const { filter, setFilter } = useFilter()
	
	useEffect( () => {
		const filterType = Object.keys(filter.type).filter((type) => filter.type[type]).join("-")
		const filterVendor = Object.keys(filter.vendor).filter((vendor) => filter.vendor[vendor]).join("-")
		
		// 	Let's Fetch Search Result From The Backend
		const fetchData = async () => {
			
			try {
				const req = await fetch(`/api/icons?q=${filter.search}&type=${filterType}&vendor=${filterVendor}&p=${filter.page}`)
				
				if (!req.ok){
					new Error("Request failed with status: " + req.status);
				}
				
				const icons = await req.json()
				
				setIcons(icons)
				
			} catch (e) {
				console.error("Error fetching data:", e);
			}
		}
		
		
		fetchData().then(r => {
		
		})
		
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
	
	useEffect(() => {
		cssRootModify({
			primary_icon: filter.color,
		})
	}, [filter.color]);
	
	
	return(
		<ul className={css.icon_list}>
			{icons.map((icon, index) => {
				return icon.styles.map((style) => {
					return <Link
						key={style.id}
						className={css.icon} href={`/icons/${icon.name}?type=${style.type}&vendor=${icon.vendor}`}
						dangerouslySetInnerHTML={{__html: style.svg}} >
					</Link>
				})
				
			})}
		</ul>
	)
}