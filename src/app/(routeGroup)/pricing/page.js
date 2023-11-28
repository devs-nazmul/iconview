import css from './page.module.css'
import Pricing from "@/app/_comp/pricing";
import Footer from "@/app/_comp/footer";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";
import prisma from "@/libs/prisma";

export default async function Page(){
	
	// Check if any User
	const session = await getServerSession(authOptions)
	
	let email = null, currentPlan = null, user = null;
	
	if (session){
		
		email = session?.user?.email;
		
		user = await prisma.user.findUnique({
			where: {email: email}, include: {subscriber: true}
		})
		
		currentPlan = user?.subscriber
		
	}
	
	
	return(
		<div className={css.page}>
			
			<div className={css.head}>
				<h1>Pricing Made Simple</h1>
				<h4>Stay Focused and get the icon you need within your design app. </h4>
			</div>
			
			<Pricing plan={currentPlan} hideTitle />
			<Footer />
		</div>
	)
}