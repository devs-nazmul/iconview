"use client"

import css from "@/app/(routeGroup)/icons/@model/(..)icons/[id]/page.module.css";
import Button from "@/components/button";
import {Xmark_Far} from "iconview/svgs/Xmark_Far";
import {useRef} from "react";

export default function ShowIconDetail({modelRef}){
	
	return(
		<div className={css.grid}>
			
			<div className="icon">
				icon
			</div>
			
			<div className={css.info}>
				
				<div>
					<h3 className="font-bold mb-3">Facebook Fab</h3>
					<p>Vendor - FontAwesome </p>
				</div>
				
				<div>
					<h5 className="font-bold mb-3">Tags</h5>
					<p>List of tags</p>
				</div>
				
				<div className={css.codes}>
					Code Options
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