

import Sidebar from "@/app/(routeGroup)/user/_comp/sidebar";
import css from './layout.module.css'
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";

export default async function Page({children}){
	
	const session = await getServerSession(authOptions)
	if (!session) { redirect('/login') }
	
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