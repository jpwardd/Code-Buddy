import { ApolloServer, gql} from 'apollo-server'
import crypto from 'crypto'


const db = {
  users: [
    { id: '1', email: 'jay@gmail.com', name: "Jay", avatarUrl: 'https://gravatar.com/...' },
    { id: '2', email: 'john@gmail.com', name: "John", avatarUrl: 'https://gravatar.com/...' },
  ],
  messages: [
    { id: '1', userId: '1', body: "hello, I am a message in a query", createdAt: Date.now() },
    { id: '2', userId: '2', body: "how can I get this value from the query?", createdAt: Date.now() },
    { id: '3', userId: '1', body: "hola amigo.", createdAt: Date.now() },
 
  ]
}


const typeDefs = gql`
  type Query {
    users: [User!]!
    user(id: ID!): User
    messages: [Message!]!
  }

  type Mutation {
    addUser(email: String!, name: String): User
  }

  type User {
    id: ID!
    email: String!
    name: String
    avatarUrl: String
    messages: [Message!]!
  }

  type Message {
    id: ID!
    body: String!
    createdAt: String
  }
` ;

const resolvers = {
  Query: {
    users: () => db.users,
    user: (root, { id}) => db.users.find(user => user.id === id),
    messages: () => db.messages,
  }, 
  Mutation: {
     addUser: (root, { email, name }) => {
    const user = {
      id: crypto.randomBytes(10).toString('hex'),
      email,
      name
    }
    db.users.push(user)
    return user
    }
  },
  User: {
    messages: user => db.messages.filter(message => message.userId === this.id)
  }
}

const server = new ApolloServer({ typeDefs, resolvers})

server.listen().then(({ url }) => console.log(url))