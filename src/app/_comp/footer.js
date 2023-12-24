import css from "./footer.module.css";
import Link from "next/link";
import Input from "@/components/input";
import {Paper_Plane_Top_Fad} from "iconview/svgs/Paper_Plane_Top_Fad";
import Button from "@/components/button";
import {Facebook_Fab} from "iconview/svgs/Facebook_Fab";
import {Twitter_Fab} from "iconview/svgs/Twitter_Fab";
import {Linkedin_Fab} from "iconview/svgs/Linkedin_Fab";
import {Github_Fab} from "iconview/svgs/Github_Fab";
import {Youtube_Fab} from "iconview/svgs/Youtube_Fab";

export default function Footer(){
	return(
		<section className={css.section}>
			<div className={css.sec_pad}>
				<div className={css.footer}>
					
					<div className="pr-14">
						<Link href={"/"}><h2 className={css.logo}>iconview.org</h2></Link> <br/>
						<p>iconview is a subsidery services of Belivup&nbsp;Technology&nbsp;Limited.</p> <br/>
						<p>Belivup, a software company offering web, mobile and desktop application services</p> <br/>
						<p>By Nazmul Hossain</p>
					</div>
					<div className="flex flex-col gap-2">
						<h5 className="font-bold">Our Company</h5> <br/>
						<span><Link href={"/"}> belivup.com </Link></span>
						<span><Link href={"/"}> dev.nazmul.co </Link></span>
					</div>
					
					<div className="flex flex-col gap-2">
						<h5 className="font-bold" >Our Pages </h5> <br/>
						<span><Link href={"/"}> Icons </Link></span>
						<span><Link href={"/"}> Pricing </Link></span>
						<span><Link href={"/"}> Documents </Link></span>
						<span><Link href={"/"}> Dashboard</Link></span>
					
					</div>
					
					<div className="flex flex-col pl-10">
						<h5 className="font-bold" >Newsletter</h5> <br/>
						<p>Subscribe to stay tuned for new web design and latest updates. Let's do it! </p> <br/>
						<Input icon_start={<Paper_Plane_Top_Fad />} place="Email Address"/>
						<br/>
						<div className={css.social}>
							<Button name={"facebook"} mini> <Facebook_Fab/> </Button>
							<Button name={"twitter"} mini> <Twitter_Fab/> </Button>
							<Button name={"linkedin"} mini> <Linkedin_Fab/> </Button>
							<Button name={"github"} mini> <Github_Fab/> </Button>
							<Button name={"youtube"} mini> <Youtube_Fab/> </Button>
						</div>
					</div>
					
				</div>
			</div>
		</section>
	)
}