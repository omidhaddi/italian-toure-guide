import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";


export const authOptions = {
  secret: 'Secre22t',
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "User", type: "text", placeholder: ".." },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const [user] = credentials.username
        if (user) {
          // Any object returned will be saved in `user` property
          console.log('user in auth ', user)
          return user
        } else {
          // If you return null then an error will be displayed
          return null
        }
      }
    })
  ],
}
export default NextAuth(authOptions)