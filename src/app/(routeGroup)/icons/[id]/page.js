
import { redirect } from 'next/navigation'

import css from './page.module.css'

import ShowIconDetail from "@/components/showIconDetail";

import prisma from "@/libs/prisma";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export default async function Page({params, searchParams}){
	
	// console.log(params);
	
	const { page, vendor } = searchParams
	const session = await getServerSession(authOptions)
	
	// Search By Name, Vendor, Pages
	
	const icon = await prisma.icon.findFirst({
		where: {
			AND: [
				{ name: params.id },
				{ vendor: vendor }
			]
		},
		include: {
			styles: true
		}
	})
	
	const { email } = session?.user || { email: null };
	
	let currentPlan = null
	
	if (email){
		const isSubscriber = await prisma.user.findUnique({
			where: {email: email}, include: {subscriber: true}
		})
		
		currentPlan = isSubscriber?.subscriber
	}
	
	// console.log(icon);
	
	return(
		<div className={css.grid}>
			<ShowIconDetail type={searchParams?.type} icon={icon} subs={currentPlan} />
		</div>
	)
}