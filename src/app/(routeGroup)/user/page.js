
import {redirect} from "next/navigation";


export default async function Page(){
	
	redirect("/user/profile")
	
	return <section> Redirect to USER </section>
}