import prisma from "@/libs/prisma";

export const GET = async (request) => {
	
	const getIconsNames = await prisma.icon.findMany({
		select: {name: true}
	})
	
	console.log(getIconsNames.length);
	
	return Response.json(getIconsNames)
	
}