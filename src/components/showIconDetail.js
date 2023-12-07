"use client"

import css from "./showIconDetail.module.css";
import Button from "@/components/button";
import {Xmark_Far} from "iconview/svgs/Xmark_Far";
import {useRef, useState} from "react";
import {redirect} from "next/navigation";
import Link from "next/link";
import cls from "@/libs/cls";


export default function ShowIconDetail({icon, type}){
	
	// You'll Get Icons from [id]/page or (.) intercept
	// if Not Icon Found / Redirect or set a Demo Icon Here
	
	const [activeType, setActiveType] = useState(type || "regular")
	
	
	// console.log(activeType);
	
	if (!icon || !icon.styles){
		return <div className={"bg-white p-5 "}>No Icon Found</div>
	}
	
	// console.log(icon);
	
	const activeStyle = icon.styles.filter((style) => style.type === activeType)[0]
	// console.log(activeStyle.svg);
	
	return(
		<div className={css.grid}>
			
			{/*	Temporary Sow Icons */}
			<div className={css.svg_cont}>
				
				{/*<div className={css.iconPrev} role="img" dangerouslySetInnerHTML={{__html: activeStyle.svg}}/>*/}
				
				<div className={css.iconPrev}
				     dangerouslySetInnerHTML={{__html: activeStyle.svg}}
				/>
				
				<div className={css.small_icon_prev}>
					{icon.styles.map((style) => {
						return <span
							key={style.id}
							className={cls(css.icon, activeType === style.type && css.isActive)}
							dangerouslySetInnerHTML={{__html: style.svg}}
							onClick={() => setActiveType(style.type)}
						/>
					})}
				</div>
			
			</div>
			
			<div className={css.info}>
				
				<div>
					<h3 className="font-bold mb-3"> {icon.label} <span className="capitalize text-red-600"> {activeStyle.type} </span> </h3>
					<p>Vendor - {icon.vendor} </p>
				</div>

				<div className="w-full">
					<h5 className="font-bold mb-3">Tags</h5>
					<div className={css.tag_cont}>{ icon.tags.map((tags) => tags.tag ).map((tag) => <span className={css.tag} key={tag}> {tag} </span>)}</div>
				</div>

				<div className={css.codes}>
					<p>{`<${activeStyle.usage} />`}</p>
				</div>

				<div className="w-full">
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