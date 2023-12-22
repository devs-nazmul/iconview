import css from './popupMenu.module.css'
import Button from "@/components/button";
import Link from "next/link";
import {Credit_Card_Fad} from "iconview/svgs/Credit_Card_Fad";
import {Upload_Fad} from "iconview/svgs/Upload_Fad";
import {Code_Pull_Request_Fad} from "iconview/svgs/Code_Pull_Request_Fad";
import {Ticket_Airline_Fad} from "iconview/svgs/Ticket_Airline_Fad";
import {signOut} from "next-auth/react";
import {User_Hair_Fad} from "iconview/svgs/User_Hair_Fad";
import {Cloud_Plus_Fad} from "iconview/svgs/Cloud_Plus_Fad";
import {createPortal} from "react-dom";

export default function PopupMenu({ setShow, show, links}){
	
	
	return(
		createPortal(<div className={css.popup_cont}>
			{links.map(list => <Link key={list.id} href={list.link}> <Button onClick={(e) => {setShow(!setShow)}} icon_start={list.icon || null } type="link"> {list.name} </Button> </Link> )}
			<Button onClick={() => signOut()} icon_start={<Ticket_Airline_Fad/>} type="link"> Logout </Button>
		</div>, document.body)
	)
}