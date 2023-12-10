import { icons } from "@/assets/iconsData/fa"

import prisma from "@/libs/prisma";

export const GET = async ( request ) => {
	
	// Get Icon Data From Request, Instead of Loacl Icons
	// const body = await request.json()
	// Verify Icons Upload
	
	return Response.json({ message : "Not Allowed" })

	
	// You'll not able to reach here
	// Creating Bulk
	
	let createManyIcon = []
	let createManyStyle = []
	let id = 0
	
	const iconData = icons.map(async(icon) => {
		
		const newObj = {
			id: id.toString(),
			name: icon.name,
			label: icon.label,
			vendor: "fontawesome", // write icon.vendor
			tags: icon.tags
		}
		createManyIcon.push(newObj)
		
		const createStyle = icon.styles.map(async (style) => {
			const newObj = {
				iconId: id.toString(),
				type: style.type,
				isFree: style.isFree,
				usage: style.usage,
				viewBox: style.viewBox,
				svg: style.svg,
				path: style.path
			}
			createManyStyle.push(newObj)
		})
		
		id = id + 1
		
	})
	
	const saveIcon = await prisma.icon.createMany({
		data: createManyStyle
	})
	
	const updateStyle = await prisma.style.createMany({
		data: createManyStyle
	})
	
	return Response.json({
		message: "Icons saved successfully!",
		icon: createManyStyle,
		style: createManyStyle,
	})
	
}