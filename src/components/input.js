'use client'

import css from './input.module.css'
import {useState} from "react";
import {Arrow_Turn_Down_Fas} from "iconview/svgs/Arrow_Turn_Down_Fas";
import {useFilter} from "@/state/useFilter";
import {usePathname} from "next/navigation";
import cls from "@/libs/cls";

export default function Input({place, icon_start, className}){
	
	const [isEmpty, setEmpty] = useState("")
	const { filter, setFilter } = useFilter()
	console.log(filter.search);
	
	const pathname = usePathname()
	
	
	return(
		<form action={"/icons"} className={cls(css.inputFlex, className)} onSubmit={ e => pathname === "/icons" && e.preventDefault() }>
			<span className={css.icon_start}>{icon_start}</span>
			<input className={css.input} name="q" type="text" value={filter.search} placeholder={place} onChange={e => {setEmpty(e.target.value); setFilter({search: e.target.value})}} />
			<span className={css.icon_end}>{isEmpty && <Arrow_Turn_Down_Fas />}</span>
		</form>
	)
}

