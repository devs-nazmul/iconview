'use client'

import css from './showIcon.module.css'
import {useState} from "react";
import Link from "next/link";

export default function ShowIcon({icons}){
	
	const [icon, setIcons] = useState(icons)
	
	return(
		<ul className={css.icon_list}>
			{icons.map((icon, index) => {
				
				// return <li key={index} className={css.icon} >
				// 	<div role="img" dangerouslySetInnerHTML={{ __html: Object.values(icon.row) }} />
				// </li>
				
				// Change Usages to icon Link
				return <Link key={index} className={css.icon}  href={`/icons/${icon.usage}`}>
					<div role="img" dangerouslySetInnerHTML={{ __html: Object.values(icon.row) }} />
				</Link>
			} )}
		</ul>
	)
}