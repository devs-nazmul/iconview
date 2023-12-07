import { icons } from "@/assets/iconsData/fa"

import prisma from "@/libs/prisma";

export const GET = async ( request ) => {
	
	// Get Icon Data From Request, Instead of Loacl Icons
	// const body = await request.json()
	// Verify Icons Upload
	
	return Response.json({ message : "Not Allowed" })

	// You'll not able to reach here
	
	const iconData = icons.map(async(icon) => {
		
		try {
			const createIconID = await prisma.icon.create({
				data: {
					name: icon.name,
					label: icon.label,
					vendor: icon.vendor,
				}
			})
			const createTags = icon.tags.map(async(tag) => {
				
				const saveTags = await prisma.tag.create({
					data: {
						tag: tag,
						iconId: createIconID.id
					}
				})
			})
			
			const createStyle = icon.styles.map(async(style) => {
				
				const saveStyle = await prisma.style.create({
					data: {
						iconId: createIconID.id,
						type: style.type,
						isFree: style.isFree,
						usage: style.usage,
						viewBox: style.viewBox,
						svg: style.svg
					}
				})
				
				const UpdatePath = style.path.map( async (d) => {
					const savePath = await prisma.path.create({
						data: {
							d: d,
							styleId: saveStyle.id
						}
					})
				})
			})
			
		} catch (error){
			console.error(error)
			console.log(icon.name);
			console.log("___");
		}
		
	})
	
	return Response.json({
		message: "Icons saved successfully!",
		data: iconData,
	})
	
}