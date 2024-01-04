import Model from "@/components/model";
import css from './page.module.css'
import cls from "@/libs/cls";
export default function Loading() {
	return <IconDetailSkeleton />
}

function IconDetailSkeleton(){
	return <Model>
		<div className={cls(css.skeleton, css.svg_cont )}> </div>
		<div className={css.info}>
			<h3 className="h-10"> </h3> <br/>
			<p className="h-10"> </p> <br/> <br/>
			<div className="h-32"> </div>
		</div>
	</Model>
}
