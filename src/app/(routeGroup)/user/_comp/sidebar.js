'use client'

import css from './sidebar.module.css'
import Button from '@/components/button'
import Link from "next/link";
import {User_Hair_Fad} from "iconview/svgs/User_Hair_Fad";
import {Credit_Card_Fad} from "iconview/svgs/Credit_Card_Fad";
import {Cloud_Plus_Fad} from "iconview/svgs/Cloud_Plus_Fad";
import {Code_Pull_Request_Fad} from "iconview/svgs/Code_Pull_Request_Fad";
import {Ticket_Airline_Fad} from "iconview/svgs/Ticket_Airline_Fad";
import {signOut} from "next-auth/react";


export default async function Sidebar({user}){
	
	const links = [
		{id: 1, name: "Profile Setting", link: "/user/profile", icon: <User_Hair_Fad/> },
		{id: 2, name: "Request Icons", link: "/user/request", icon: <Credit_Card_Fad/> },
		{id: 3, name: "Billing & Subscription", link: "/user/billing", icon: <Cloud_Plus_Fad/> },
		{id: 5, name: "Support Ticket", link: "/user/ticket", icon: <Cloud_Plus_Fad/> },
		{id: 6, name: "License & Usage", link: "/user/usage", icon: <Code_Pull_Request_Fad/> },
		{id: 7, name: "Upload Custom Icons", link: "/user/upload", icon: <Ticket_Airline_Fad/> },
	]
	
	return(
		<div className={css.sidebar}>
			{links.map(list => <Link key={list.id} href={list.link}> <Button onClick={ () => console.log("Hello from Sidebar") } icon_start={list.icon} type="link"> {list.name} </Button> </Link> )}
			<br/>
			<Button onClick={ () => signOut() } icon_start={<Ticket_Airline_Fad/>} type="link"> Logout </Button>
		</div>
	)
}