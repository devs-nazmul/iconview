"use client"

import css from './loginReg.module.css'
import Button from "@/components/button";
import {redirect, useRouter} from "next/navigation";
import {Facebook_Fab} from "iconview/svgs/Facebook_Fab";
import {Github_Fab} from "iconview/svgs/Github_Fab";
import {Google_Fab} from "iconview/svgs/Google_Fab";
import {Apple_Fab} from "iconview/svgs/Apple_Fab";
import {Eye_Slash_Fas} from "iconview/svgs/Eye_Slash_Fas";
import {useEffect, useState} from "react";
import {Eye_Fas} from "iconview/svgs/Eye_Fas";
import loginImage from '@/assets/login.png'
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"



export default function LoginReg({activeLogin}){
	
	const router  = useRouter()
	const [showPass, hidePass] = useState(false)
	const [notice, setNotice] = useState("")
	
	const [isAccept, setAccept] = useState(false)
	
	const [data, setData] = useState({
		email: "",
		password: "",
		name: ""
	})
	
	const isEmptyField = data.email && data.password
	
	async function handleLogin(e){
		e.preventDefault()
		const res = await signIn('credentials', { redirect: true, ...data })
		
	}
	
	async function handleReg(e){
		e.preventDefault()
		
		const createUser = await fetch('/api/register', {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				...data
			}),
		})
		
		const res = await createUser.json()
		
		// console.log("From LoginReg")
		// console.log(res)
		
		if (createUser.ok){
			setNotice("Account Created Successful, Please Login")
			
			// setTimeout(() => {
			// 	redirect('/login')
			// }, 2000)
			
		} else {
			console.log(res);
			setNotice(res.message)
		}
	}
	
	return(
		<div className={css.container}>
			
			<div className={css.illus}>
				<Image src={loginImage} alt={"Login Image"} />
			</div>
			
			<div className={css.right_form}>
				<div className={css.loginReg_data}>
					
					<div className={css.switch_btn}>
						<Button onClick={() => router.push("/login")} className={activeLogin && css.activeTab} type="link" > Login </Button>
						<Button onClick={() => router.push("/register")} className={!activeLogin && css.activeTab} type="link" > Register </Button>
					</div>
					
					{activeLogin? <h3>Log in to your account</h3> : <h3>Create an Account</h3>}

					<div className={css.social}>
						<Button onClick={() => signIn("google")} type="second" > <Google_Fab size="17px"/> </Button>
						<Button onClick={() => signIn("github")} type="second" > <Github_Fab size="17px"/> </Button>
						{/*<Button onClick={() => signIn("facebook")} type="second" > <Facebook_Fab size="17px"/> </Button>*/}
						{/*<Button onClick={() => signIn("apple")} type="second" > <Apple_Fab size="17px"/> </Button>*/}
					</div>
					
					{activeLogin? <p> or login using email </p> : <p> or register using email </p>}
					
					<form className={css.form} action="">
						{!activeLogin? <input type="text" onChange={e => setData({...data, name: e.target.value})} value={data.name} placeholder="Full Name"/> : null}
						
						<input type="email" onChange={e => setData({...data, email: e.target.value})} value={data.email} placeholder="Email Address"/>
						
						<div className={css.passBox}>
							<input onChange={e => setData({...data, password: e.target.value})} type={showPass? "text" : "password"} value={data.password} placeholder="Password"/>
							
							<span className={css.show_hide}>
							{showPass? <Eye_Fas size="16px" onClick={() => hidePass(!showPass)} /> : <Eye_Slash_Fas size="17px" onClick={() => hidePass(!showPass)} />}
						</span>
						</div>
						
						{!activeLogin && <div className={css.terms}>
							<input id="check" type="checkbox" onChange={() => setAccept(!isAccept)}/>
							<label htmlFor="check">By Signing in, you’ve agreed to our Terms & Conditions and Privacy Policy.</label>
						</div>}
						
						{activeLogin && <Link className={css.link_forget} href="/forget"> Forget password? <span className={css.link_forget}>Click here</span></Link>}
						
						{activeLogin? <Button onClick={(e) => handleLogin(e)} disabled={!isEmptyField} type="primary"> Login </Button> : <Button onClick={(e) => handleReg(e)} disabled={!isAccept || !isEmptyField || !data.name } type="primary"> Register </Button>}
						<p>{notice}</p>
					</form>
				
				</div>
			</div>
		
		</div>
	)
}