export default function cls(...rest){
	return rest.filter(Boolean).join(" ")
}