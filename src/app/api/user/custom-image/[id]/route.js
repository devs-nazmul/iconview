import prisma from "@/libs/prisma";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";



export const GET = async (request, { params } ) => {
	
	const session = await getServerSession(authOptions)
	
	if (!session){
		return Response.json({message: "Email Not Found" })
	}
	
	const getImage = await prisma.customImage.findFirst({
		where: {
			AND: [
				{ user: { email: session.user.email} },
				{ userId: params.id }
			]
		}
	})
	
	if (!getImage) {
		return new Response(JSON.stringify({ message: "Image Not Found" }), {
			status: 404,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}
	
	const imageBuffer = Buffer.from(getImage.image);
	const contentType = "image/png";
	
	const blob = new Blob([imageBuffer], { type: contentType });
	
	return new Response(blob, {
		status: 200,
		headers: {
			'Content-Type': contentType
		},
	})
	
}