"use client"

import {getSession} from "next-auth/react";
import {useEffect, useState} from "react";
import {redirect} from "next/navigation";
import Button from "@/components/button";
import Image from "next/image";
import no_image from '@/assets/guest_user.png'
import css from './page.module.css'
import {Plus_Far} from "iconview/svgs/Plus_Far";

export default function Page(){
	
	const [user, setUser] = useState("")
	
	useEffect(() => {
		const session = getSession().then((data) => setUser(data?.user))
	}, [])
	
	return(
		<section>
			<h3>Profile Picture</h3>
			<div className={"cursor-pointer relative flex items-center overflow-hidden justify-center bg-gray-50 h-40 w-40 rounded-full border-2"}>
				
				{user?.image && <Image src={user?.image} alt={user?.name}/>}
				{!user?.image && <div className={"absolute flex flex-col bottom-10 items-center justify-center gap-1"}>
					<Plus_Far/>
					<p>No Image Found</p>
					<p>Upload images</p>
				</div>}
			
			</div>
			
			
			<br/>
			
			<form action="">
				
				<div className="flex gap-4">
					<div>
						<label htmlFor="name">Full Name</label> <br/>
						<input className="p-3 bg-gray-200 rounded" id="name" type="text" value={user?.name}/>
					</div>
					
					<div>
						<label htmlFor="name">Full Name</label> <br/>
						<input className="p-3 bg-gray-200 rounded" id="name" type="email" value={user?.email}/>
					</div>
				</div>
				
				<br/>
				
				<Button onClick={e => {e.preventDefault(); }} type="primary"> Update Now</Button>
			
			</form>
		
		
		</section>
	)
}