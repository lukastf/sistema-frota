import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

import dm from '../../../DirectMongo'

export default NextAuth({
    // Configure one or more authentication providers
      //site: process.env.NEXTAUTH_URL,
      providers: [
          Providers.Credentials({
              // The name to display on the sign in form (e.g. 'Sign in with...')
              name: 'Email and Password',
              // The credentials is used to generate a suitable form on the sign in page.
              // You can specify whatever fields you are expecting to be submitted.
              // e.g. domain, username, password, 2FA token, etc.
              credentials: {
                  username: { label: "Email", type: "text", placeholder: "" },
                  password: {  label: "Senha", type: "password" }
              },
              async authorize(credentials) {
  
                  let usuario = await dm.getOne("usuarios", {
                      usuario: credentials.username,
                      senha: credentials.password
                  })
                  
                  if (usuario) {
                      // Any user object returned here will be saved in the JSON Web Token
                      return usuario
                  } else {
                      //return null
                      throw '/?loginError=true'
                  }
              }
          })
      ],
  
      // A database is optional, but required to persist accounts in a database
      //database: null,
      secret: process.env.SECRET,
      session: {
          jwt: true,
          maxAge: 30 * 24 * 60 * 60 // 30 days
      },
      jwt: {
          signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
          encryption: true
      }
  });