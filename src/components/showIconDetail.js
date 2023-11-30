"use client"

import css from "./showIconDetail.module.css";
import Button from "@/components/button";
import {Xmark_Far} from "iconview/svgs/Xmark_Far";
import {useRef} from "react";
import {redirect} from "next/navigation";

export default function ShowIconDetail({icon}){
	
	// You'll Get Icons from [id]/page or (.) intercept
	// if Not Icon Found / Redirect or set a Demo Icon Here
	
	
	if (!icon){
		redirect("/icons")
	}
	
	return(
		<div className={css.grid}>
			

			{/*	Temporary Sow Icons */}
			<div className={css.iconPrev} role="img" dangerouslySetInnerHTML={{ __html: Object.values(icon?.row) }} />
			
			
			<div className={css.info}>
				
				<div>
					<h3 className="font-bold mb-3"> {icon.usage} </h3>
					<p>Vendor - FontAwesome </p>
				</div>
				
				<div>
					<h5 className="font-bold mb-3">Tags</h5>
					<p>{icon.tags}</p>
				</div>
				
				<div className={css.codes}>
					<p>{`<${icon.usage} />`}</p>
				</div>
				
				<div>
					<h5 className="font-bold mb-3">Download Options</h5>
					<div className={css.downloads}>
						<Button type="second">SVG</Button>
						<Button type="second">PNG</Button>
						<Button type="second">SVG</Button>
					</div>
				</div>
			
			
			</div>
		</div>
	)
}