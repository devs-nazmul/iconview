import css from "./platform.module.css";
import {React_Fab} from "iconview/svgs/React_Fab";


export default function Platform(){
	return(
		<section className={css.section}>
			<div className={css.sec_pad}>
				<h2>Available Platforms</h2>
				<p className="sub_title">Stay Focused and get the icon you need within your design app.</p>
				<ol className={css.listGrid}>
					<li className={css.platform_box}>
						<div className={css.icon}>
							<React_Fab />
						</div>
						<div className={css.info}>
							<h4>React Application</h4>
							<span>Npm Package for react applications with 100k icons</span>
						</div>
					</li>
					<li className={css.platform_box}>
						<div className={css.icon}>
							<React_Fab />
						</div>
						<div className={css.info}>
							<h4>Nextjs Application</h4>
							<span>Npm Package for react applications with 100k icons</span>
						</div>
					</li>
					<li className={css.platform_box}>
						<div className={css.icon}>
							<React_Fab />
						</div>
						<div className={css.info}>
							<h4>Figma Design</h4>
							<span>Npm Package for react applications with 100k icons</span>
						</div>
					</li>
					<li className={css.platform_box}>
						<div className={css.icon}>
							<React_Fab />
						</div>
						<div className={css.info}>
							<h4>React Application</h4>
							<span>Npm Package for react applications with 100k icons</span>
						</div>
					</li>
					<li className={css.platform_box}>
						<div className={css.icon}>
							<React_Fab />
						</div>
						<div className={css.info}>
							<h4>React Application</h4>
							<span>Npm Package for react applications with 100k icons</span>
						</div>
					</li>
					<li className={css.platform_box}>
						<div className={css.icon}>
							<React_Fab />
						</div>
						<div className={css.info}>
							<h4>React Application</h4>
							<span>Npm Package for react applications with 100k icons</span>
						</div>
					</li>
				</ol>
			</div>
		</section>
	)
}