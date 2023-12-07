
import { redirect } from 'next/navigation'

import css from './page.module.css'

import ShowIconDetail from "@/components/showIconDetail";

import prisma from "@/libs/prisma";

export default async function Page({params, searchParams}){
	
	// console.log(params);
	
	const { page, vendor } = searchParams
	
	// Search By Name, Vendor, Pages
	
	const icon = await prisma.icon.findFirst({
		where: {
			AND: [
				{ name: params.id },
				{ vendor: vendor }
			]
		},
		include: {
			tags: true,
			styles: true
		}
	})
	
	// console.log(icon);
	
	return(
		<div className="flex items-center justify-center mt-20">
			<ShowIconDetail type={searchParams?.type} icon={icon} />
		</div>
	)
}