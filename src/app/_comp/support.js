import css from './support.module.css'
import Input from "@/components/input";
import Button from "@/components/button";
import {Facebook_Fab} from "iconview/svgs/Facebook_Fab";
import {Twitter_Fab} from "iconview/svgs/Twitter_Fab";
import {Linkedin_Fab} from "iconview/svgs/Linkedin_Fab";
import {Github_Fab} from "iconview/svgs/Github_Fab";
import {Youtube_Fab} from "iconview/svgs/Youtube_Fab";

export default function Support(){
	return(
		<section className={css.section}>
			<div className={css.sec_pad}>
				<div className={css.grid}>
					
					<div className={css.info}>
						
						<h2>Email or Call us with your query</h2> <br/>
						
						<h4 className="font-bold">Nazmul Hossain</h4>
						<span>
							Software Engneer | Full Stack Web, Mobile & Desktop App Developer <br/>
							IBM, Google & Meta Certified Developer & Graphic & UX/UI Designer <br/>
							Ethical Hacker & Cyber Security Expert | OFFSEC, CYBRARY
						</span> <br/>
						
						<br/>
						
						<span>devs.nazmul@gmail.com</span> <br/>
						<span>+880 1980 300300</span> <br/>
						<span>dev.nazmul.co</span>
						
						<br/> <br/>
						
						<div className={css.social}>
							<Button mini> <Facebook_Fab/> </Button>
							<Button mini> <Twitter_Fab/> </Button>
							<Button mini> <Linkedin_Fab/> </Button>
							<Button mini> <Github_Fab/> </Button>
							<Button mini> <Youtube_Fab/> </Button>
						</div>
						
					</div>
					<div className={css.rightForm}>
						
						<form className={css.form} action="">
							<div>
								<h3>Send a Message to us</h3>
								<p>and we will response to you via email</p>
							</div>
							<input className={css.input} type="text" placeholder="Message Title" />
							<input className={css.input} type="email" placeholder="Email Address" />
							<textarea className={css.input} name="" id="" rows="5" placeholder="Descriptions..."></textarea>
							<Button type="primary">SEND NOW</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}