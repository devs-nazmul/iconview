import prisma from "@/libs/prisma";

export const GET = async (request) => {
	
	const searchParams = request.nextUrl.searchParams
	const raqQuery = searchParams.get("q")
	const query = raqQuery.charAt(0).toUpperCase() + raqQuery.slice(1);
	const type = searchParams.get("type")
	const vendor = searchParams.get("vendor")
	const p = parseInt(searchParams.get("p")) || 1
	const itemsPerPage = 200
	
	console.log(searchParams);
	
	const getIcons  = await prisma.icon.findMany({
		orderBy: [
			{ name: "asc" }
		],
		where: {
			OR:[
				{name : {startsWith: query }},
				{tags: { some: { tag: { contains: query } } }},
			
			]
		},
		skip: (p - 1) * itemsPerPage,
		take: itemsPerPage,
		
		include: {
			tags: {
				select: {
					tag: true
				}
			},
			styles: {
				select: {
					id: true,
					svg: true,
					type: true,
					usage: true,
					isFree: true
				}
			}
		},
	})
	
	return Response.json(getIcons)
	
}