'use client'

import css from './page.module.css'
import {useItem} from "@/state/itemState";

export default function Plan({items, currentPlan}){
	
	const {item, setItem} = useItem()
	const create = new Date(currentPlan?.created)
	const expired = new Date(currentPlan?.expired)

	
	return(
		<section>
			<h3>Billing & Subscriptions</h3>
			<br/>
			{currentPlan? <h5>Your current plan</h5> : <h5>You don't have any plan</h5> }
			
			<br/>  <br/>
			
			{!currentPlan && <> <span>Select a Plan</span> <br/>
			
			<div className={css.planForm}>
				
				<label htmlFor="basic">
					<input defaultChecked onChange={() => setItem("basic")} name="plan" id="basic" type="radio" value="Basic" />
					Basic
				</label>
				
				<label htmlFor="team">
					<input onChange={() => setItem("team")} name="plan" id="team" type="radio" value="Team" />
					Team
				</label>
				
				<label htmlFor="enterprise">
					<input onChange={() => setItem("enterprise")} name="plan" id="enterprise" type="radio" value="enterprise" />
					Enterprise
				</label>
				
			</div> </>}
			
			{currentPlan?
				<div className={css.pricing}>
					<h3>{currentPlan.name} Plan</h3>
					<span>You Paid : {currentPlan.price}$/ Yearly</span> <br/>
					<span>Purchase Date {create.toLocaleDateString()}</span> <br/>
					<span>Expired Date {expired.toLocaleDateString()}</span>
				</div> :
				<div className={css.pricing}>
				
				<h3>Price: {items[item].price}$ </h3>
				<span>Per Year</span>
				
				<br/> <br/>
				<hr/>
				<br/>
				
				<table className={css.table}>
					<tbody>
					<tr>
						<th>Head</th>
						<th>Basic</th>
						<th>Premium</th>
						<th>Enterprise</th>
					</tr>
					
					<tr>
						<th>Head</th>
						<td>Table Body</td>
						<td>Table Body</td>
						<td>Table Body</td>
					</tr>
					
					<tr>
						<th>Head</th>
						<td>Table Body</td>
						<td>Table Body</td>
						<td>Table Body</td>
					</tr>
					
					<tr>
						<th>Head</th>
						<td>Table Body</td>
						<td>Table Body</td>
						<td>Table Body</td>
					</tr>
					</tbody>
				</table>
				
			</div>}
			
		</section>
	)
}