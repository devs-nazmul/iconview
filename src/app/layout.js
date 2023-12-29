import { Poppins } from 'next/font/google'
import './globals.css'
import NavMenu from "@/components/nav";
import AuthProvider from "@/libs/authProvider";
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Footer from "@/app/_comp/footer";
import {Analytics} from "@vercel/analytics/react";


const poppins = Poppins({
  weight: ['400', "500", "600", "700", "800"],
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-poppins"
})

export const metadata = {
  title: 'iconview.org',
  description: 'Open Source icon Library, Get Access to 100k+ Svg High Quality Vector Icons for React, Nextjs, React Native and Figma. Unlimited Download For Free.',
}

export default async function RootLayout({ children }) {
    
    const session = await getServerSession(authOptions)
    
  return (
      <AuthProvider>
          <html lang="en">
              <body className={poppins.variable}>
                  <NavMenu user={session?.user} />
                  <main className="main_container">
                      {children}
                      <Analytics />
                  </main>
                  {/*<Footer/>*/}
              </body>
          </html>
      </AuthProvider>
  )
}
