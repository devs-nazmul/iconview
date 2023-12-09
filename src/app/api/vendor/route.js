import prisma from "@/libs/prisma";

export const GET = async (request) => {
	
	return Response.json({message: "Not Allowed"})
	
	// const vendor = await prisma.icon.updateMany({
	// 	where: {
	// 		vendor: "Font Awesome"
	// 	},
	// 	data: {
	// 		vendor: "fontawesome"
	// 	}
	// })
	//
	// return Response.json(vendor)
	
}