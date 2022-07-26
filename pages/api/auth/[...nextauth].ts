
import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const AuthOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_Secret,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ]
}

export default NextAuth(AuthOptions)

