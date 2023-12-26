"use client"

import {getSession, useSession} from "next-auth/react";
import {useEffect, useState, useRef} from "react";
import {redirect} from "next/navigation";
import Button from "@/components/button";
import Image from "next/image";
import no_image from '@/assets/guest_user.png'
import css from './page.module.css'
import {Plus_Far} from "iconview/svgs/Plus_Far";

export default function Page(){
	
	const [user, setUser] = useState(null)
	
	console.log(user);
	
	const imageRef = useRef(null)
	
	useEffect(() => {
		const session = getSession().then((data) => setUser(data?.user))
	}, [])
	
	async function handleUpdate(e){
		e.preventDefault()
		
		console.log(imageRef?.current?.files[0]);
		
		const formData = new FormData()
		
		formData.append("name", user?.name)
		formData.append("file", imageRef?.current?.files[0])
		
		
		const req = await fetch("/api/user/profile", {
			method: "POST",
			body: formData
		})
		
		if (req.ok){
			console.log("Success");
		} else {
			console.log("Failed");
		}
		
	}

	
	return(
		<section>
			<h3>Profile Picture</h3>
			<div className={"cursor-pointer relative flex items-center overflow-hidden justify-center bg-gray-50 h-32 w-32 rounded-full border-2"}>
				
				{user?.image && <Image src={user?.image} width="300" height="300" alt={user?.name}/>}
				
				{ !user?.image && <label htmlFor="file" className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
					<Plus_Far/>
					<p>No Image Found</p>
					<p>Upload images</p>
				</label> }
			</div>
			
			<br/>
			
			<form action="" onSubmit={ (e) => handleUpdate(e) }>
				
				{!user?.image && <> <input ref={imageRef} id="file" type="file" placeholder="Upload images"/> <br/> <br/> </>}
				
				<div className="flex gap-4 flex-wrap">
					<div>
						<label htmlFor="name">Full Name</label> <br/>
						<input onChange={(e) => setUser({...user, name: e.target.value})} className="p-3 bg-gray-400 rounded" id="name" type="text" value={user?.name}/>
					</div>
					
					<div>
						<label htmlFor="name">Full Name</label> <br/>
						<input className="p-3 bg-gray-400 rounded" disabled readOnly id="email" type="email" value={user?.email}/>
					</div>
					
				</div>
				
				<br/>
				
				<Button type="primary"> Update Now</Button>
			
			</form>
		
		
		</section>
	)
}