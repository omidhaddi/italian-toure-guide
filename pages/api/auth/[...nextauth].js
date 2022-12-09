import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
export const authOptions = {
 secret: 'Secre22t',
 providers: [
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