import mongoose from 'mongoose'
import express from 'express'
import session from 'express-session'
import connectMongo from 'connect-mongo'
import { ApolloServer } from 'apollo-server-express'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import {
  APP_PORT, IN_PROD, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME,
  SESS_NAME, SESS_SECRET, SESS_LIFETIME
} from './config'
import cors from 'cors'

(async () => {
  try {
    await mongoose.connect(
      `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
      { useNewUrlParser: true }
    )

    const app = express()

    app.disable('x-powered-by')

    const MongoStore = connectMongo(session)

    const store = new MongoStore({
      mongooseConnection: mongoose.connection
    })
    
    // enable cors
    var corsOptions = {
      origin: 'http://localhost:3000',
      credentials: true 
    };

    app.use(cors(corsOptions));

    app.use(session({
      store,
      name: SESS_NAME,
      secret: SESS_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: SESS_LIFETIME,
        sameSite: true,
        secure: IN_PROD
      }
    }))

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      playground: IN_PROD ? false : {
       
      },
      context: ({ req, res }) => ({ req, res })
    })

    server.applyMiddleware({ app })

    app.listen({ port: APP_PORT }, () =>
      console.log(`http://localhost:${APP_PORT}${server.graphqlPath}`)
    )
  } catch (e) {
    console.error(e)
  }
})()