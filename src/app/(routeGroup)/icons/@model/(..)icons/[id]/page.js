"use client"

import Model from "@/components/model";
import css from './page.module.css'
import Button from "@/components/button";
import {Xmark_Far} from "iconview/svgs/Xmark_Far";
import ShowIconDetail from "@/components/showIconDetail";
import {useRouter} from "next/navigation";
import {useRef} from "react";

export default function Page(){
	
	const router = useRouter()
	
	
	return(
		<Model >
			<div  className={css.close}>
				<Button onClick={(e) => { e.stopPropagation(); router.back()}} type="second" mini border> <Xmark_Far/></Button>
			</div>
			
			<ShowIconDetail />
			
		</Model>
	)
}


