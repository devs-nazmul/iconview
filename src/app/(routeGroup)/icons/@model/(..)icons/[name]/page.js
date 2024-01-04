
import Model from "@/components/model";
import css from './page.module.css'
import prisma from "@/libs/prisma";
import ShowIconDetail from "@/components/showIconDetail";
import {Suspense} from "react";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";


export default async function Page({params, searchParams}){
	
	const type = searchParams?.type
	const session = await getServerSession(authOptions)
	
	const name = params?.name
	
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
	
	return(
		<Model>
				<ShowIconDetail type={type} icon={icons} subs={currentPlan}  />
		</Model>
	)
}


