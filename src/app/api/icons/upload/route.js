import { icons } from "@/assets/iconsData/fa.js"

import prisma from "@/libs/prisma";

export const  GET = async (request) => {
	
	try {
		
		const iconData = icons.map( async (icon) => {
			
			const createIconID = await prisma.icon.create({
				data: {
					name: icon.name,
					label: icon.label,
					vendor: icon.vendor,
				}
			})
			
			const createTags = icon.tags.map( async (tag) => {
				
				const saveTags = await prisma.tag.create({
					data: {
						tag: tag,
						iconId: createIconID.id
					}
				})
			})
			
			const createStyle = icon.styles.map( async (style) => {
				
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
			
			return createIconID
			
		})
		
		
		
		return Response.json({
			message: "Icons saved successfully!",
			data: iconData,
		});
	} catch (error) {
		console.error(error);
		return Response.json({ message: "Error saving icons." });
	}
	

}