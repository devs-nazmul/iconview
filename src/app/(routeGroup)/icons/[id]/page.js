'use client'

import { redirect } from 'next/navigation'

import { useSearchParams } from 'next/navigation'
import css from './page.module.css'
import ShowIconDetail from "@/components/showIconDetail";

export default function Page({params}){
	
	// const queryParams = useSearchParams()
	// const payment_intent = queryParams.get('payment_intent')
	
	// if (!payment_intent) {redirect('/user/billing')}
	
	return(
		<div className="flex items-center justify-center mt-20">
			<ShowIconDetail />
		</div>
	)
}