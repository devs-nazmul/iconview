import prisma from "@/libs/prisma";

export const POST = async (request) => {
	const req = await request.json()
	
	const {email, password, name} = req
	
	if (!email || !password){
		return Response.json({ message : "User Already Registered"}, { status: 400 })
	}
	
	// Check if User is already Registered
	const user = await prisma.user.findUnique({
		where: { email }
	})
	
	if (user) {
		return Response.json({ message : "User Already Registered"}, { status: 400 })
	}
	
	const createUser = await prisma.user.create({
		data: { email, password, name }
	})
	
	
	return Response.json(createUser)
	
}