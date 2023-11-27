import prisma from "@/libs/prisma";

export const POST = async (request) => {
	
	const req = await request.json()
	
	const {email, password} = req
	
	const user = await prisma.user.findUnique({
		where: {email}
	})
	
	if (!user) return new Response("User Not Found", {
		status: 400
	})
	
	return Response.json(user)
}

