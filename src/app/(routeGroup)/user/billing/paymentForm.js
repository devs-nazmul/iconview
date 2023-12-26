'use client'

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import css from './page.module.css'
import CheckoutForm from "./checkoutForm";
import {useEffect, useState} from "react";
import {useItem} from "@/state/itemState";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function PaymentForm({items}) {
	const [clientSecret, setClientSecret] = useState("");
	
	const {item} = useItem()
	
	useEffect( () => {
		
		fetch(`${process.env.NEXT_PUBLIC_SSL}${process.env.NEXT_PUBLIC_URL}/api/payinit`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				item: {
					name: items[item].name,
					price: items[item].price
				}
			}),
		})
			.then((res) => res.json())
			.then((data) => setClientSecret(data.clientSecret))
		
	}, [item]);
	
	
	const appearance = { theme: 'stripe'};
	
	const options = { clientSecret, appearance };
	
	return (
		<div className={css.payment_cont}>
			{clientSecret && (
				<Elements key={clientSecret} options={options} stripe={stripePromise}>
					<CheckoutForm item={items[item]} />
				</Elements>
			)}
		</div>
	);
}
