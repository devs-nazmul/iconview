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
import {useFilter} from "@/state/useFilter";
import {cssRootModify} from "css-root-modify";


export default function Sidebar(){
	
	const [color, setColor] = useColor("#4C535F")
	const [size, setSize] = useState(20)
	
	const { filter, setFilter } = useFilter()
	
	useEffect(() => {
		setFilter({ ...filter, color: color.hex })
		
		cssRootModify({
			primary_icon: filter.color,
		})
		
	}, [color]);
	
	
	useEffect(() => {
		cssRootModify({
			primary_size: filter.size + "px",
		})
	}, [filter.size]);
	
	
	function handleStyleChange(e){
		if (e.target.id === "all"){
			setFilter({
				...filter,
				type: Object.fromEntries(
					Object.entries(filter.type).map(([key]) => [key, key === 'all'])
				),
			});
		} else {
			setFilter({...filter, type: { ...filter.type, all: false, [e.target.id] : e.target.checked }})
		}
	}
	
	function handleVendorChange(e){
		if (e.target.id === "alls"){
			setFilter({
				...filter,
				vendor: Object.fromEntries(
					Object.entries(filter.vendor).map(([key]) => [key, key === 'alls'])
				),
			});
		} else {
			setFilter({...filter, vendor: { ...filter.vendor, alls: false, [e.target.id] : e.target.checked }})
		}
	}

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
					<label className={css.checkbox_btn} htmlFor="all"> <input checked={filter.type.all} onChange={(e) => handleStyleChange(e)} id="all" type="checkbox"/> All styles</label>
					<label className={css.checkbox_btn} htmlFor="regular"> <input checked={filter.type.regular} onChange={(e) => handleStyleChange(e)} id="regular" type="checkbox"/> Regular</label>
					<label className={css.checkbox_btn} htmlFor="solid"> <input checked={filter.type.solid} onChange={(e) => handleStyleChange(e)} id="solid" type="checkbox"/> Solid</label>
					<label className={css.checkbox_btn} htmlFor="light"> <input checked={filter.type.light} onChange={(e) => handleStyleChange(e)} id="light" type="checkbox"/> Light</label>
					<label className={css.checkbox_btn} htmlFor="thin"> <input checked={filter.type.thin} onChange={(e) => handleStyleChange(e)} id="thin" type="checkbox"/> Thin</label>
					<label className={css.checkbox_btn} htmlFor="colored"> <input checked={filter.type.colored} onChange={(e) => handleStyleChange(e)} id="colored" type="checkbox"/> Colored</label>
				</div>
			</div>
			
			<div className={cls(css.filter)}>
				<div className={css.headFlex}>
					<Text_Size_Far />
					<input className={css.filter_input} readOnly value={filter.size + "px"} type="text"/>
					<span className={css.filter_value}>
						<span>SIZE</span>
					</span>
				</div>
				
				<div className={cls(css.filter_body, css.size_box)}>
					<input value={filter.size} onChange={(e) => { setFilter({ ...filter, size: e.target.value })}} className={css.size_btn} step="5" min="15" max="40" type="range"/>
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
					<label className={css.checkbox_btn} htmlFor="alls"> <input checked={filter.vendor.alls} onChange={(e) => handleVendorChange(e)} id="alls" type="checkbox"/> All</label>
					<label className={css.checkbox_btn} htmlFor="fontawesome"> <input checked={filter.vendor.fontawesome} onChange={(e) => handleVendorChange(e)} id="fontawesome" type="checkbox"/> Font Awesome</label>
					<label className={css.checkbox_btn} htmlFor="google"> <input checked={filter.vendor.google} onChange={(e) => handleVendorChange(e)} id="google" type="checkbox"/> Google</label>
					<label className={css.checkbox_btn} htmlFor="apple"> <input checked={filter.vendor.apple} onChange={(e) => handleVendorChange(e)} id="apple" type="checkbox"/> Apple</label>
					<label className={css.checkbox_btn} htmlFor="bootstrap"> <input checked={filter.vendor.bootstrap} onChange={(e) => handleVendorChange(e)} id="bootstrap" type="checkbox"/> Bootstrap</label>
					<label className={css.checkbox_btn} htmlFor="tibian"> <input checked={filter.vendor.tibian} onChange={(e) => handleVendorChange(e)} id="tibian" type="checkbox"/> Tibian</label>
					<label className={css.checkbox_btn} htmlFor="freepik"> <input checked={filter.vendor.freepik} onChange={(e) => handleVendorChange(e)} id="freepik" type="checkbox"/> Freepik</label>
				</div>
			</div>
		</div>
	)
}

