'use client'

import { redirect } from 'next/navigation'

import { useSearchParams } from 'next/navigation'
import css from './page.module.css'
import {Check_Double_Fad} from "iconview/svgs/Check_Double_Fad";
import Input from "@/components/input";
import {Magnifying_Glass_Fas} from "iconview/svgs/Magnifying_Glass_Fas";

export default function Page({params}){
	
	const queryParams = useSearchParams()
	
	
	const payment_intent = queryParams.get('payment_intent')
	
	if (!payment_intent) {redirect('/user/billing')}
	
	return(
		<div className={css.container}>
			<div className={css.box}>
				
				<Check_Double_Fad size="30" />
				<h1>Congratulations</h1>
				<h4>Payment Successful</h4>
				<Input icon_start={<Magnifying_Glass_Fas/>} place="Searcg" />
			</div>
		</div>
	)
}