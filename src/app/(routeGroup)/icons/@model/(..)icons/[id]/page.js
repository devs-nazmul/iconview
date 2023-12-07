
import Model from "@/components/model";
import css from './page.module.css'
import prisma from "@/libs/prisma";
import ShowIconDetail from "@/components/showIconDetail";


export default async function Page({params, searchParams}){
	
	const { vendor } = searchParams
	
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
	
	
	
	return(
		<Model >
			<ShowIconDetail type={searchParams?.type} icon={icon}  />
		</Model>
	)
}


