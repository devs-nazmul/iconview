import css from './layout.module.css'
import Sidebar from "@/app/(routeGroup)/icons/sidebar";

export default function Layout({children, model}){
	
	// This is Server Component, So Fetch icon from Server.
	
	return(
		<section className={css.icons_page}>
			
			<Sidebar/>
			{/*<div className={css.sidebar}>*/}
			{/*	*/}
			{/*</div>*/}
			
			<div className={css.children}>
				{children}
				{model}
			</div>
			
		</section>
	)
}