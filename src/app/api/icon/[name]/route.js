import prisma from "@/libs/prisma";

export const GET = async (request, {params}) => {
	
	const name = params?.name
	
	const getIcons = await prisma.icon.findMany({

		where: { name: name },

		include: {
			styles: true
		}

	})
	
	return Response.json(getIcons)
	
}