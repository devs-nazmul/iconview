import css from "./platform.module.css";
import {React_Fab} from "iconview/svgs/React_Fab";
import {N_Fas} from "iconview/svgs/N_Fas";
import {Figma_Fab} from "iconview/svgs/Figma_Fab";
import {Brand_React_Native_Tbr} from "iconview/svgs/Brand_React_Native_Tbr";
import {N_Far} from "iconview/svgs/N_Far";
import {Desktop_Far} from "iconview/svgs/Desktop_Far";
import {Svg_Tbr} from "iconview/svgs/Svg_Tbr";


export default function Platform(){
	return(
		<section className={css.section}>
			<div className={css.sec_pad}>
				<h2>Available Platforms</h2>
				<h5 >Stay Focused and get the icon you need within your design app.</h5>
				<ol className={css.listGrid}>
					<li className={css.platform_box}>
						<div className={css.icon}>
							<React_Fab/>
						</div>
						<div className={css.info}>
							<h4>React Application</h4>
							<span>NPM Package for React applications with 100k icons</span>
						</div>
					</li>
					<li className={css.platform_box}>
						<div className={css.icon}>
							<N_Far/>
						</div>
						<div className={css.info}>
							<h4>Next js Application</h4>
							<span>Next js server & client components with 100k icons</span>
						</div>
					</li>
					<li className={css.platform_box}>
						<div className={css.icon}>
							<Figma_Fab/>
						</div>
						<div className={css.info}>
							<h4>Figma Plugins</h4>
							<span>Plugins available for Figma Design tools with 100k icons</span>
						</div>
					</li>
					<li className={css.platform_box}>
						<div className={css.icon}>
							<React_Fab/>
						</div>
						<div className={css.info}>
							<h4>React Native </h4>
							<span>NPM packages available for React Native Applications with 100k icons</span>
						</div>
					</li>
					
					<li className={css.platform_box}>
						<div className={css.icon}>
							<Desktop_Far/>
						</div>
						<div className={css.info}>
							<h4>Desktop Applications</h4>
							<span>Cross Platform - Windows, MacOS & Linux Dev with 100k icons</span>
						</div>
					</li>
					
					<li className={css.platform_box}>
						<div className={css.icon}>
							<Svg_Tbr/>
						</div>
						<div className={css.info}>
							<h4>SVG Icons</h4>
							<span>High Quality vector svg icons available for downloads</span>
						</div>
					</li>
				</ol>
			</div>
		</section>
	)
}