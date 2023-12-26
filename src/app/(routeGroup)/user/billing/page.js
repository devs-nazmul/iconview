import PaymentForm from "./paymentForm";
import css from './page.module.css'
import Plan from "./plan";
import prisma from "@/libs/prisma";

import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Pricing from "@/app/_comp/pricing";

export default async function Page(){
	
	// Check if any User
	const session = await getServerSession(authOptions)
	
	if (!session){
		redirect("/login")
	}
	
	const { name, email } = session?.user;
	
	
	const isSubscriber = await prisma.user.findUnique({
		where: {email: email}, include: {subscriber: true}
	})
	
	const currentPlan = isSubscriber?.subscriber
	
	
	const items = {
		basic: {name: "Free", price: 1},
		team: {name: "Team", price: 100},
		enterprise: {name: "Enterprise", price: 300},
	}
	
	return(
		<div>
			<div className={css.twoGrid}>
				<div className={css.currentPlan}>
					<Plan currentPlan={currentPlan} items={items} />
				</div>
				
				<div className={css.paymentForm}>
					{!currentPlan && <PaymentForm items={items}/>}
				</div>
			</div>
		</div>
	)
}