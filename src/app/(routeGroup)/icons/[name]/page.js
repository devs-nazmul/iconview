
import { redirect } from 'next/navigation'

import css from './page.module.css'

import ShowIconDetail from "@/components/showIconDetail";

import prisma from "@/libs/prisma";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export default async function Page({params, searchParams}){
	
	// console.log(params);
	
	const name = params?.name
	const type = searchParams?.type
	
	const session = await getServerSession(authOptions)
	
	const icons = await prisma.icon.findFirst({
		where: { name: name },
		include: {
			styles: true
		}
	})
	
	
	const email = session?.user?.email
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
			<ShowIconDetail type={type} icon={icons} subs={currentPlan} />
		</div>
	)
}