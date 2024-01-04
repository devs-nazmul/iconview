import css from './page.module.css'
import Hero from "@/app/_comp/hero";
import Featured from "@/app/_comp/featured";
import Platform from "@/app/_comp/platform";
import IconScroll from "@/app/_comp/iconScroll";
import Pricing from "@/app/_comp/pricing";
import Docs from "@/app/_comp/docs";
import Footer from "@/app/_comp/footer";


export default async function Page(){
    
    return(
        <>
            <Hero />
            <Featured />
            <Platform />
            <IconScroll/>
            <Pricing/>
            <Docs />
            <Footer />
        </>
    )
}