
import css from './page.module.css'
import ShowIcon from "@/app/(routeGroup)/icons/showIcon";
import icons from '@/assets/initialData'

export default function Page(){
	
	// This is Server Components, so Fetch from Server

	
	return(
		<div className={css.icon_cont}>
			<ShowIcon icons={icons} />
		</div>
	)
}