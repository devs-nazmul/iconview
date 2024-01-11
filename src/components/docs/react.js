import Image from "next/image";
import istanbul from "@/assets/istanbul.png";
import css from "@/app/_comp/docs.module.css";

export default function ReactDocs(){
	
	const lookLike =`
import { Facebook_Fab } from "iconview/svgs/Facebook_Fab"
import { Sun_Far } from "iconview/svgs/Sun_Far"

// Note That Most icon is Less than - 1kb icon

export default function Home() {
    return (
        <div>
            <Facebook_Fab/>
            <Sun_Far className="sun" color="blue" onClick={handleClick} />
        </div>
    )
}
`
	
	
	return(
		<>
			<div className="image">
				<Image src={istanbul} alt={"Different Style"}/>
			</div>
			<div className={css.docs}>
				<h4 className="font-bold">This is React/Nextjs Documentations</h4>
				<p>How to use IconView Icons in your projects.</p> <br/>
				
				<strong>STEP 1</strong> <span>Install NPM Package</span>
				<code>npm i iconview</code>
				<br/> <br/>
				
				<strong>STEP 2</strong> <span>Import NPM Package into your file</span>
				<code>
					const nextConfig = {" "}
					{"{"}
					<br/>
					&nbsp;&nbsp;transpilePackages: ['iconview'],
					<br/>
					{"}"};
				</code>
				
				<br/>
				<strong>STEP 3</strong> <span>Search & Import Icon into Your Page. Example:</span>
				<code>import {"{"} Facebook_Fab {"}"} from "iconview/svgs/Facebook_Fab";</code>
				<code>import {"{"} Wifi_Fas {"}"} from "iconview/svgs/Wifi_Fas";</code>
				
				<br/> <br/>
				<strong>STEP 4</strong> <span>Copy and Paste the style.css Into your global.css file, add at the top --</span>
				<p>global.css</p>
				<code>@import "iconview/style.css"</code>
				<br/> <br/>
				
				<p>The Page will look like - </p>
				
				<code>
					<pre> {lookLike} </pre>
				</code>
			
			</div>
		</>
	)
}