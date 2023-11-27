import Docs from "@/app/_comp/docs";
import css from './page.module.css'

export default function Page(){
	return(
		<div className={css.docs_page}>
			
			<div className={css.docs_head}>
				<h1>iconview Documents</h1>
			</div>
			
			<Docs />
		</div>
	)
}