
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
			styles: true
		}
	})
	
	// console.log(icon);
	
	return(
		<div className={css.grid}>
			<ShowIconDetail type={searchParams?.type} icon={icon} />
		</div>
	)
}