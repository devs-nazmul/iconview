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

export default function Docs(){
	return(
		<section className={css.section}>
			<div className={css.sec_pad}>
				
				<h2>Start Your Project With iconview</h2>
				<p className="sub_title">Stay Focused and get the icon you need within your design app.</p>
				
				<div className={css.listGrid}>
					<Button icon_start={<Brand_React_Tbr />} > React </Button>
					<Button border type="second" icon_start={<Brand_Nextjs_Tbr />} > Nextjs </Button>
					<Button border type="second" icon_start={<Brand_Figma_Tbr />} > Figma </Button>
					<Button border type="second" icon_start={<Brand_React_Native_Tbr />} > React Native </Button>
				</div>
				
				<div className={css.docs_container}>
					<div className="image">
						<Image src={istanbul} alt={"Different Style"} />
					</div>
					<div className={css.docs}>
						<h4 className="font-bold">Hello This is React Documentations</h4>
						<p>Stay Focused and get the icon you need within your design app.</p> <br/>
						
						<strong>STEP 1</strong> <span>Install NPM Package</span>
						<code>npm i iconview</code>
						<br/> <br/>
						<strong>STEP 2</strong> <span>Import NPM Package into your file</span>
						<code>import iconview from iconview</code>
					</div>
				</div>
				
			</div>
		</section>
	)
}