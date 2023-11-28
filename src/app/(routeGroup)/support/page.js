import css from './page.module.css'
import Support from "@/app/_comp/support";
import Footer from "@/app/_comp/footer";

export default function Page(){
	return(
		<div className={css.docs_page}>
			
			<div className={css.head}>
				<h1>Helpline Support</h1>
				<h4>Meet the Team and get hands on supports. </h4>
			</div>
			
			<Support />
			<Footer />
		</div>
	)
}