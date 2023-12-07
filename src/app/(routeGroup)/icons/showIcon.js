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
		// 	Let's Fetch Search Result From The Backend
		const fetchData = async () => {
			const req = await fetch(`/api/icons?q=${filter.search}&type=${filter.type}&vendor=${filter.vendor}&p=${filter.page}`)
			if (!req.ok){ console.log("Request Failed")}
			const icons = await req.json()
			setIcons(icons)
		}
		fetchData().then( err => {
			console.log(err);
		})
		
	}, [filter.search])
	
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