
import Model from "@/components/model";
import css from './page.module.css'
import prisma from "@/libs/prisma";
import ShowIconDetail from "@/components/showIconDetail";
import {Suspense} from "react";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";


export default async function Page({params, searchParams}){
	
	const { vendor } = searchParams
	const session = await getServerSession(authOptions)
	
	
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
	
	const { email } = session?.user;
	
	const isSubscriber = await prisma.user.findUnique({
		where: {email: email}, include: {subscriber: true}
	})
	
	const currentPlan = isSubscriber?.subscriber
	
	
	return(
		<Model>
				<ShowIconDetail type={searchParams?.type} icon={icon} subs={currentPlan}  />
		</Model>
	)
}


