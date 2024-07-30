// here we will write all the methods and function that we needed. 

// data
const data = {
    authors: [
        {
            id: "1",
            name: "Author 1",
            bookIds: ["101", "102"]
        },
        {
            id: "2",
            name: "Author 2",
            bookIds: ["103"]
        },
    ],
    books: [
        {
            id: "101",
            title: "Book 1",
            publishedYear: 2000,
            authorId: "1"
        },
        {
            id: "102",
            title: "Book 2",
            publishedYear: 2010,
            authorId: "1"
        },
        {
            id: "103",
            title: "Book 3",
            publishedYear: 2020,
            authorId: "2"
        },
    ]
}

export const resolvers = {
    Book: {
        Author: (parent, args, context, info) => {

        }
    },


    Query: {
        authors: (parent, args, context, info) => {
            return data.authors
        },
        books: (parent, args, context, info) => {
            return data.books
        }
    }
}