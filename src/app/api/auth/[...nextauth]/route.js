import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import prisma from "@/libs/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter"


export const authOptions = {
	providers: [
		
		CredentialsProvider({
			id: "credentials",
			name: "Credentials",
			
			credentials: {
				username: { label: "Username", type: "text", placeholder: "jsmith" },
				password: { label: "Password", type: "password" }
			},
			
			async authorize(credentials, req) {
				
				const {email, password} = credentials
				
				// Check if User is Exist
				const user = await prisma.user.findUnique({
					where: { email: email }
				})
				
				if (user && user.password === password) {
					console.log(user);
					await req.session.update();
					
					return user
				}
				return null
			}
		}),
		
		
		GitHubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),

		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET
		})
	],
	
	adapter: PrismaAdapter(prisma),
	secret: process.env.OPENSSL_SECRET,
	session: {
		strategy: "jwt"
	},
	pages: {
		signIn: "/login",
		newUser: "/register"
	}
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }