"use client"

import css from './nav.module.css'
import Button from "@/components/button";
import {Moon_Over_Sun_Far} from "iconview/svgs/Moon_Over_Sun_Far";
import Link from "next/link";
import Input from "@/components/input";
import {Magnifying_Glass_Fas} from "iconview/svgs/Magnifying_Glass_Fas";
import {Arrow_Turn_Down_Fas} from "iconview/svgs/Arrow_Turn_Down_Fas";
import {useRouter} from "next/navigation";
import {User_Fad} from "iconview/svgs/User_Fad";
import {useEffect, useState} from "react";
import PopupMenu from "@/app/(routeGroup)/user/_comp/popupMenu";
import Image from "next/image";
import { createPortal } from 'react-dom';

import guest_user from '@/assets/guest_user.png'
import {Bars_Far} from "iconview/svgs/Bars_Far";
import {User_Hair_Fad} from "iconview/svgs/User_Hair_Fad";
import {Credit_Card_Fad} from "iconview/svgs/Credit_Card_Fad";
import {Cloud_Plus_Fad} from "iconview/svgs/Cloud_Plus_Fad";
import {Code_Pull_Request_Fad} from "iconview/svgs/Code_Pull_Request_Fad";
import {Ticket_Airline_Fad} from "iconview/svgs/Ticket_Airline_Fad";
import {House_Far} from "iconview/svgs/House_Far";
import {Pen_Fancy_Slash_Far} from "iconview/svgs/Pen_Fancy_Slash_Far";
import {Badge_Dollar_Far} from "iconview/svgs/Badge_Dollar_Far";
import {File_Doc_Far} from "iconview/svgs/File_Doc_Far";
import {Message_Arrow_Up_Right_Far} from "iconview/svgs/Message_Arrow_Up_Right_Far";
import {cssRootModify} from "css-root-modify";
import {Moon_Fas} from "iconview/svgs/Moon_Fas";
import {d} from "prisma/build/public/assets/vendor";

export default function NavMenu({user}){
	
	const isLogged = user
	const router = useRouter()
	
	
	const nav_links = [
		{id: 1, name: "Home", link: "/", icon: <House_Far/>},
		{id: 2, name: "Icons", link: "/icons", icon: <Pen_Fancy_Slash_Far/>},
		{id: 3, name: "Pricing", link: "/pricing", icon: <Badge_Dollar_Far/>},
		{id: 4, name: "docs", link: "/docs", icon: <File_Doc_Far/>},
		{id: 5, name: "Support", link: "/support", icon: <Message_Arrow_Up_Right_Far/>}
	]
	
	const links = [
		{id: 1, name: user?.name || "Guest User", link: "/user/profile", icon: <User_Hair_Fad/> },
		{id: 2, name: "Billing", link: "/user/billing", icon: <Credit_Card_Fad/> },
		{id: 3, name: "Upload", link: "/user/upload", icon: <Cloud_Plus_Fad/> },
		{id: 4, name: "Request", link: "/user/_request", icon: <Code_Pull_Request_Fad/> },
		{id: 5, name: "Ticket", link: "/user/ticket", icon: <Ticket_Airline_Fad/> },
	]
	
	const [showMenu, setShowMenu] = useState(false)
	const [showNav, setShowNav] = useState(false)
	
	const [dark, setDark] = useState(false)
	
	useEffect(() => {
		const savedDark = localStorage.getItem("dark");
		
		console.log(savedDark);
		
		if (savedDark === "true") {
			changeTheme()
			setDark(true);
		}
		
	}, []);
	
	function changeTheme(){
		
		const newTheme = !dark;
		localStorage.setItem("dark", newTheme.toString());
		setDark(newTheme);
		
		if (newTheme){
			
			cssRootModify({
				main_bg: "#0d0d0d",
				white: "#0f0f1f",
				primary_less_white: "#161c25",
				primary_ercu_white: "#24262c",
				black: "#ffffff",
				model_bg: "rgb(36 38 44 / 81%)",
				primary_icon: "#d5d8de",
				primary_blue: "#2ed7b0",
				primary_light: "#232331",
				primary_btn: "#7797db",
				accent_two: "#0a559a",
				gradient_hero:  "linear-gradient(296deg, #202637 11.73%, #1c3b4b 43.35%, #232334 87.28%)",
				gradient_two: "linear-gradient(285deg, #283137 13.12%, #062335 99.74%)",
				gradient_one: "linear-gradient(285deg, #283137 13.12%, #062335 99.74%)",
			})
		} else {
			cssRootModify({
				main_bg: "#ffffff",
				white: "#ffffff",
				primary_btn: "#14213d",
				primary_light: "#C1C4FF",
				primary_less_white: "#EFF6FF",
				primary_ercu_white: "#ececec",
				black: "#222222",
				accent_two: "#A3CDF4",
				model_bg: "rgba(231, 231, 231, 0.90)",
				primary_icon: "#0E1736",
				primary_blue: "#2F5AFF",
				gradient_one: "linear-gradient(285deg, #B5FFEA 15.41%, #A3CDF4 61.01%, #8D92FF 98.09%)",
				gradient_hero:  "linear-gradient(296deg, #00C2FF 11.73%, #7DECBD 43.35%, #C1C4FF 87.28%)",
				gradient_two: "linear-gradient(285deg, #A9DCFF 13.12%, #FFF5D2 99.74%)"
			})
		}
	}
	
	return(
		<nav className={css.nav}>
			<div className={css.logo_search}>
				
				<div className={css.logo_bg}>
					<Link href={"/"}><h2 className={css.logo}>iconview.org</h2></Link>
				</div>
				
				<div className={css.searchBar}>
					<Input icon_start={<Magnifying_Glass_Fas />} place="Search your icon..." />
				</div>
				
			</div>
			
			<div className={css.links_btn}>
				
				<ul className={css.links}>
					{nav_links.map( (link, index) => <li key={index}> <Link href={link.link} > {link.name} </Link> </li> )}
				</ul>
				
				<div className={css.nav_btn}>
					<Button name={"bars"} className={css.hide_nav} onClick={() => setShowNav(!showNav)} type={"outline"} mini icon_start={<Bars_Far size="18px" />}> </Button>
					
					<Button name={"Theme Change"} onClick={ changeTheme } type={"outline"} mini icon_start={dark? <Moon_Over_Sun_Far size="18px" /> : <Moon_Fas size="18px" />}> </Button>
					
					{!isLogged && <Button name={"login"} className={css.loginBtn} onClick={() => router.push("/login")} type={"primary"}> Login </Button>}
					{!isLogged && <Button name={"Register"} className={css.regBtn} onClick={() => router.push("/register")} type={"outline"} > Register </Button>}
					
					{isLogged && <Button name={"Menu"} className={css.pic_btn} onClick={(e) => setShowMenu(!showMenu)} type={"outline"} mini > <Image className={css.pro_pic} src={user.image || guest_user } alt={"Profile Picture"} width={300} height={300} /> </Button>}
					
					{showMenu && createPortal(<div className={css.showMenu}> <PopupMenu isLogged={isLogged} links={links} show={showMenu} setShow={setShowMenu} /> </div>, document.body)}
					{showNav && createPortal(<div className={css.showMenu}> <PopupMenu isLogged={isLogged} links={nav_links} show={showNav} setShow={setShowNav} /> </div>, document.body)}
				</div>
				
			</div>
			
		</nav>
	)
}