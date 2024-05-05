
import css from './page.module.css'
import ShowIcon from "@/app/(routeGroup)/icons/showIcon";
import prisma from "@/libs/prisma";

export default async function Page({searchParams}){
	
	// This is Server Components, so Fetch from Server
	const query = searchParams?.q
	
	let iconResult = {}
	
	
	if (query){
		iconResult = await prisma.icon.findMany({
			take: 200,
			where: {
				OR: [
					{name : { contains: query, mode: "insensitive" }},
					{tags: {has: query}}
				]
			},
			include: {
				styles: true
			}
		})
		
	} else {
		iconResult = await prisma.icon.findMany({
			take: 200,
			where: { styles: { some: { type: { equals: "brands" }}}},
			include: {
				styles: true
			}
		})
		
	}
	
	
	return(
		<div className={css.icon_cont}>
			<ShowIcon query={query} initIcons={iconResult}/>
		</div>
	)
}


