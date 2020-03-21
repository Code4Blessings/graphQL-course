import { GraphQLServer } from  'graphql-yoga'

//Scalar Types - String, Boolean, Int, Float (decimal number), ID

//Type Definitions (schemas) - describes data structures, operations, and definitions
//me is the logged in user
const typeDefs = `
    type Query {
      add(numbers: [Float!]): Float!
      greeting(name: String, position: String): String!  
      grades: [Int!]!
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
       add(parent, args, context, info) {
          if(args.numbers.length === 0) {
            return 0;
          }
          return args.numbers.reduce((accumulator, currentvalue) => {
              return accumulator + currentvalue;
          })
       }, 
       greeting(parent, args, context, info) {
           if(args.name && args.position) {
            return `Hello ${args.name}! You are my favorite ${args.position}.`
           }else {
           return 'Hello'
           }    
       },
       grades(parent, args, context, info) {
           return [98, 97, 82]
       },
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