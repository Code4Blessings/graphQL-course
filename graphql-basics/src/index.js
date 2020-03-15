import { GraphQLServer } from  'graphql-yoga'

//Scalar Types - String, Boolean, Int, Float (decimal number), ID

//Type Definitions (schemas) - describes data structures, operations, and definitions
//me is the logged in user
const typeDefs = `
    type Query {
      me: User!
      post: Post!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
    }
`

//Resolvers - functions that run when various operations are performed
const resolvers = {
    Query: {
       me() {
           return {
               id: 'abc123',
               name: 'Danny',
               email: 'danny@mail.com',
               age: 12
           }
       },
       post() {
        return {
            id: 'def345',
            title: 'My $100,000 Backend Engineering job',
            body: 'I love my new job. I work with really great people',
            published: true
        }
       }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => console.log('Server is running on http://localhost:4000'))