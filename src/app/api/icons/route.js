import prisma from "@/libs/prisma";

export const GET = async (request) => {
	
	const getIcons  = await prisma.icon.findMany({
		where: { name: {contains: "facebook"} },
		include: {
			tags: {
				select: {
					tag: true
				}
			},
			styles: {
				include: {
					path: {
						select: {
							d: true
						}
					}
				}
			}
		}
	})
	
	return Response.json(getIcons)
	
}