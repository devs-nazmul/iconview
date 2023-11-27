"use client"

import css from './button.module.css'
import cls from "@/libs/cls";


export default function Button({icon_start, mini, icon_end, children, type, border, className, onClick, disabled, ...rest}){
	
	const styles = {
		primary: css.btn_primary,
		second: css.btn_second,
		outline: css.btn_outline,
		link: css.btn_link,
		border: border && css.btn_border,
		mini: mini && css.btn_mini,
		
		gradient_four: css.btn_gradient_four,
		gradient_five: css.btn_gradient_five,
	}
	
	
	return(
		<button disabled={disabled} onClick={onClick} className={cls(css.btn, styles[type], styles["border"], styles["mini"] , className)}>
			{icon_start} {children} {icon_end}
		</button>
	)
}