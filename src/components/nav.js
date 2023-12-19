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

export default function NavMenu({user}){
	
	const isLogged = user
	const router = useRouter()
	
	
	const nav_links = [
		{name: "Home", link: "/"},
		{name: "Icons", link: "/icons"},
		{name: "Pricing", link: "/pricing"},
		{name: "docs", link: "/docs"},
		{name: "Support", link: "/support"}
	]
	
	const [showMenu, setShowMenu] = useState(false)
	
	
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
					<Button className={css.hide_nav} onClick={() => alert("Showing Nav Menu")} type={"outline"} mini icon_start={<Bars_Far size="18px" />}> </Button>
					
					<Button onClick={() => alert("Mode Changed")} type={"outline"} mini icon_start={<Moon_Over_Sun_Far size="18px" />}> </Button>
					{!isLogged && <Button onClick={() => router.push("/login")} type={"primary"}> Login </Button>}
					{!isLogged && <Button onClick={() => router.push("/register")} type={"outline"} > Register </Button>}
					{isLogged && <Button className={css.pic_btn} onClick={(e) => setShowMenu(!showMenu)} type={"outline"} mini > <Image className={css.pro_pic} src={user.image || guest_user } alt={"Profile Picture"} width={300} height={300} /> </Button>}
					{showMenu && createPortal(<div className={css.showMenu}> <PopupMenu user={user} showMenu={showMenu} setShowMenu={setShowMenu} /> </div>, document.body)}
				</div>
				
			</div>
			
		</nav>
	)
}