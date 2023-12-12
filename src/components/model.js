"use client"

import {useRouter} from "next/navigation";
import css from './model.module.css'
import Button from "@/components/button";
import {Xmark_Far} from "iconview/svgs/Xmark_Far";

export default function Model({children}) {
	
	const router = useRouter()
	
	return(
		<div className={css.model}>
			
			<div className={css.close}>
				<Button onClick={(e) => { e.stopPropagation(); router.back() }} type="second" mini border> <Xmark_Far/></Button>
			</div>
			
			<div className={css.grid}>
				{children}
			</div>
			
		</div>
	)
}



