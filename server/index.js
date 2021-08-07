const express = require('express')
const { ApolloServer } = require('apollo-server-express');
const { PubSub } = require('graphql-subscriptions');
const { ApolloServerPluginInlineTrace } = require("apollo-server-core");
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { MONGODB } = require('./config.js');

const pubsub = new PubSub();

require('dotenv').config();

// db

const connectionString = 'mongodb://mongo:27017/social-app';
const db = async () => {
  try {
    const success = await mongoose.connect(process.env.DATABASE_CLOUD, {
    // const success = await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('DB Connected');
  } catch (error) {
    console.log('DB connection Error',error)
  }
};

// execute database connection
db();

// express server
const app = express();
app.use(bodyParser.json({ limit: '5mb' }));

// middleware
app.use(cors());

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginInlineTrace()],
  context: ({ req }) => ({ req, pubsub })
});

// applyMiddleWare method connects ApolloServer to a specific HTTP framework ie: express
apolloServer.applyMiddleware({ app });

// server
const httpserver = http.createServer(app);
apolloServer.installSubscriptionHandlers(httpserver)

// mongoose
//   .connect(MONGODB, { useNewUrlParser: true })
//   .then(() => {
//     console.log('MongoDB Connected');
//     return httpserver.listen({ port: PORT });
//   })
//   .then((res) => {
//     console.log(`Server running at ${res.url}`);
//   })
//   .catch(err => {
//     console.error(err)
//   })


httpserver.listen(process.env.PORT, function() {
  console.log(`server is ready at http:localhost:${process.env.PORT}`);
  console.log(`graphql server is ready at http:localhost:${process.env.PORT}${apolloServer.graphqlPath}`);
  console.log(`subscription is ready at http:localhost:${process.env.PORT}${apolloServer.subscriptionsPath}`);
});