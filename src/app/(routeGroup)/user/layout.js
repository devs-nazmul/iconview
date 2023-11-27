import Sidebar from "@/app/(routeGroup)/user/_comp/sidebar";
import css from './layout.module.css'

export default async function Page({children}){
	
	return(
		<section className="user_section">
			<div className={css.userPad}>
				<div className={css.userGrid}>
					<Sidebar />
					<div className={css.user_body}>{children}</div>
				</div>
			</div>
		</section>
	)
}