import prisma from "@/libs/prisma";

export const GET = async (request) => {
	
	const searchParams = request.nextUrl.searchParams
	const raqQuery = searchParams.get("q")
	const query = raqQuery.charAt(0).toUpperCase() + raqQuery.slice(1);
	
	const type = searchParams.get("type")
	const typeArray = type.split("-").filter(Boolean);
	
	const vendor = searchParams.get("vendor")
	const vendorArray = vendor.split("-").filter(Boolean);
	
	const p = parseInt(searchParams.get("p")) || 1
	const itemsPerPage = 200
	
	const typeCheck = (typeArray) => {
		if (typeArray.length < 0 || typeArray.includes("all")){ return ["regular", "solid", "light", "thin", "colored", "brands"] }
		return typeArray
	}
	
	const vendorCheck = (vendorArray) => {
		if (vendorArray.length < 0 || vendorArray.includes("alls")){ return ["fontawesome", "google", "apple", "bootstrap", "tibian", "freepik"] }
		return vendorArray
	}
	
	
	const getIcons  = await prisma.icon.findMany({
		orderBy: [
			{ name: "asc" }
		],
		where: {
			
			OR:[
				{name : {startsWith: query }},
				{tags: { some: { tag: { contains: query }}}},
				
			],
			vendor: { in: vendorCheck(vendorArray) }

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
				where: {
					type: { in: typeCheck(typeArray) }
				},
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