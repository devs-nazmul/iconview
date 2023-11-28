"use client"

import {getSession} from "next-auth/react";
import {useEffect, useState} from "react";

export default function Page(){
	
	const [user, setUser] = useState("")
	
	useEffect(() => {
		const session = getSession().then((data) => setUser(data?.user))
	}, [])
	
	return(
		<section>
			<h3>Profile</h3>
			<h3>{user.name}</h3>
			<h3>{user.email}</h3>
		</section>
	)
}