
import css from './iconSkeleton.module.css'

export default function IconSkeleton(){
	
	return(
		<div className={css.icon_list}>
			{ Array(200).fill().map((_, index) => (
					<div key={index} className={css.icon}> </div>
			))}
		</div>
	)
}