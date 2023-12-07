import fs from "node:fs"
import icons from './original/icon-families.json' assert { "type": "json" }

let iconJson = []
const output_dir = "fa.js"
const vendorCode = "Fa"

let count = 0

function ObjToArr(classic, duotone, name, isFree ){
	
	let styles = []
	let iconData = null
	
	if (classic){
		
		Object.entries(classic).forEach( ([type, icon]) => {
			const {raw, viewBox, path} = icon
			iconData = {
				type,
				isFree: isFree === type? true : false,
				usage: Usage(name) + "_" + vendorCode + type[0],
				viewBox: viewBox? typeof viewBox === "string"? viewBox : viewBox.join(" ") : "0 0 512 512",
				path: typeof path === 'string'? [path] : path,
				svg: raw
			}
			styles.push(iconData)
		})
		
	}
	
	if (duotone){
		
		Object.entries(duotone).forEach( ([type, icon]) => {
			const {raw, viewBox, path} = icon
			iconData = {
				type: "colored",
				isFree: isFree === type? true : false,
				usage: Usage(name) + "_" + vendorCode + "d",
				viewBox: viewBox? typeof viewBox === "string"? viewBox : viewBox.join(" ") : "0 0 512 512",
				path: typeof path === 'string'? [path] : path,
				svg: raw
			}
			styles.push(iconData)
		})
		
	}
	
	
	return styles
}

function modName(name) {
	return name.replace(/-/g, ' ')
		.replace(/(?:^|\s)\S/g, (match) => match.toLowerCase())
		.replace(/_(.)/g, (_, character) => `_${character.toUpperCase()}`);
}

function Usage(name) {
	return name.replace(/-/g, '_')
		.replace(/(?:^|\s)\S/g, (match) => match.toUpperCase())
		.replace(/^\d/, (match) => `Num_${match}`)
		.replace(/_(.)/g, (_, character) => `_${character.toUpperCase()}`)
		.replace(/\s+/g, '_')
}

Object.entries(icons).forEach( ([name, icon]) => {
	count++; console.log(count);
	let iconData = null
	
	// Names are Unique to All
	const modNames = modName(name)
	
	const { label, search, svgs } = icon
	const tags = search?.terms
	const vendor = "Font Awesome"
	
	const { free } = icon.familyStylesByLicense
	const isFree = free.map((type) => type.style )?.join("")
	
	const { classic, duotone } = svgs
	
	const styles = ObjToArr(classic, duotone, modNames, isFree) || []
	
	iconData = {
		name: name, label, tags, vendor, styles
	}
	
	
	iconJson.push(iconData)
	
	console.log("Icon Saved", modName);
	console.log("---");
	
})

fs.writeFileSync(output_dir, JSON.stringify(iconJson, null, 2));


