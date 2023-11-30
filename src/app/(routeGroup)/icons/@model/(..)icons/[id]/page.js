
import Model from "@/components/model";
import css from './page.module.css'

// Temporary Import icon
import icons from '@/assets/initialData'


import ShowIconDetail from "@/components/showIconDetail";

export default function Page({params}){
	
	console.log(params)
	console.log("From Intercept")
	
	
	// Temporary Passing Icon
	const [ icon ] = icons.filter((icon) => icon.usage === params.id )
	
	return(
		<Model >
			<ShowIconDetail icon={icon} />
		</Model>
	)
}


