import css from './page.module.css'
import LoginReg from "@/components/loginReg";


import {getServerSession} from "next-auth/next";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";



export default async function Page(){
	
	const session = await getServerSession(authOptions)
	if (session) { redirect('/icons') }
	
	return(
		<section className={css.login_section}>
			<div className={css.loginPad}>
				<LoginReg activeLogin={true} />
			</div>
		</section>
	)
}