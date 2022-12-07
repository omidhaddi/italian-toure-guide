import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
const authOptions = {
 providers: [
   GithubProvider({
     clientId: process.env.GITHUB_ID,
     clientSecret: process.env.GITHUB_SECRET,
   }),
 ],
 secret: process.env.SECRET,//protects our connection
}
export default NextAuth(authOptions)