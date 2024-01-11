
import css from "./pricing.module.css";
import {Check_Fad} from "iconview/svgs/Check_Fad";
import {Xmark_Fad} from "iconview/svgs/Xmark_Fad";
import Button from "@/components/button";
import {User_Fad} from "iconview/svgs/User_Fad";
import cls from "@/libs/cls";
import Image from "next/image";
import styles from '@/assets/styles.png'
import colors_custom from '@/assets/colors_custom.png'
import formats from '@/assets/formats.png'
import platforms from '@/assets/platforms.png'
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/libs/prisma";
import Link from "next/link"

export default async function Pricing({hideTitle}){
	
	// Check if any User
	const session = await getServerSession(authOptions)
	let email = null, isSubs = null, user = null;
	
	if (session){
		email = session?.user?.email;
		user = await prisma.user.findUnique({ where: {email: email}, include: {subscriber: true} })
		isSubs = user?.subscriber
	}
	
	const currentPlan = isSubs?.name?.toLowerCase()
	
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
							<div className="flex items-center justify-between text-end">
								<h2>$00</h2>
								<h6>One Time Payments</h6>
							</div>
						</div>
						<div className={css.info}>
							<p>Free Package for everyone, But limited icons available</p> <br/>
							
							<div className="flex flex-col">
								<div> <Check_Fad className="text-green-600 mr-3" /> 6k+  icons </div>
								<div> <Check_Fad className="text-green-600 mr-3" /> FontAwesome </div>
								<div> <Check_Fad className="text-green-600 mr-3" /> Bootstrap </div>
								<div> <Xmark_Fad className="text-green-600 mr-3" /> Materials icons </div>
								<div> <Xmark_Fad className="text-red-600 mr-3" /> Apple icons </div>
								<div> <Xmark_Fad className="text-red-600 mr-3" /> Future Updates </div>
							</div>
							<br/>
							<Link href={"/user/billing"}> <Button disabled={currentPlan} className="w-full" type="primary"> {currentPlan === 'free'? "Your Current Plan" : "Get Started"} </Button> </Link>
						</div>
					</li>
					<li className={css.pricing_Box}>
						<div className={css.head}>
							<h5 className="">Basic</h5> <br/>
							<div className="flex items-center justify-between text-end">
								<h2>$100</h2>
								<h6>One Time Payments</h6>
							</div>
						</div>
						<div className={css.info}>
							<p>Basic Package for individual usage and students</p> <br/>
							
							<div className="flex flex-col">
								<div><Check_Fad className="text-green-600 mr-3"/> 100k+ icons</div>
								<div><Check_Fad className="text-green-600 mr-3"/> FontAwesome</div>
								<div><Check_Fad className="text-green-600 mr-3"/> Bootstrap</div>
								<div><Check_Fad className="text-green-600 mr-3"/> Materials icons</div>
								<div><Xmark_Fad className="text-red-600 mr-3"/> Apple icons</div>
								<div><Xmark_Fad className="text-red-600 mr-3"/> Future Updates</div>
							
							</div>
							<br/>
							<Link href={"/user/billing"} > <Button disabled={currentPlan} className="w-full"> {currentPlan === 'basic'? "Your Current Plan" : "Get Started"} </Button> </Link>
						</div>
					</li>
					<li className={css.pricing_Box}>
						<div className={css.head}>
							<h5 className="">Team</h5> <br/>
							<div className="flex items-center justify-between text-end">
								<h2>$300</h2>
								<h6>One Time Payments</h6>
							</div>
						</div>
						<div className={css.info}>
							<p>Team Package for Professionals & Team Leaders</p> <br/>
							
							<div className="flex flex-col">
								<div><Check_Fad className="text-green-600 mr-3"/> 100k+ icons</div>
								<div><Check_Fad className="text-green-600 mr-3"/> FontAwesome</div>
								<div><Check_Fad className="text-green-600 mr-3"/> Bootstrap</div>
								<div><Check_Fad className="text-green-600 mr-3"/> Materials icons</div>
								<div><Check_Fad className="text-green-600 mr-3"/> Apple icons</div>
								<div><Check_Fad className="text-green-600 mr-3"/> Future Updates</div>
							
							</div>
							<br/>
							<Link href={"/user/billing"} > <Button disabled={currentPlan} className="w-full"> {currentPlan === 'enterprise'? "Your Current Plan" : "Get Started"} </Button> </Link>
						</div>
					</li>
				</ol>
				
				<ul className={cls(css.listGrid, css.listGrid4)}>
					<li className={css.pricing_Box}>
						<div className={css.head_img}>
							<Image src={styles} alt={"Different Style"} />
						</div>
						
						<div className={css.info}>
							<h5 className="font-bold mb-2">6 Different Style</h5>
							<p className="opacity-70">Choose from regular, solid, thin, colored, light and brands </p>
						</div>
					</li>
					<li className={css.pricing_Box}>
						<div className={css.head_img}>
							<Image src={colors_custom} alt={"colors_custom"} />
						</div>
						
						<div className={css.info}>
							<h5 className="font-bold mb-2">Color Customization</h5>
							<p className="opacity-70">Customize your preferred colors using hex values</p>
						</div>
					</li>
					<li className={css.pricing_Box}>
						<div className={css.head_img}>
							<Image src={formats} alt={"formats"} />
						</div>
						
						<div className={css.info}>
							<h5 className="font-bold mb-2"> 3 Different Format </h5>
							<p className="opacity-70">Use inside your projects or download svg and png files</p>
						</div>
					</li>
					<li className={css.pricing_Box}>
						<div className={css.head_img}>
							<Image src={platforms} alt={"platforms"} />
						</div>
						
						<div className={css.info}>
							<h5 className="font-bold mb-2">Cross Platform</h5>
							<p className="opacity-70">Available on web, mobile & desktop, no matter the OS</p>
						</div>
					</li>
				</ul>
				
			</div>
		</section>
	)
}