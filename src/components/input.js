'use client'

import css from './input.module.css'
import {useState} from "react";
import {Arrow_Turn_Down_Fas} from "iconview/svgs/Arrow_Turn_Down_Fas";
import {useFilter} from "@/state/useFilter";
import {usePathname} from "next/navigation";

export default function Input({place, icon_start}){
	
	const [isEmpty, setEmpty] = useState("")
	const { filter, setFilter } = useFilter()
	
	const pathname = usePathname()

	
	return(
		<form action={`/icons?q=${filter.search}`} onSubmit={ e => pathname === "/icons" && e.preventDefault() } className={css.inputFlex}>
			<span className={css.icon_start}>{icon_start}</span>
			<input className={css.input} type="text" value={filter.search} placeholder={place} onChange={e => {setEmpty(e.target.value); setFilter({search: e.target.value})}} />
			<span className={css.icon_end}>{isEmpty && <Arrow_Turn_Down_Fas />}</span>
		</form>
	)
}