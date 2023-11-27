'use client'

import css from './showIcon.module.css'
import {useState} from "react";

export default function ShowIcon({icons}){
	
	const [icon, setIcons] = useState(icons)
	
	return(
		<ul className={css.icon_list}>
			{icons.map((icon, index) => {
				
				return <li key={index} className={css.icon}>
					<div role="img" dangerouslySetInnerHTML={{ __html: Object.values(icon.row) }} />
				</li>
			} )}
		</ul>
	)
}