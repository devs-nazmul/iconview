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
    title: "Open Source icon library. 100k+ icons for React, Nextjs | www.iconview.org",
    description: "Open Source icon Library, Get Access to 100k+ Svg High Quality Vector Icons for React, Nextjs, React Native and Figma. Unlimited Download For Free.",
    keywords: ["iconview", "Open Source icon library", "React icon Library", "Nextjs icon Library", "Icons", "dev.nazmul.co", "Free SVG icon", "free icon" ],
    authors: {name: "Nazmul Hossain", url: "https://dev.nazmul.co/" },
    metadataBase: new URL('https://iconview.org'),
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/en-US'},
    },
    openGraph: {
        images: '/og_image.png',
    },
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
