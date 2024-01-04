import prisma from "@/libs/prisma";

export const GET = async (request) => {
	
	const searchParams = request.nextUrl.searchParams
	const rawQuery = searchParams.get("q")
	const query = rawQuery ? rawQuery.charAt(0).toUpperCase() + rawQuery.slice(1) : "";
	
	const type = searchParams.get("type") || "all"
	const typeArray = type?.split("-")?.filter(Boolean);
	
	const vendor = searchParams.get("vendor") || "alls"
	const vendorArray = vendor?.split("-")?.filter(Boolean);
	
	const p = parseInt(searchParams.get("p")) || 1
	const itemsPerPage = 300
	
	const typeCheck = (typeArray) => {
		if (typeArray?.length < 0 || typeArray?.includes("all") || !typeArray ){ return ["regular", "solid", "light", "thin", "colored", "brands"] }
		return typeArray
	}
	
	const vendorCheck = (vendorArray) => {
		if (vendorArray?.length < 0 || vendorArray?.includes("alls") || !vendorArray ){ return ["fontawesome", "google", "apple", "bootstrap", "tibian", "freepik"] }
		return vendorArray
	}
	
	
	const getIcons = await prisma.icon.findMany({
		
		where: {
			OR: [
				{ name : { contains: query, mode: "insensitive" }},
				{ tags: { has: query } },
				{ label: { contains: query, mode: "insensitive" } },
			],
			AND: [
				{ vendor: { in: vendorCheck(vendorArray) } }
			]
		},
		
		
		// orderBy: [ { name: "asc" } ],
		skip: (p - 1) * itemsPerPage,
		take: itemsPerPage,
		
		include: {
			styles: { where: { type: { in: typeCheck( typeArray )}} }
		}
		
	})
	
	return Response.json(getIcons)
	
}