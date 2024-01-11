"use client"

import css from "./docs.module.css";
import Button from "@/components/button";
import {React_Fab} from "iconview/svgs/React_Fab";
import {Brand_Nextjs_Tbr} from "iconview/svgs/Brand_Nextjs_Tbr";
import {Figma_Fab} from "iconview/svgs/Figma_Fab";
import {Brand_React_Native_Tbr} from "iconview/svgs/Brand_React_Native_Tbr";
import {Brand_Figma_Tbr} from "iconview/svgs/Brand_Figma_Tbr";
import {Brand_React_Tbr} from "iconview/svgs/Brand_React_Tbr";
import Image from 'next/image'
import istanbul from '@/assets/istanbul.png'
import ReactDocs from "@/components/docs/react";
import {useState} from "react";
import FigmaDocs from "@/components/docs/figma";

export default function Docs(){
	
	const [active, setActive] = useState("react")
	
	return(
		<section className={css.section}>
			<div className={css.sec_pad}>
				
				<h2>Start Your Project With iconview</h2>
				<h5>Stay Focused and get the icon you need within your design app.</h5>
				
				<div className={css.listGrid}>
					<Button onClick={() => setActive("react")} border type={active === "react"? "" : "second" } icon_start={<Brand_React_Tbr />} > React </Button>
					<Button onClick={() => setActive("next")} border type={active === "next"? "" : "second" } icon_start={<Brand_Nextjs_Tbr />} > Nextjs </Button>
					<Button onClick={() => setActive("figma")} border type={active === "figma"? "" : "second" } icon_start={<Brand_Figma_Tbr />} > Figma </Button>
					<Button onClick={() => setActive("rn")} border type={active === "rn"? "" : "second" } icon_start={<Brand_React_Native_Tbr />} > React Native </Button>
				</div>
				
				<div className={css.docs_container}>
					{["react", "next", "rn"].includes(active) && <ReactDocs />}
					{active === "figma" && <FigmaDocs />}
				</div>
				
			</div>
		</section>
	)
}