# TakeHome assignment for 2C Solutions
## A small API built using Node.js, utilising Apollo Server & GraphQL
### Table of contents
- [Specification](#specification)
- [Installation](#installation)
- [Guide](#guide)

## Specification
The main goal of this takehome assignment was to create a basic GraphQL API using Apollo Server. The API is supposed to handle user registration and user listing.
### Backend technologies used
For the backend, Apollo Server, GraphQL, Node.js.
For Node.js, some modules also include: nodemon, body-parser, express, cors, dotenv, mongoose. 
### Database
The database is a MongoDB non-relational database. The library used to connect the backend to the database is Mongoose.

## Installation
The installation is pretty straight forward:
1. Make sure you have node.js installed. It can be installed [here](https://nodejs.org/en/download/package-manager).
2. `git clone https://github.com/NenadGvozdenac/2C-Takehome`
3. `cd 2C-Takehome/Backend`
4. `npm i`
5. `npm run dev`

## Guide
After installation, you can use any tool you preffer which can send requests to a web server. Those include: Postman, Apollo Server Playground, etc.
The port of the application will be started at 4000. 
Make sure to create your .env file which will store your data in the format specified below:
```# Server configuration
PORT=4000

# MongoDB configuration
MONGOURL = <insert mongo url>
MONGO_USER = <insert mongo username>
MONGO_PASSWORD = <insert mongo password>
```
After setting up your .env file, you can use the application. Responses can be sent using GraphQL queries listed below:
```
query {
    users: [User!]!,
    user(id: ID!): User,
    filterUserByName(name: String!): [User!]!,
    filterUserByEmail(email: String!): [User!]!
}

mutation {
    addUser(name: String!, email: String!): User!,
    deleteUser(id: ID!): User!
}
```