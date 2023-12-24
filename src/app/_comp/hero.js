'use client'

import css from "./hero.module.css";
import Input from "@/components/input";
import {Magnifying_Glass_Fas} from "iconview/svgs/Magnifying_Glass_Fas";
import Button from "@/components/button";
import Image from "next/image";
import videoImage from '@/assets/video.png'
import {Rocket_Far} from "iconview/svgs/Rocket_Far";
import Link from "next/link";

export default function Hero(){
	
	
	return(
		<section className={css.heroSection}>
			<div className={css.heroPad}>
				<div className={css.heroGrid}>
					<div className={css.hero_info}>
						<h1 className="font-black">Open Source icon library. <br/> 100k+ icons for React, Nextjs, Figma and For_Everyone</h1>
						<h5>Get Access to 100k+ Svg High Quality Vector Icons for web, mobile and desktop, Unlimited Download and usage For Free.</h5>
						
						<div className={css.hero_search}>
							<Input place="Search your icons..." icon_start={<Magnifying_Glass_Fas />}  />
							<Button name={"Search"} type="primary" icon_start={<Magnifying_Glass_Fas />}>  </Button>
						</div>
						
						<div className={css.browse_btn}>
							<Link href={"/icons"} ><Button border type="primary" icon_start={<Rocket_Far />} > Browse Icons</Button></Link>
						</div>
						
						<div className={css.hero_reviews}>
							<div>1</div>
							<div>2</div>
						</div>
					</div>
					
					<div className={css.hero_video}>
						<Image src={videoImage} alt={"Intro Video"} />
						{/*<iframe className={css.yt_video} width="500" height="315" src="https://www.youtube.com/embed/8rLpG6LnBvw?si=_QFMQ_vRBA2NXgL9" allow="accelerometer; encrypted-media;" allowFullScreen></iframe>*/}
					</div>
				</div>
			</div>
		</section>
	)
}