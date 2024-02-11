import KeycloakProvider from "next-auth/providers/keycloak";
import NextAuth from "next-auth";
export const authOptions = {
  providers: [
    KeycloakProvider({
      clientId: `${process.env.KEYCLOAK_CLIENT_ID}`,
      clientSecret: `${process.env.KEYCLOAK_CLIENT_SECRET}`,
      issuer: `${process.env.KEYCLOAK_ISSUER}`,
    }),
  ],
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };