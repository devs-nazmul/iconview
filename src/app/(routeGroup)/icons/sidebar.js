"use client"

import css from './sidebar.module.css'
import {Palette_Far} from "iconview/svgs/Palette_Far";
import {useEffect, useState} from "react";

import cls from "@/libs/cls";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import {Sliders_Far} from "iconview/svgs/Sliders_Far";
import {Text_Size_Far} from "iconview/svgs/Text_Size_Far";
import {List_Tree_Far} from "iconview/svgs/List_Tree_Far";


export default function Sidebar(){
	
	const [color, setColor] = useColor("#4C535F")
	const [size, setSize] = useState(20)
	
	
	return(
		<div className={css.sidebar}>
			<div className={cls(css.filter)}>
				<div className={css.headFlex}>
					<Sliders_Far />
					<span className={css.filter_value}>
						<span>FILTER</span>
					</span>
				</div>
				
				<div className={css.filter_body}>
					<label className={css.checkbox_btn} htmlFor="all"> <input id="all" type="checkbox"/> All styles</label>
					<label className={css.checkbox_btn} htmlFor="Regular"> <input id="Regular" type="checkbox"/> Regular</label>
					<label className={css.checkbox_btn} htmlFor="solid"> <input id="solid" type="checkbox"/> Solid</label>
					<label className={css.checkbox_btn} htmlFor="light"> <input id="light" type="checkbox"/> Light</label>
					<label className={css.checkbox_btn} htmlFor="light"> <input id="light" type="checkbox"/> Light</label>
					<label className={css.checkbox_btn} htmlFor="light"> <input id="light" type="checkbox"/> Light</label>
				</div>
			</div>
			
			<div className={cls(css.filter)}>
				<div className={css.headFlex}>
					<Text_Size_Far />
					<input className={css.filter_input} readOnly value={size + "px"} type="text"/>
					<span className={css.filter_value}>
						<span>SIZE</span>
					</span>
				</div>
				
				<div className={cls(css.filter_body, css.size_box)}>
					<input id="all" value={size} onChange={e => setSize(e.target.value)} className={css.size_btn} step="5" min="15" max="40" type="range"/>
				</div>
			</div>
			
			<div className={css.filter}>
				<div className={css.headFlex}>
					<Palette_Far />
					<span className={css.filter_value}>
						<span>COLORS</span>
					</span>
				</div>
				
				<div className={cls(css.filter_body, css.color_box)}>
					<ColorPicker height={100} hideAlpha hideInput={["rgb", "hsv"]} color={color} onChange={setColor} />
				</div>
			</div>
			
			<div className={cls(css.filter)}>
				<div className={css.headFlex}>
					<List_Tree_Far />
					<span className={css.filter_value}>
						<span>VENDORS</span>
					</span>
				</div>
				
				<div className={css.filter_body}>
					<label className={css.checkbox_btn} htmlFor="all"> <input id="all" type="checkbox"/> FontAwesome</label>
					<label className={css.checkbox_btn} htmlFor="Regular"> <input id="Regular" type="checkbox"/> Materials</label>
					<label className={css.checkbox_btn} htmlFor="solid"> <input id="solid" type="checkbox"/> Apple</label>
					<label className={css.checkbox_btn} htmlFor="light"> <input id="light" type="checkbox"/> Bootstrap</label>
					<label className={css.checkbox_btn} htmlFor="light"> <input id="light" type="checkbox"/> Tibian</label>
					<label className={css.checkbox_btn} htmlFor="light"> <input id="light" type="checkbox"/> Freepik</label>
				</div>
			</div>
		</div>
	)
}

