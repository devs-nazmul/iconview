import css from './page.module.css'
import Hero from "@/app/_comp/hero";
import Featured from "@/app/_comp/featured";
import Platform from "@/app/_comp/platform";
import IconScroll from "@/app/_comp/iconScroll";
import Pricing from "@/app/_comp/pricing";
import Docs from "@/app/_comp/docs";
import Footer from "@/app/_comp/footer";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/libs/prisma";

export default async function Page(){
    
    // Check if any User
    const session = await getServerSession(authOptions)
    
    const { email } = session?.user;
    
    const user = await prisma.user.findUnique({
        where: {email: email}, include: {subscriber: true}
    })
    
    const currentPlan = user?.subscriber
    
    return(
        <>
            <Hero />
            <Featured />
            <Platform />
            <IconScroll/>
            <Pricing plan={currentPlan} />
            <Docs />
            <Footer />
        </>
    )
}