# GraphQL

## Two computer wants to communicate with each other, there is a ways to do it.

    WAY 1 : REST APIs
    WAY 2 : GraphQL

# Building our first GraphQL Appplication

<a href="https://www.apollographql.com/docs/apollo-server/">Docs Link</a>

## Step 1 : create package.json file

```
npm init -y
```

In package.json, set "type: "module"

## Step 2 : install dependencies

```
npm install @apollo/server graphql
```

readme.md

```
    book {
        id,
        title,
        publiedYear,
        author
    }

    author{
        id,
        name,
        books
    }

    // DATA
    - list of books
    - list of authors
    - list of books with author details
    - list of authors with book details
```
