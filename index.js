const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const resolvers = require("./resolver");
const typeDefs = require("./schema");

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers,
  playground: true,
  cors: false,
});

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

server.applyMiddleware({
  app,
  path: "/",
  cors: false,
});

// The `listen` method launches a web server.
const listner = app.listen({ port: 4000 }, () => {
  console.log(`🚀  Server ready at ${listner.address().port}`);
});
