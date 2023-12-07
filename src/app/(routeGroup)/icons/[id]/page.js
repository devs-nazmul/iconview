
import { redirect } from 'next/navigation'

import { useSearchParams } from 'next/navigation'
import css from './page.module.css'

// Temporary Import icon
import icons from '@/assets/initialData'

import ShowIconDetail from "@/components/showIconDetail";

export default function Page({params}){
	
	// const queryParams = useSearchParams()
	// const payment_intent = queryParams.get('payment_intent')
	
	// if (!payment_intent) {redirect('/user/billing')}
	console.log(params)
	console.log("From Page ID")
	
	// Temporary Passing Icon
	const [ icon ] = icons?.filter((icon) => icon.usage === params.id )
	
	return(
		<div className="flex items-center justify-center mt-20">
			<ShowIconDetail icon={icon} />
		</div>
	)
}