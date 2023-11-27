'use client'

import css from './input.module.css'
import {useState} from "react";
import {Arrow_Turn_Down_Fas} from "iconview/svgs/Arrow_Turn_Down_Fas";

export default function Input({place, icon_start}){
	
	const [isEmpty, setEmpty] = useState("")
	
	return(
		<form action="" className={css.inputFlex}>
			<span className={css.icon_start}>{icon_start}</span>
			<input className={css.input} type="text" placeholder={place} onChange={e => setEmpty(e.target.value)} />
			<span className={css.icon_end}>{isEmpty && <Arrow_Turn_Down_Fas />}</span>
		</form>
	)
}