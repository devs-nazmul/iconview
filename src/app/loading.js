import css from './loading.module.css'

export default function Loading(){
	return (
		<div className={css.loader}>
			<div className={css.bar_weave_container}>
				<div className={css.bar}></div>
				<div className={css.bar}></div>
				<div className={css.bar}></div>
				<div className={css.bar}></div>
				<div className={css.bar}></div>
			</div>
		</div>
	)
}