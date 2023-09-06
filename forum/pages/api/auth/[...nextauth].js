import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const CId = process.env.GITHUB_CLIENT_ID;
const CSecret = process.env.GITHUB_CLIENT_SECRET;
export const authOptions = {
  
  providers: [
    GithubProvider({
      clientId: CId,
      clientSecret: CSecret,
    }),
  ],
  secret : 'fagsdhjkfgakjsghiauewrhdkjcxn13156rasd125r3qws'
};
export default NextAuth(authOptions); 