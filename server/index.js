const express = require('express');
const colors = require('colors')
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const connectDB = require('./conifg/db')

const port = process.env.PORT || 5000;

const app = express();

// Connecting to database
connectDB();

// Cors middlewear
app.use(cors());

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
}

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
}))

app.listen(port, console.log(`🚀Server running on port ${port}🚀`))