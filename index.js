import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import models from './models'

import typeDefs from './schema';
import resolvers from './resolvers';

const app = express();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { models } }));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

// creates/syncs the database
models.sequelize.sync().then(() => app.listen(3000));
