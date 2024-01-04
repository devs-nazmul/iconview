import css from "@/app/_comp/featured.module.css";

import fontAwesome from '@/assets/fontAwesome.png'
import googleFonts from '@/assets/googleFonts.png'
import appleFonts from '@/assets/appleFonts.png'
// import bootstrap from '@/assets/bootstrap.png'
import freepik from '@/assets/freepik.png'

import Image from "next/image";

export default function Featured(){
	return(
		<section className={css.feature_section}>
			<div className={css.feature_pad}>
				<h4>Over 100k+ icons from various vendors</h4>
				<ul className={css.feature_list}>
					<li> <Image src={fontAwesome} alt={"FontAwesome"} /> </li>
					<li> <Image src={googleFonts} alt={"googleFonts"} /> </li>
					<li> <Image src={appleFonts} alt={"appleFonts"} /> </li>
					{/*<li> <Image src={bootstrap} alt={"bootstrap"} /> </li>*/}
					<li> <Image src={freepik} alt={"freepik"} /> </li>
				</ul>
			</div>
		</section>
	)
}
