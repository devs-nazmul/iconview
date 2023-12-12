import {getServerSession} from "next-auth/next";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/libs/prisma";

export const GET = async (request) => {
	
	const session = await getServerSession(authOptions)
	
	const {  email } = session?.user;
	
	const isSubscriber = await prisma.user.findUnique({
		where: {email: email}, include: {subscriber: true}
	})
	
	return Response.json({
		isSubscriber: isSubscriber
	})
}