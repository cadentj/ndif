// import NextAuth from "next-auth"
// import GitHub from "next-auth/providers/github"
// import type { Provider } from "next-auth/providers" 

// const providers: Provider[] = [
//   GitHub,
// ]


// export const providerMap = providers.map((provider) => {
//   if (typeof provider === "function") {
//     const providerData = provider()
//     return { id: providerData.id, name: providerData.name }
//   } else {
//     return { id: provider.id, name: provider.name }
//   }
// })


// export const { handlers, auth,signIn, signOut } = NextAuth({
//   providers: [GitHub],
// })

import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
});