import css from "@/app/_comp/featured.module.css";

import fontAwesome from '@/assets/fontAwesome.png'
import Image from "next/image";

export default function Featured(){
	return(
		<section className={css.feature_section}>
			<div className={css.feature_pad}>
				<h4>Over 100k+ icons from various vendors</h4>
				<ul className={css.feature_list}>
					<li> <Image src={fontAwesome} alt={"FontAwesome"} /> </li>
					<li> <Image src={fontAwesome} alt={"FontAwesome"} /> </li>
					<li> <Image src={fontAwesome} alt={"FontAwesome"} /> </li>
					<li> <Image src={fontAwesome} alt={"FontAwesome"} /> </li>
					<li> <Image src={fontAwesome} alt={"FontAwesome"} /> </li>
				</ul>
			</div>
		</section>
	)
}