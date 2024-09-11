const { ApolloServer, gql } = require('apollo-server');

// Define the schema using GraphQL schema language
const typeDefs = gql`
  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type lists all the available queries that clients can execute,
  # along with the return type for each.
  type Query {
    books: [Book]
  }
`;

// Sample data for books
const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

// Define resolvers to fetch the types defined in the schema
const resolvers = {
  Query: {
    books: () => books,
  },
};

// Initialize the Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: false, // Enables the GraphQL playground
});

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
