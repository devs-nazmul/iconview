import css from './layout.module.css'
import Sidebar from "@/app/(routeGroup)/icons/sidebar";

export default function Layout({children}){
	
	// This is Server Component, So Fetch icon from Server.
	
	return(
		<section className={css.icons_page}>
			<Sidebar/>
			{children}
		</section>
	)
}