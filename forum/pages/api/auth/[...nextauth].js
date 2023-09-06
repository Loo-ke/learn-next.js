import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '797bd4cd0980a8fb6430',
      clientSecret: '8fbd7f26e1764106ad7a47f93cb5b9d6fdde6a14',
    }),
  ],
  secret : 'fagsdhjkfgakjsghiauewrhdkjcxn13156rasd125r3qws'
};
export default NextAuth(authOptions); 