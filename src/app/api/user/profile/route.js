import prisma from "@/libs/prisma";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

function storeImageInDatabase(){

}

export const POST = async (request) => {
	
	
	const session = await getServerSession(authOptions)
	
	if (!session){
		return Response.json({ message: "Email Not Found" })
	}
	
	const formData = await request.formData()
	const name = formData.get('name')
	const file = formData.get('file')
	const email = session.user.email
	
	let imageURL
	
	console.log(file);
	
	// if (file){
	//
	// 	const imageBuffer = await file.arrayBuffer();
	// 	const imageBytes = new Uint8Array(imageBuffer);
	//
	//
	// 	try {
	// 		const saveImage = await prisma.customImage.create({
	// 			data: {
	// 				image: imageBytes,
	// 				user: {
	// 					connect: { email }
	// 				}
	// 			}
	// 		})
	//
	// 		if (saveImage.id){
	// 			imageURL = `/api/user/custom-image/${saveImage.userId}`
	// 		}
	//
	// 	} catch (error) {
	// 		console.error("Error storing custom image in database:", error);
	// 		throw error
	// 	}
	//
	// 	const updateImage = await prisma.user.update({
	// 		where: { email },
	// 		data: {
	// 			image: imageURL
	// 		}
	// 	})
	// }

	if (name){
		const updateImage = await prisma.user.update({
			where: { email },
			data: {
				name: name
			}
		})
	}

	
	
	return Response.json({
		message : "Success Update Information",
	})
}