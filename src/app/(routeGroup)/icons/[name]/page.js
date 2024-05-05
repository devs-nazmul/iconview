
import { redirect } from 'next/navigation'

import css from './page.module.css'

import ShowIconDetail from "@/components/showIconDetail";

import prisma from "@/libs/prisma";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export async function generateStaticParams() {
	const iconsLists = await fetch('https://www.iconview.org/api/seo').then((res) => res.json())
	return iconsLists.map((icon) => ({
		name: icon.name
	}))
}

export async function generateMetadata({ params }) {
	const name = params?.name
	return {
		title: `Download ${name.replace(/-/g, ' ')} icon Free - 100k+ icons | www.iconview.org`,
		description: `Open Source icon library, Download ${name.replace(/-/g, ' ')} icon and 100k+ icon for React & Nextjs. `,
	}
}

export default async function Page({params, searchParams}){
	
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
	
	return(
		<div className={css.grid}>
			<ShowIconDetail type={type} icon={icons} subs={currentPlan} />
		</div>
	)
}


