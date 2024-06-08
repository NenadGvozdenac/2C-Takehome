require('dotenv').config()
const resolvers = require('../graphql/queries/user_resolvers')
const mutations = require('../graphql/mutations/user_mutations')
const schema = require('../graphql/schema/user_schema')
const connectDB = require('../database/config')
const express = require('express')
const app = express()
const { ApolloServer } = require('apollo-server-express')

connectDB()

const server = new ApolloServer({
    typeDefs: schema,
    resolvers: [resolvers, mutations]
})

async function startApolloServer() {
    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });
}

startApolloServer()

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});