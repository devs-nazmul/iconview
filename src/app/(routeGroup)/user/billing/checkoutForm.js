'use client'

import css from './page.module.css'

import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {useEffect, useState} from "react";
import Button from "@/components/button";
import cls from "@/libs/cls";

export default function CheckoutForm({item}) {
	
	const stripe = useStripe();
	const elements = useElements();
	let secretSlug = null
	
	const [message, setMessage] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	
	useEffect(() => {
		if (!stripe) { return }
		
		const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret");
		secretSlug = clientSecret
		
		if (!clientSecret) { return }
		
		stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
			switch (paymentIntent.status) {
				case "succeeded":
					setMessage("Payment succeeded!");
					break;
				case "processing":
					setMessage("Your payment is processing.");
					break;
				case "requires_payment_method":
					setMessage("Your payment was not successful, please try again.");
					break;
				default:
					setMessage("Something went wrong.");
					break;
			}
		});
	}, [stripe, item]);
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		
		if (!stripe || !elements) { return }
		
		setIsLoading(true);
		
		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				// Make sure to change this to your payment completion page
				return_url: `${process.env.NEXT_PUBLIC_SSL}${process.env.NEXT_PUBLIC_URL}/user/billing/success`,
			},
		});
		
		if (error.type === "card_error" || error.type === "validation_error") {
			setMessage(error.message);
		} else {
			setMessage("An unexpected error occurred.");
		}
		
		setIsLoading(false);
	};
	
	const paymentElementOptions = { layout: "tabs" };
	
	return (
		<form id="payment-form" onSubmit={handleSubmit}>
			
			<PaymentElement id="payment-element" options={paymentElementOptions} />
			
			<div className={cls(css.pricing, "flex justify-between items-center")}>
				<span className="flex items-start flex-col">
					<h5>Total</h5>
					<h6>{item.name} Plan / Yearly</h6>
				</span>
				<h3>{item.price}$</h3>
			</div>
			
			<Button className={css.pay_btn} type="primary" disabled={isLoading || !stripe || !elements} id="submit">
				<span id="button-text"> {isLoading ? <div className="spinner" id="spinner"></div> : "Make Payment"}</span>
			</Button>
			{/* Show any error or success messages */}
			{message && <div id="payment-message">{message}</div>}
		</form>
	);
}