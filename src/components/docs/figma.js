import Image from "next/image";
import istanbul from "@/assets/istanbul.png";
import css from "@/app/_comp/docs.module.css";

export default function FigmaDocs(){
	return(
		<>
			<div className="image">
				<Image src={istanbul} alt={"Different Style"}/>
			</div>
			<div className={css.docs}>
				<h4 className="font-bold">Figma Docs Not Ready Yet</h4>
				<p>Please keep an eye on next updates.</p> <br/>
				
				{/*<strong>STEP 1</strong> <span>Install NPM Package</span>*/}
				{/*<code>npm i iconview</code>*/}
				{/*<br/> <br/>*/}
				{/*<strong>STEP 2</strong> <span>Import NPM Package into your file</span>*/}
				{/*<code>import iconview from iconview</code>*/}
			</div>
		</>
	)
}