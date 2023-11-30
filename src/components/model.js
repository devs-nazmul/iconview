import css from './model.module.css'

export default function Model({children}) {
	return(
		<div className={css.model}>
			{children}
		</div>
	)
}