"use client"

import css from './popupMenu.module.css'
import Button from "@/components/button";
import Link from "next/link";
import {createPortal} from "react-dom";

import {Right_To_Bracket_Far} from "iconview/svgs/Right_To_Bracket_Far";
import {User_Plus_Far} from "iconview/svgs/User_Plus_Far";
import {useRouter} from "next/navigation";
import {signOut} from "next-auth/react";
import {Ticket_Airline_Fad} from "iconview/svgs/Ticket_Airline_Fad";

export default function PopupMenu({ setShow, show, links, isLogged}){
	
	const router = useRouter()
	
	return(
		createPortal(<div className={css.popup_cont}>
			{links.map(list => <Link key={list.id} href={list.link}> <Button onClick={(e) => {setShow(!setShow)}} icon_start={list.icon || null } type="link"> {list.name} </Button> </Link> )}
			<hr/>
			{!isLogged && <Button onClick={() => { setShow(!setShow); router.push("/login") }}  icon_start={ <Right_To_Bracket_Far/> } type={"link"}> Login </Button>}
			{!isLogged && <Button onClick={() => { setShow(!setShow); router.push("/register") }} icon_start={ <User_Plus_Far/> } type={"link"} > Register </Button>}
			
			{isLogged && <Button onClick={() => signOut()} icon_start={<Ticket_Airline_Fad/>} type="link"> Logout </Button>}
		</div>, document.body)
	)
}