import { GraphQLServer } from  'graphql-yoga'

//Scalar Types - String, Boolean, Int, Float (decimal number), ID

//Type Definitions (schemas) - describes data structures, operations, and definitions
const typeDefs = `
    type Query {
      title: String!
      price: Float!
      releaseYear: Int
      rating: Float
      inStock: Boolean!
    }
`

//Resolvers - functions that run when various operations are performed
const resolvers = {
    Query: {
       title() {
        return 'Quinoa'
       },
       price() {
           return 3.99
       }, 
       releaseYear() {
          return null
       },
       rating() {
           return 4.5
       },
       inStock() {
           return true
       }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => console.log('Server is running on http://localhost:4000'))