import css from "./pricing.module.css";
import {Check_Fad} from "iconview/svgs/Check_Fad";
import {Xmark_Fad} from "iconview/svgs/Xmark_Fad";
import Button from "@/components/button";
import {User_Fad} from "iconview/svgs/User_Fad";
import cls from "@/libs/cls";
import Image from "next/image";
import istanbul from '@/assets/istanbul.png'

export default function Pricing({hideTitle, plan}){
	
	const currentPlan = plan?.name?.toLowerCase()
	
	return(
		<section className={css.section}>
			<div className={css.sec_pad}>
				
				{ !hideTitle && <div className="text-center mb-14">
					<h2>Pricing Made Simple</h2>
					<h5>Stay Focused and get the icon you need within your design app.</h5>
				</div> }
				
				<ol className={css.listGrid}>
					<li className={css.pricing_Box}>
						<div className={css.head}>
							<h5 className="">Free</h5> <br/>
							<div className="flex items-center justify-between">
								<h2>$00</h2>
								<h6>Yearly</h6>
							</div>
						</div>
						<div className={css.info}>
							<p>Basic Package for individual usage and students</p> <br/>
							
							<div className="flex flex-col">
								<div> <Check_Fad className="text-green-600 mr-3" /> Available 2k+  icons </div>
								<div> <Check_Fad className="text-green-600 mr-3" /> FontAwesome </div>
								<div> <Check_Fad className="text-green-600 mr-3" /> Bootstrap </div>
								<div> <Check_Fad className="text-green-600 mr-3" /> Materials icons </div>
								<div> <Xmark_Fad className="text-red-600 mr-3" /> Apple icons </div>
							</div>
							<br/>
							<Button disabled={currentPlan} className="w-full" type="primary"> {currentPlan === 'free'? "Your Current Plan" : "Get Started"} </Button>
						</div>
					</li>
					<li className={css.pricing_Box}>
						<div className={css.head}>
							<h5 className="">Basic</h5> <br/>
							<div className="flex items-center justify-between">
								<h2>$100</h2>
								<h6>Yearly</h6>
							</div>
						</div>
						<div className={css.info}>
							<p>Basic Package for individual usage and students</p> <br/>
							
							<div className="flex flex-col">
								<div> <Check_Fad className="text-green-600 mr-3" /> Available 2k+  icons </div>
								<div> <Check_Fad className="text-green-600 mr-3" /> FontAwesome </div>
								<div> <Check_Fad className="text-green-600 mr-3" /> Bootstrap </div>
								<div> <Check_Fad className="text-green-600 mr-3" /> Materials icons </div>
								<div> <Xmark_Fad className="text-red-600 mr-3" /> Apple icons </div>
							</div>
							<br/>
							<Button disabled={currentPlan}  className="w-full"> {currentPlan === 'basic'? "Your Current Plan" : "Get Started"} </Button>
						</div>
					</li>
					<li className={css.pricing_Box}>
						<div className={css.head}>
							<h5 className="">Team</h5> <br/>
							<div className="flex items-center justify-between">
								<h2>$300</h2>
								<h6>Yearly</h6>
							</div>
						</div>
						<div className={css.info}>
							<p>Basic Package for individual usage and students</p> <br/>
							
							<div className="flex flex-col">
								<div> <Check_Fad className="text-green-600 mr-3" /> Available 100k+  icons </div>
								<div> <User_Fad className="text-green-600 mr-3" /> FontAwesome </div>
								<div> <Check_Fad className="text-green-600 mr-3" /> Bootstrap </div>
								<div> <Check_Fad className="text-green-600 mr-3" /> Materials icons </div>
								<div> <Xmark_Fad className="text-red-600 mr-3" /> Apple icons </div>
							</div>
							<br/>
							<Button disabled={currentPlan}  className="w-full"> {currentPlan === 'enterprise'? "Your Current Plan" : "Get Started"} </Button>
						</div>
					</li>
				</ol>
				
				<ul className={cls(css.listGrid, css.listGrid4)}>
					<li className={css.pricing_Box}>
						<div className={css.head_img}>
							{/*<Image src={istanbul} alt={"Different Style"} />*/}
						</div>
						
						<div className={css.info}>
							<h5 className="font-bold mb-2">6 Different Style</h5>
							<p className="opacity-70">Basic Package for individual usage and students</p>
						</div>
					</li>
					<li className={css.pricing_Box}>
						<div className={css.head_img}>
							{/*<Image src={istanbul} alt={"Different Style"} />*/}
						</div>
						
						<div className={css.info}>
							<h5 className="font-bold mb-2">Color Customization</h5>
							<p className="opacity-70">Basic Package for individual usage and students</p>
						</div>
					</li>
					<li className={css.pricing_Box}>
						<div className={css.head_img}>
							{/*<Image src={istanbul} alt={"Different Style"} />*/}
						</div>
						
						<div className={css.info}>
							<h5 className="font-bold mb-2"> 3 Different Format </h5>
							<p className="opacity-70">Basic Package for individual usage and students</p>
						</div>
					</li>
					<li className={css.pricing_Box}>
						<div className={css.head_img}>
							{/*<Image src={istanbul} alt={"Different Style"} />*/}
						</div>
						
						<div className={css.info}>
							<h5 className="font-bold mb-2">Cross Platform</h5>
							<p className="opacity-70">Basic Package for individual usage and students</p>
						</div>
					</li>
				</ul>
				
			</div>
		</section>
	)
}