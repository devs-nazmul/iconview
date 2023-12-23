import Link from 'next/link'
import css from './not-found.module.css'
import Image from "next/image";
import notFound from '@/assets/404.svg'
import Button from "@/components/button";

export default function NotFound() {
	return (
		<section className={css.section}>
			
			<div className={css.sec_pad}>
				
				<div className={css.grid}>
					<div className={css.svg}>
						<Image src={notFound} alt={"404 Not Found"} />
					</div>
					
					<div className={css.info}>
						
						<h1>404</h1>
						<h2>Page Not Found</h2>
						
						<br/>
						
						<p>Could not find requested resource</p>
						<p>We could’t find what you searched for. Try searching again.</p>
						<p>Or Report an issues Here - <Link href={"/support"}> <span className="text-blue-600">Report</span> </Link> </p>
						
					</div>
				</div>
			</div>
		</section>
	)
}