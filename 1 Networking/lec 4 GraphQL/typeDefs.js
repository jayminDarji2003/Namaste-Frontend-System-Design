// here we will defined schema
// here ! = important

export const typeDefs = `#graphql

    type Author{
        id: ID!
        name: String!
        books : [Book]
    }

    type Book {
        id: ID!
        title: String!
        publishedYear: Int
        author: Author
    } 


    # The "Query" type is special: it lists all of the available queries that clients can execute, along with the return type for each. In this case, the "books" query returns an array of zero or more Books (defined above).
    
    
    # Query = Fetch Data
    type Query{
        authors: [Author]
        books: [Book]
    }


    # Mutation = Update Data
    # type Mutation{

    # }
`