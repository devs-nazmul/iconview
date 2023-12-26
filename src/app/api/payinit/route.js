import loadStripe from "stripe"
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/libs/prisma";

const stripe = loadStripe(process.env.STRIPE_SECRET)

export const POST = async (request) => {
	
	const req = await request?.json()
	
	const { item } = req || null
	
	console.log("Icons ----")
	console.log(item)
	
	const session = await getServerSession(authOptions)
	const { email } = session?.user


	if (!email || !session || !item ){
		return Response.json({
			message: "Not Allowrd"
		})
	}
	
	// Check if Stripe Customer
	const user = await prisma.user.findUnique({
		where: {email}, include: {subscriber: true}
	})
	
	let customer
	
	// Check if Customer Already Avaiable Then Create
	if (!user.stripe_cid){
		
		customer = await stripe.customers.create({
			name: user.name,
			email: user.email,
			description: 'Iconview Subscriptions',
		});
		
		const updatCustomer = await prisma.user.update({
			where: { email: email},
			data: { stripe_cid: customer.id }
		})
	}
	
	
	const paymentIntent = await stripe.paymentIntents.create({
		amount: item?.price * 100,
		currency: "usd",
		// payment_method: paymentMethod.id,
		customer: user.stripe_cid || customer.id,
		automatic_payment_methods: {
			enabled: true,
		},
		metadata: { ...item, email }
	});
	
	// console.log("Customer created:", customer.id);
	console.log("Payment Intented:", paymentIntent.id);
	
	return Response.json({
		clientSecret: paymentIntent.client_secret,
	})
}

